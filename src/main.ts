import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { createMetaManager } from 'vue-meta'
import SvgIcon from '@/components/SvgIcon.vue'
import 'bootstrap'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createMetaManager())

app.component('SvgIcon', SvgIcon)

app.mount('#app')
