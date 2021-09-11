import 'vue-class-component/hooks'
import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $socket: WebSocket
    }
}

declare module 'vue/types/options' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ComponentOptions<V extends Vue> {
        sockets?: {
            onmessage: (event: MessageEvent) => boolean
            onclose: (event: MessageEvent) => boolean
            onerror: (event: MessageEvent) => boolean
            onopen: (event: MessageEvent) => boolean
        }
    }
}

export default Vue
