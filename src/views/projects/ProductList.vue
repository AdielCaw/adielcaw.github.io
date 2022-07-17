<template>
    <section v-if="type==='table'">
        <product-table :dataColumns="products"></product-table>
    </section>
    <ul v-else>
        <product-item v-for="prod in products" :key="prod.id" :id="prod.id" :title="prod.title" :image="prod.image"
            :description="prod.description" :price="prod.price"></product-item>
    </ul>
</template>

<script>
import ProductItem from '../../components/projects/SampleProject/ProductItem.vue';
import ProductTable from '../../components/projects/SampleProject/ProductTable.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
    components: {
    ProductItem,
    ProductTable
},
    props: ['listType'],
    setup(props) {
        const store = useStore();
        const products = computed(() => store.getters['products/products']);
        const loadProducts = async () => await store.dispatch('products/loadProducts');

        onMounted(() => loadProducts());

        return {
            products,
            type: props.listType
        }
    },
    
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>

