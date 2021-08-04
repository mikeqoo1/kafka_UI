import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import vueaxios from 'vue-axios'

const app = createApp(App)
app.use(vueaxios, axios)
app.mount('#app')

