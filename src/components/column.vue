<template lang="pug">
.column-component
    template(v-for='section in sections')
        div(v-if='section.break', :class='"new-" + section.break')
        .section-name.mb-2(v-if='section.name')
            h2 {{ section.name }}

        .contacts-container(v-if='section.contacts')
            .contact(v-for='contact in section.contacts')
                a(v-if='contact.link', :href='contact.link')
                    b-badge.has-link.mr-2.mb-2.align-middle
                        b-icon(:icon='contact.icon')
                template(v-else)
                    b-badge.mr-2.mb-2.align-middle
                        b-icon(:icon='contact.icon')
                h3 {{ contact.value }}

        template(v-else-if='section.languages')
            ul.text.no-indent
                li(v-for='language in section.languages')
                    strong.language-name {{ language.name }}:
                    span {{ language.level }}

        template(v-else-if='section.list')
            ListComponent.text(:list='section.list', :class='section.class')

        template(v-else-if='section.items', v-for='item in section.items')
            div(v-if='item.break', :class='"new-" + item.break')

            template(v-if='item.degree')
                .subsection-name.mb-1
                    h3
                        span.position {{ item.course }}
                        br
                        | {{ item.place }}
                h3.time {{ item.time }}
                h4 {{ item.degree }}:
                span.text {{ item.specialisation }}

            template(v-else-if='item.position')
                .subsection-name.mb-1
                    h3
                        span.position {{ item.position }}
                        span
                            |
                            | • {{ item.place }}
                h3.time {{ item.time }}
                h4.mt-2 Responsibilities:
                ListComponent.text(:list='item.responsibilities')
                div(v-if='item.keyAccomplishments')
                    h4 Key accomplishments:
                    ListComponent.text(
                        v-if='!!(item.keyAccomplishments instanceof Array)',
                        :list='item.keyAccomplishments'
                    )
                    p.text(v-else) {{ item.keyAccomplishments }}
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
export default class ColumnComponent extends Vue {
    @Prop() contacts!: Record<string, unknown>
    @Prop() sections!: Record<string, unknown>
}
</script>
