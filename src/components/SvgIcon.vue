<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { VNode, h } from 'vue'

@Options({
    name: 'svg-icon',
    props: ['icon'],
})
export default class SvgIconComponent extends Vue {
    icon!: string

    // Hooks
    render(): VNode {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        let svg = require('~/bootstrap-icons/icons/' + this.icon + '.svg')

        return h('svg', {
            class: ['bi', 'bi-' + this.icon],
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'currentColor',
            viewBox: '0 0 16 16',
            innerHTML: (document.createRange().createContextualFragment(svg).firstChild as HTMLElement).innerHTML,
        })
    }
}
</script>
