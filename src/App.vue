<template lang="pug">
metainfo
    template(v-slot:title='{ content }')
router-view(v-slot='{ Component }', :cvData='cvData', :prefersReducedMotion='prefersReducedMotion')
    transition(name='fade')
        component(:is='Component')
NiceScrollComponent
CssVariablesComponent(:cssVariables='cvData.cssVariables')
</template>

<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component'
import { computed } from 'vue'
// Components
import NiceScrollComponent from '@/components/NiceScroll.vue'
import CssVariablesComponent from '@/components/CssVariables.vue'
// Lib
import { useMeta } from 'vue-meta'

@Options({
    components: {
        NiceScrollComponent,
        CssVariablesComponent,
    },
})
export default class App extends Vue {
    cvData = require('@/data/njd.json')
    themeColorIndex!: number
    interval!: number
    prefersReducedMotion = false

    meta = setup(() => {
        return useMeta(
            computed(() => ({
                title: `CV - ${this.cvData.header.name}` ?? 'CV',
                description: `${this.cvData.header.name}'s Curriculum vitae`,
            })),
        )
    })

    // Hooks
    created(): void {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.cvData.cssVariables['photo'] = `url('${require(`@/assets/photos/${this.cvData.header.photo}`).default}')`

        if (window.sessionStorage.getItem('lastThemeColorIndex') !== null) {
            this.setThemeColor(parseInt(window.sessionStorage.getItem('lastThemeColorIndex') as string))
        }

        this.prefersReducedMotion = this.getPrefersReducedMotion()
    }

    mounted(): void {
        if (this.cvData.themeColors.length > 1 && !this.prefersReducedMotion) {
            this.interval = this.scrollAnimation(parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000)
        }
    }

    beforeUnmount(): void {
        clearInterval(this.interval)
    }

    // Methods
    scrollAnimation(colorAnimationTime: number): number {
        var h = document.documentElement
        let b = document.body

        return setInterval(() => {
            let index = Math.ceil((h.scrollTop / (b.scrollHeight - h.clientHeight)) * this.cvData.themeColors.length)
            this.setThemeColor(index > 1 ? index - 1 : 0)
        }, colorAnimationTime)
    }

    setThemeColor(index: number): void {
        if (index === this.themeColorIndex) {
            return
        }
        if (index >= this.cvData.themeColors.length) {
            index = 0
        }
        this.themeColorIndex = index
        this.cvData.cssVariables.themeColor = this.cvData.themeColors[index]
        window.sessionStorage.setItem('lastThemeColorIndex', index.toString())
    }

    getPrefersReducedMotion(): boolean {
        const mediaQueryList = window.matchMedia('(prefers-reduced-motion: no-preference)')
        return !mediaQueryList.matches
    }
}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
