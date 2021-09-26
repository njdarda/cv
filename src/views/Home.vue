<template lang="pug">
.page.container
    .header
        HeaderComponent(ref='headerComponent', :header='cvData.header')
    .left-column(:class='cvData.header.photo ? "has-photo" : ""')
        ColumnComponent(:sections='getSections("leftColumn")')
    .right-column
        ColumnComponent(:sections='getSections("rightColumn")')
    footer#footer {{ cvData.footer }}
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// Components
import HeaderComponent from '@/components/Header.vue'
import ColumnComponent from '@/components/Column.vue'
// Types
import { CvData } from '@/types/types'

@Options({
    components: {
        HeaderComponent,
        ColumnComponent,
    },
    props: ['cvData', 'prefersReducedMotion'],
})
export default class Home extends Vue {
    cvData!: CvData
    prefersReducedMotion!: boolean

    // Hooks
    mounted(): void {
        if (!this.prefersReducedMotion && window.sessionStorage.getItem('lastThemeColorIndex') === null) {
            this.initAnimation(parseFloat(this.cvData.cssVariables.baseAnimationTime) * 1000)
        }
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
    }

    getSections(sectionGroup: string): unknown[] {
        let sections: unknown[] = []
        for (const sectionName of this.cvData.contentGroups[sectionGroup]) {
            if (this.cvData.content[sectionName]) {
                sections.push(this.cvData.content[sectionName])
            }
        }

        return sections
    }
}
</script>
