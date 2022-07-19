<template>
    <a-modal v-model:visible="visible" title="Error Message" @ok="handleOk">
        <p>{{ errorMessage }}</p>
    </a-modal>

    <a-card style="width: 800px; margin-left: 20%;">
        <div id="title-style">
            <h1>Add new Product</h1>
        </div>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="producttName">Product Name</label>
                <input type="text" id="producttName" v-model.trim="product.title" />
            </div>
            <div class="form-control">
                <label for="price">Price</label>
                <input type="number" id="price" v-model.number="product.price" />
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea rows="5" id="description" v-model.trim="product.description"></textarea>
            </div>
            <div class="form-control">
                <label for="image">Image URL</label>
                <input type="url" id="image" v-model.number="product.image" />
            </div>
            <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
            <div class="actions">
                <base-button>Submit</base-button>
            </div>
        </form>
    </a-card>
    <product-list listType="table"></product-list>
</template>

<script>
import ProductList from './ProductList.vue';

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
export default {
    components: {
        ProductList
    },
    setup() {
        const product = ref({
            title: '',
            price: 0,
            description: '',
            image: ''
        });

        const formIsValid = ref(true);

        const errorMessage = ref(null);

        const visible = ref(false);

        const store = useStore();
        const router = useRouter();

        const submitForm = async () => {
            try {
                await store.dispatch('products/addProduct', {
                    title: product.value.title,
                    price: product.value.price,
                    description: product.value.description,
                    image: product.value.image,
                });
                router.replace('/projects/SampleProject');
            } catch (error) {
                errorMessage.value = error.message || 'Something failed!';
                showModal();
            }
        };

        const showModal = () => visible.value = true;

        const handleOk = (e) => {
            console.log(e);
            visible.value = false;
        };

        return {
            product,
            submitForm,
            formIsValid: formIsValid.value,
            errorMessage,
            visible,
            showModal,
            handleOk,
        };
    }
};
</script>

<style scoped>
form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 1rem;
}

.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
}

input:focus,
textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
}

.errors {
    font-weight: bold;
    color: red;
}

.actions {
    text-align: center;
}

#title-style {
    font-weight: 800;
    font-size: 30px;
    text-align: center;
}
</style>