import Vue from 'vue'
import App from './app.vue'
import { IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(IconsPlugin)
new Vue({
    render: (h) => h(App),
}).$mount('#app')
