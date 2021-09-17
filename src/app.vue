<template lang="pug">
#app
    .container
        CssVariablesComponent(:cssVariables='cssVariables')
        .header
            HeaderComponent(:header='cvData.header')
        .left-column
            ColumnComponent(:sections='cvData.leftColumn', :contacts='cvData.contacts')
        .right-column
            ColumnComponent(:sections='cvData.rightColumn')
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
import njdData from '@/data/njd.json'

@Component({
    components: {
        HeaderComponent,
        ColumnComponent,
        CssVariablesComponent,
    },
})
export default class App extends Vue {
    cvData = njdData

    cssVariables = {
        'theme-color': this.cvData.themeColor,
        photo: `url('${require('@/assets/' + this.cvData.header.photo)}')`,
    }
}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
