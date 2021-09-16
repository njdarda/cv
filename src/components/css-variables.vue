<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { VNode } from 'vue'
import { CreateElement } from 'vue/types/umd'
// Libraries
import Color from 'color'

@Component
export default class CssVariablesComponent extends Vue {
    @Prop() cssVariables!: { [key: string]: string }

    render(createElement: CreateElement): VNode {
        let css = ''

        for (const [key, value] of Object.entries(this.cssVariables)) {
            css += `--${key}: ${value};`

            if (key.endsWith('color')) {
                let color = Color(value)
                css += `--${key}-h: ${Math.round(color.hue() * 100) / 100};`
                css += `--${key}-s: ${Math.round(color.saturationl() * 100) / 100}%;`
                css += `--${key}-l: ${Math.round(color.lightness() * 100) / 100}%;`
            }
        }

        return createElement('style', `:root {${css}}`)
    }
}
</script>
