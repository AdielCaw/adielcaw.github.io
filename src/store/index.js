import { createStore } from 'vuex';
import productsModule from './modules/products/index.js';
import cartModule from './modules/cart/index.js';
import authModule from './modules/auth/index.js';
import navModule from './modules/nav/index.js';

const store = createStore({
    modules: {
        nav: navModule,
        products: productsModule,
        cart: cartModule,
        auth: authModule
    }
});

export default store;