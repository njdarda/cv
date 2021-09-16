<template lang="pug">
.header-component
    .header-box(ref='headerBox')
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
        let headerBox = this.$refs.headerBox as Element

        headerBox.classList.add('init-animation')
        setTimeout(() => {
            headerBox.classList.remove('init-animation')
        }, 500)
    }
}
</script>
