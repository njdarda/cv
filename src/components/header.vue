<template lang="pug">
.header-component
    img.photo(:alt='header.name', :src='require("@/assets/" + header.photo)')
    .header-bar
        h1.name {{ header.name }}
        h2.mb-2(v-for='link in header.links')
            a(:href='link.url + link.path')
                b-icon(:icon='link.type')
                |
                | {{ link.path }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
    @Prop() header!: Record<string, unknown>
}
</script>
