import { Vue } from 'vue-class-component'
import { RouteLocation } from 'vue-router'

export default function (): { watch: (component: Vue) => void } {
    function watch(component: Vue) {
        component.$watch('$route', (to: RouteLocation, from: RouteLocation) => {
            component.$emit('route-changed', to, from, component.$el)
        })
    }

    return { watch }
}
