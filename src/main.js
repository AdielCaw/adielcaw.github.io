import { createApp } from 'vue';

import App from './App.vue';
import store from './store/index.js';
import router from './router.js';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import BaseImageCard from './components/ui/BaseImageCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(Antd);
app.use(store);

app.component('base-image-card', BaseImageCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
