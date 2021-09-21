<template lang="pug">
#cv-app.container
    h1 This is an about page
    p Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class About extends Vue {
    mounted(): void {
        let c = document.querySelector('.home-container') as HTMLElement
        let b = document.getElementById('app') as Element
        if (c) {
            c.style.top = (-1 * b.scrollTop).toString() + 'px'
        }
        b.scrollTop = 0
    }
}
</script>
