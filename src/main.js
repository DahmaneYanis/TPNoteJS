import './assets/main.css'
import LinkService from './service/LinkService'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log(new LinkService().getLink("films/add"))