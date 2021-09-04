import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bemDirective from './directives/BEMdirective.js'

const vue = createApp(App)
vue.use(router)
vue.mount('#app')
vue.directive('bem', bemDirective)