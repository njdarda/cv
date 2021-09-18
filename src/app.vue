<template lang="pug">
#app
    .container
        CssVariablesComponent(:cssVariables='cvData.cssVariables')
        .header
            HeaderComponent(:header='cvData.header')
        .left-column
            ColumnComponent(:sections='getSections("leftColumn")')
        .right-column
            ColumnComponent(:sections='getSections("rightColumn")')
        footer#footer Footer
    .background
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// Components
import HeaderComponent from '@/components/header.vue'
import ColumnComponent from '@/components/column.vue'
import CssVariablesComponent from '@/components/css-variables.vue'
// Types
// Libraries and Helpers
// Data
import cvData from '@/data/jw.json'

Component.registerHooks(['metaInfo'])

@Component({
    components: {
        HeaderComponent,
        ColumnComponent,
        CssVariablesComponent,
    },
})
export default class App extends Vue {
    cvData = cvData
    themeColorIndex!: number

    // Hooks
    created(): void {
        cvData.cssVariables['photo'] = `url('${require('@/assets/photos/' + this.cvData.header.photo)}')`

        this.animateColors(
            parseFloat(this.cvData.cssVariables.baseAnimationTime) * 1000,
            parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000,
            this.getPrefersReducedMotion(),
        )
    }

    metaInfo(): Record<string, unknown> {
        return {
            title: `CV - ${cvData.header.name}`,
            meta: [{ name: 'description', content: `${cvData.header.name}'s Curriculum vitae` }, { charset: 'utf-8' }],
            htmlAttrs: {
                lang: 'en',
            },
        }
    }

    // Methods
    animateColors(baseAnimationTime: number, colorAnimationTime: number, reducedMotion = false): void {
        if (this.$session.get('lastThemeColorIndex') !== undefined) {
            this.themeColorIndex = this.$session.get('lastThemeColorIndex') as number
            this.setThemeColor()
        } else {
            this.themeColorIndex = Math.floor(Math.random() * this.cvData.themeColors.length)
        }

        setTimeout(() => {
            this.setThemeColor()
        }, baseAnimationTime)

        if (this.cvData.themeColors.length < 2 || reducedMotion) {
            return
        }

        setTimeout(() => {
            colorAnimationTime *= 8
            this.cvData.cssVariables.colorAnimationTime = `${colorAnimationTime / 1000}s`

            this.setThemeColor()
            setInterval(() => {
                this.setThemeColor()
            }, colorAnimationTime)
        }, baseAnimationTime * 2)
    }

    setThemeColor(): void {
        if (this.themeColorIndex >= this.cvData.themeColors.length) {
            this.themeColorIndex = 0
        }
        this.cvData.cssVariables.themeColor = this.cvData.themeColors[this.themeColorIndex]
        this.$session.set('lastThemeColorIndex', this.themeColorIndex)
        this.themeColorIndex += 1
    }

    getPrefersReducedMotion(): boolean {
        const mediaQueryList = window.matchMedia('(prefers-reduced-motion: no-preference)')
        return !mediaQueryList.matches
    }

    getSections(sectionGroup: string): unknown {
        let sections: unknown[] = []
        for (const sectionName of cvData.contentGroups[sectionGroup]) {
            if (cvData.content[sectionName]) {
                sections.push(cvData.content[sectionName])
            }
        }
        return sections
    }
}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
