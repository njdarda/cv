<template lang="pug">
#app
    .container
        CssVariablesComponent(:cssVariables='cvData.cssVariables')
        .header
            HeaderComponent(ref='headerComponent', :header='cvData.header')
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
import cvData from '@/data/njd.json'

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
    }

    mounted(): void {
        if (this.$session.get('lastThemeColorIndex') !== undefined) {
            this.setThemeColor(this.$session.get('lastThemeColorIndex') as number)
        } else if (!this.getPrefersReducedMotion()) {
            this.initAnimation(0, parseFloat(this.cvData.cssVariables.baseAnimationTime) * 1000)
        }

        if (this.cvData.themeColors.length > 1 && !this.getPrefersReducedMotion()) {
            this.scrollAnimation(parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000)
        }
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
    initAnimation(delay: number, baseAnimationTime: number): void {
        let headerWrapper = (this.$refs.headerComponent as Vue).$refs.headerWrapper as Element

        setTimeout(() => {
            headerWrapper.classList.add('init-animation')
        }, delay + baseAnimationTime)

        setTimeout(() => {
            headerWrapper.classList.remove('init-animation')
        }, 1.5 * baseAnimationTime)
    }

    scrollAnimation(colorAnimationTime: number): void {
        let h = document.documentElement
        let b = document.body
        setInterval(() => {
            var percent = ((h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) * 100
            this.setThemeColor(Math.ceil((percent * (this.cvData.themeColors.length - 1)) / 100))
        }, colorAnimationTime)
    }

    setThemeColor(index?: number): void {
        if (index === this.themeColorIndex) {
            return
        }
        if (index !== undefined) {
            this.themeColorIndex = index
        }
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
