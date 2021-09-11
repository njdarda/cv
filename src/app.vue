<template lang="pug">
#app
    img(alt='Vue logo', src='./assets/logo.png')
    HelloWorldComponent(ref='HelloWorldComponent', msg='Welcome to Your Vue.js + TypeScript App')
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// Components
import HelloWorldComponent from './components/hello-world.vue'
// Types
import { TestType } from './types/types'
// Libraries and Helpers

@Component({
    components: {
        HelloWorldComponent,
    },
})
export default class App extends Vue {
    $refs!: {
        HelloWorldComponent: HelloWorldComponent
    }

    testProp!: TestType

    // Hooks
    created(): void {
        this.helloWorld()
    }

    // Methods
    helloWorld(): void {
        console.log('Hello World!')
    }
}
</script>

<style lang="scss">
@import 'app.scss';
</style>
