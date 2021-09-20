<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { VNode, h } from 'vue'
// Libraries
import Color from 'color'
import ColorParam from 'color'
import { paramCase } from 'change-case'

@Options({
    props: ['cssVariables'],
})
export default class CssVariablesComponent extends Vue {
    cssVariables!: { [key: string]: ColorParam | string }

    render(): VNode {
        let css = ''

        for (const [key, value] of Object.entries(this.cssVariables)) {
            let varName = '--' + paramCase(key)
            css += `${varName}: ${value};`

            if (varName.endsWith('color')) {
                let color = Color(value as ColorParam)
                css += `${varName}-h: ${Math.round(color.hue() * 100) / 100};`
                css += `${varName}-s: ${Math.round(color.saturationl() * 100) / 100}%;`
                css += `${varName}-l: ${Math.round(color.lightness() * 100) / 100}%;`
            }
        }

        return h('style', `:root {${css}}`)
    }
}
</script>
