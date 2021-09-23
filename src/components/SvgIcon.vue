<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { VNode, h } from 'vue'

@Options({
    name: 'svg-icon',
    props: ['icon'],
})
export default class SvgIconComponent extends Vue {
    icon!: string
    html = ''

    // Hooks
    created(): void {
        import('~/bootstrap-icons/icons/' + this.icon + '.svg').then((svg) => {
            this.html = (
                document.createRange().createContextualFragment(svg.default).firstChild as HTMLElement
            ).innerHTML
        })
    }

    render(): VNode {
        return h('svg', {
            class: ['bi', 'bi-' + this.icon],
            xmlns: 'http://www.w3.org/2000/svg',
            fill: 'currentColor',
            viewBox: '0 0 16 16',
            innerHTML: this.html,
        })
    }
}
</script>
