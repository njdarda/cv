<template lang="pug">
span.svg-icon(v-html='getIcon(icon)')
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
    name: 'svg-icon',
    props: ['icon'],
})
export default class SvgIconComponent extends Vue {
    icon!: string

    // Methods
    getIcon(icon: string): SVGElement {
        return require('@/assets/icons/' + icon + '.svg')
    }
}
</script>

<style lang="sass">
.svg-icon > svg
    height: 1em
    width: 1em
    vertical-align: -.15em
</style>
