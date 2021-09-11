import 'vue-class-component/hooks'
import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        $testGlobalProp: ?string
    }
}

declare module 'vue/types/options' {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface ComponentOptions<V extends Vue> {
        testOption?: ?string
    }
}

export default Vue
