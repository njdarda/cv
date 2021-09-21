<template lang="pug">
#nav
    router-link(to='/') Home
    router-link(to='/about') About
metainfo
    template(v-slot:title='{ content }')
router-view(v-slot='{ Component }')
    transition(name='slide-fade')
        component(:is='Component')
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class App extends Vue {}
</script>

<style lang="sass">
@import '@/css/app.sass'
</style>
