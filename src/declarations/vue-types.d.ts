import 'vue-class-component/hooks'
import { Vue } from 'vue-class-component'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $customGlobalProp: string
    }
}

export default Vue
