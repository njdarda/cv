<template lang="pug">
metainfo
    template(v-slot:title='{ content }')
router-view
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue {}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
