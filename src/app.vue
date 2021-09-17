<template lang="pug">
#app
    .container
        CssVariablesComponent(:cssVariables='cssVariables')
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

@Component({
    components: {
        HeaderComponent,
        ColumnComponent,
        CssVariablesComponent,
    },
})
export default class App extends Vue {
    cvData = cvData
    cssVariables = {}

    // Hooks
    created(): void {
        this.cssVariables = this.cvData.cssVariables
        this.cssVariables['photo'] = `url('${require('@/assets/photos/' + this.cvData.header.photo)}')`
    }

    // Methods
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
