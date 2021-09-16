<template lang="pug">
.left-column-component
    .contacts-container
        .contact(v-for='contact in contacts')
            b-badge.mr-2.mb-2.align-middle
                b-icon(:icon='contact.icon')
            h3 {{ contact.value }}

    template(v-for='section in sections')
        div(v-if='section.break', :class='"new-" + section.break')
        .section-name.mb-2
            h2 {{ section.name }}
        template(v-if='section.languages')
            ul.text
                li(v-for='language in section.languages')
                    strong.language-name {{ language.name }}:
                    span {{ language.level }}
        template(v-else)
            template(v-if='section.list')
                ListComponent.text.skills-list(:list='section.list')
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// Components
import ListComponent from '@/components/list.vue'

@Component({
    components: {
        ListComponent,
    },
})
export default class HelloWorld extends Vue {
    @Prop() contacts!: Record<string, unknown>
    @Prop() sections!: Record<string, unknown>
}
</script>
