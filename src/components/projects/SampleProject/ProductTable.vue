<template>
  <a-table :columns="columns" :data-source="dataSource" :pagination="{ pageSize: 10 }" :scroll="{ y: 240 }" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['title', 'price', 'description', 'image'].includes(column.dataIndex)">
        <div>
          <a-input v-if="editableData[record.id]" v-model:value="editableData[record.id][column.dataIndex]"
            style="margin: -5px 0" />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'actions'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.id]">
            <a-typography-link @click="save(record.id)">Save</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.id)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a @click="edit(record.id)">Edit</a>
            <span> | </span>
            <a @click="deleteProduct(record.id)">Delete</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script>
import { cloneDeep } from 'lodash-es';
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
const columns = [{
  title: 'Product Name',
  dataIndex: 'title',
  width: '15%',
}, {
  title: 'Price',
  dataIndex: 'price',
  width: '8%',
}, {
  title: 'Description',
  dataIndex: 'description',
  width: '32%',
}, {
  title: 'Image URL',
  dataIndex: 'image',
  width: '30%',
}, {
  title: 'actions',
  dataIndex: 'actions',
  width: '15%',
}];

export default {
  props: ['dataColumns'],
  setup(props) {
    // const data = [];
    const store = useStore();

    const dataSource = ref(props.dataColumns);
    const editableData = reactive({});

    const edit = id => {
      editableData[id] = cloneDeep(dataSource.value.filter(item => id === item.id)[0]);
    };

    const save = id => {
      Object.assign(dataSource.value.filter(item => id === item.id)[0], editableData[id]);
      console.log(editableData[id]);
      editProduct(editableData[id]);
      delete editableData[id];
    };

    const cancel = id => {
      delete editableData[id];
    };

    async function editProduct(data) {
      try {
        await store.dispatch('products/editProduct', {
          id: data.id,
          title: data.title,
          price: data.price,
          description: data.description,
          image: data.image,
        });

      } catch (error) {
        console.log(error);
      }

    }

    async function deleteProduct(id) {
      try {
        await store.dispatch('products/removeProduct', {
          id: id,
        });
        const productIndex = dataSource.value.findIndex(
          (product) => product.id === id
        );
        dataSource.value.splice(productIndex, 1);

      } catch (error) {
        console.log(error);
      }

    }

    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
      deleteProduct
    };
  },

};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
