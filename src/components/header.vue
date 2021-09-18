<template lang="pug">
.header-component
    .header-wrapper(ref='headerWrapper')
        .photo
            .image
            .shine
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
export default class HeaderComponent extends Vue {
    @Prop() header!: Record<string, unknown>

    // Hooks
    mounted(): void {
        let headerWrapper = this.$refs.headerWrapper as Element

        setTimeout(() => {
            headerWrapper.classList.add('init-animation')
        }, 200)
        setTimeout(() => {
            headerWrapper.classList.remove('init-animation')
        }, 1000)
    }
}
</script>
