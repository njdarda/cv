import Vue from 'vue'
import App from './app.vue'
import { IconsPlugin } from 'bootstrap-vue'
import VueSessionStorage from 'vue-sessionstorage'

Vue.config.productionTip = false

Vue.use(VueSessionStorage)
Vue.use(IconsPlugin)
new Vue({
    render: (h) => h(App),
}).$mount('#app')
