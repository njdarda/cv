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
        if (window.sessionStorage.getItem('lastThemeColorIndex') !== null) {
            this.setThemeColor(parseInt(window.sessionStorage.getItem('lastThemeColorIndex') as string))
        } else if (!this.getPrefersReducedMotion()) {
            this.initAnimation(0, parseFloat(this.cvData.cssVariables.baseAnimationTime) * 1000)
        }

        if (this.cvData.themeColors.length > 1 && !this.getPrefersReducedMotion()) {
            this.scrollAnimation(parseFloat(this.cvData.cssVariables.colorAnimationTime) * 1000)
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
            let percent = ((h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) * 100
            let index = Math.ceil((percent * (this.cvData.themeColors.length - 1)) / 100)
            this.setThemeColor(index)
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
