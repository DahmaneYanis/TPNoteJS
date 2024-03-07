import './assets/main.css'
import LinkService from './service/LinkService'
import Movie from './model/Movie'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

console.log(new Movie("titre", "description", "htppquelque chose.com"))