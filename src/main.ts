import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import SvgIcon from '@/components/SvgIcon.vue'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(createMetaManager())

app.component('SvgIcon', SvgIcon)

app.mount('#app')
