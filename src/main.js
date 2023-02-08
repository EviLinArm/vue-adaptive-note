import { createApp } from 'vue'
import App from '@/App.vue'
import 'bulma/css/bulma.min.css';
import router from "@/router";
import './assets/main.css'

createApp(App)
    .use(router)
    .mount('#app')
