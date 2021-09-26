<template lang="pug">
#nav
    router-link(to='/') Home
    router-link(to='/about') About
metainfo(v-slot:title='{ content }')
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
    interval!: number
    prefersReducedMotion = false
    isHandheld = false

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
        if (this.cvData.header.photo) {
            this.cvData.cssVariables['photo'] = `url('${
                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require(`@/assets/photos/${this.cvData.header.photo}`).default
            }')`
        }

        this.prefersReducedMotion = this.mediaPrefersReducedMotion()
        this.isHandheld = this.mediaIsHandheld()
    }

    mounted(): void {
        if (this.isHandheld || this.prefersReducedMotion) {
            this.setThemeColor(0)
        } else {
            let colorAnimationTime = parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000

            if (window.sessionStorage.getItem('lastThemeColorIndex') !== null) {
                this.setThemeColor(parseInt(window.sessionStorage.getItem('lastThemeColorIndex') as string))
            }

            if (this.cvData.themeColors.length > 1) {
                this.interval = this.scrollAnimation(colorAnimationTime)
            } else {
                setTimeout(() => {
                    this.setThemeColor(0)
                }, colorAnimationTime)
            }
        }
    }

    beforeUnmount(): void {
        clearInterval(this.interval)
    }

    // Methods
    scrollAnimation(colorAnimationTime: number): number {
        let wrapEl = document.documentElement

        return setInterval(() => {
            let scrollPercentage = wrapEl.scrollTop / (wrapEl.scrollHeight - wrapEl.clientHeight)
            let index = Math.ceil(scrollPercentage * this.cvData.themeColors.length)
            this.setThemeColor(index > 1 ? index - 1 : 0)
        }, colorAnimationTime)
    }

    setThemeColor(index: number): void {
        if (index >= this.cvData.themeColors.length) {
            index = 0
        }
        this.cvData.cssVariables.themeColor = this.cvData.themeColors[index]
        window.sessionStorage.setItem('lastThemeColorIndex', index.toString())
    }

    mediaPrefersReducedMotion(): boolean {
        const mediaQueryList = window.matchMedia('prefers-reduced-motion: reduce')
        return mediaQueryList.matches
    }

    mediaIsHandheld(): boolean {
        const mediaQueryList = window.matchMedia('screen and (hover: hover) and (pointer: fine)')
        return !mediaQueryList.matches
    }
}
</script>

<style lang="sass">
@import '../src/css/app.sass'
</style>
