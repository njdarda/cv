/* eslint-disable no-console */
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log('⚙️ ready')
        },
        registered() {
            console.log('⚙️ registered')
        },
        cached() {
            console.log('⚙️ cached')
        },
        updatefound() {
            console.log('⚙️ updatefound')
        },
        updated(registration: ServiceWorkerRegistration) {
            console.log('⚙️ updated')
            console.log(registration)
            window.location.reload()
        },
        offline() {
            console.log('⚙️ offline')
        },
        error(error) {
            console.error('⚙️ error', error)
        },
    })
}
