import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setComponent } from './modules/component.module'
import './assets/tailwind.css';

const app = createApp(App)
setComponent(app)
app.use(router)
app.mount('#app');
