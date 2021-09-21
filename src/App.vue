<template lang="pug">
metainfo
    template(v-slot:title='{ content }')
router-view
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
// Libraries
import PerfectScrollbar from 'perfect-scrollbar'

export default class App extends Vue {
    ps!: PerfectScrollbar

    mounted(): void {
        this.ps = new PerfectScrollbar('#app', {
            suppressScrollX: true,
            swipeEasing: false,
        })
    }

    beforeUnmount(): void {
        this.ps.destroy()
    }
}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
