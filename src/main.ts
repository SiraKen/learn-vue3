import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueFire, VueFireAuth } from 'vuefire';
import { router } from './router';
import { firebaseApp } from './lib/firebase';
import App from './App.vue';
import './style.css';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueFire, { firebaseApp, modules: [VueFireAuth()] });

app.mount('#app');
