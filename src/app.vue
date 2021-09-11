<template lang="pug">
#app
    img(alt='Vue logo', src='./assets/logo.png')
    HelloWorldComponent(msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorldComponent from './components/hello-world.vue'

@Component({
    components: {
        HelloWorldComponent,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import 'app.scss';
</style>
