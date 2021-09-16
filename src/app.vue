<template lang="pug">
#app
    .container
        CssVariablesComponent(:cssVariables='cssVariables')
        .header
            HeaderComponent(:header='cvData.header')
        .left-column
            LeftColumnComponent(:sections='cvData.leftColumn', :contacts='cvData.contacts')
        .right-column
            RightColumnComponent(:sections='cvData.rightColumn')
        footer#footer Footer
    .background
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// Components
import HeaderComponent from '@/components/header.vue'
import LeftColumnComponent from '@/components/left-column.vue'
import RightColumnComponent from '@/components/right-column.vue'
import CssVariablesComponent from '@/components/css-variables.vue'
// Types
// Libraries and Helpers
// Data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import jwData from '@/data/jw.json'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import njdData from '@/data/njd.json'

@Component({
    components: {
        HeaderComponent,
        LeftColumnComponent,
        RightColumnComponent,
        CssVariablesComponent,
    },
})
export default class App extends Vue {
    cvData = jwData
    cssVariables = {
        'theme-color': this.cvData.themeColor,
        photo: `url('${require('@/assets/' + this.cvData.header.photo)}')`,
    }
}
</script>

<style lang="scss">
@import '@/css/app.scss';
</style>
