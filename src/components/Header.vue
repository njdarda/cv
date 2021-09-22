<template lang="pug">
.header-component(:class='header.photo ? "has-photo" : ""')
    .photo(v-if='header.photo')
        .image
        .shine
    .header-bar
        h1.name {{ header.name }}
        h2.mb-2(v-for='link in header.links')
            a(:href='link.url', :aria-label='link.name', target='_blank')
                svg-icon(:icon='link.icon')
                | !{ ' ' }
                span {{ link.value }}
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
    props: ['header'],
})
export default class HeaderComponent extends Vue {
    header!: Record<string, unknown>
}
</script>
