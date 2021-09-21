<template lang="pug">
#cv-app.container.home-container
    CssVariablesComponent(:cssVariables='cvData.cssVariables')
    .header
        HeaderComponent(ref='headerComponent', :header='cvData.header')
    .left-column
        ColumnComponent(:sections='getSections("leftColumn")')
    .right-column
        ColumnComponent(:sections='getSections("rightColumn")')
    footer#footer Footer
</template>

<script lang="ts">
import { Vue, Options, setup } from 'vue-class-component'
import { computed } from 'vue'
// Components
import HeaderComponent from '@/components/Header.vue'
import ColumnComponent from '@/components/Column.vue'
import CssVariablesComponent from '@/components/CssVariables.vue'
// Types
// Libraries and Helpers
import { useMeta } from 'vue-meta'
// Data
import cvData from '@/data/njd.json'

@Options({
    components: {
        HeaderComponent,
        ColumnComponent,
        CssVariablesComponent,
    },
})
export default class Home extends Vue {
    cvData = cvData
    themeColorIndex!: number
    interval!: number

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
        cvData.cssVariables['photo'] = `url('${require(`@/assets/photos/${this.cvData.header.photo}`).default}')`
    }

    mounted(): void {
        if (!this.getPrefersReducedMotion()) {
            if (window.sessionStorage.getItem('lastThemeColorIndex') !== null) {
                this.setThemeColor(parseInt(window.sessionStorage.getItem('lastThemeColorIndex') as string))
            } else {
                this.initAnimation(parseFloat(this.cvData.cssVariables.baseAnimationTime) * 1000)
            }
        }

        if (this.cvData.themeColors.length > 1 && !this.getPrefersReducedMotion()) {
            this.interval = this.scrollAnimation(parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000)
        }
    }

    beforeUnmount(): void {
        clearInterval(this.interval)
    }

    // Methods
    initAnimation(baseAnimationTime: number): void {
        let sectionElements = document.querySelectorAll('.section-name, .subsection-name')
        for (const sectionElement of sectionElements) {
            sectionElement.classList.add('init-animation')
        }

        setTimeout(() => {
            for (const sectionElement of sectionElements) {
                sectionElement.classList.remove('init-animation')
            }
        }, 3 * baseAnimationTime)

        let headerWrapper = (this.$refs.headerComponent as Vue).$refs.headerWrapper as Element

        setTimeout(() => {
            headerWrapper.classList.add('init-animation')
        }, baseAnimationTime)

        setTimeout(() => {
            headerWrapper.classList.remove('init-animation')
        }, 1.5 * baseAnimationTime)
    }

    scrollAnimation(colorAnimationTime: number): number {
        var h = document.documentElement
        let b = document.getElementById('app') as Element

        return setInterval(() => {
            let index = Math.ceil((b.scrollTop / (b.scrollHeight - h.clientHeight)) * this.cvData.themeColors.length)
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
