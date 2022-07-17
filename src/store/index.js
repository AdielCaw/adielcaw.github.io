import { createStore } from 'vuex';
import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
    modules: {
        products: productsModule,
        cart: cartModule,
        auth: authModule
    }
});

export default store;