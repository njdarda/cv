import Vue from 'vue'
import App from './app.vue'
import {
    BBadge,
    BIcon,
    BIconGeoAltFill,
    BIconTelephoneFill,
    BIconEnvelopeFill,
    BIconGithub,
    BIconBookmarkCheckFill,
} from 'bootstrap-vue'
import VueSessionStorage from 'vue-sessionstorage'
import VueMeta from 'vue-meta'

Vue.component('BBadge', BBadge)
Vue.component('BIcon', BIcon)
Vue.component('BIconGeoAltFill', BIconGeoAltFill)
Vue.component('BIconTelephoneFill', BIconTelephoneFill)
Vue.component('BIconEnvelopeFill', BIconEnvelopeFill)
Vue.component('BIconGithub', BIconGithub)
Vue.component('BIconBookmarkCheckFill', BIconBookmarkCheckFill)

Vue.config.productionTip = false
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
})
Vue.use(VueSessionStorage)
new Vue({
    render: (h) => h(App),
}).$mount('#app')
