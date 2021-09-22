<template lang="pug">
.column-component
    template(v-for='section in sections')
        div(v-if='section.break', :class='"break-" + section.break')
        .section-name.mb-2(v-if='section.name')
            h2 {{ section.name }}

        .contacts-container(v-if='section.contacts')
            .contact(v-for='contact in section.contacts')
                a(
                    v-if='contact.link',
                    :href='contact.link',
                    :aria-label='contact.name',
                    :target='contact.link.startsWith("https") ? "_blank" : ""'
                )
                    span.badge.has-link.me-2.mb-2.align-middle
                        svg-icon(:icon='contact.icon')
                template(v-else)
                    span.badge.me-2.mb-2.align-middle
                        svg-icon(:icon='contact.icon')
                h3 {{ contact.value }}

        template(v-else-if='section.languages')
            ul.text.no-indent
                li(v-for='language in section.languages')
                    strong.language-name {{ language.name }}:!{ ' ' }
                    span {{ language.level }}

        template(v-else-if='section.courses')
            template(v-for='course in section.courses')
                h4 {{ course.organiser }}
                ul.text
                    li(v-for='courseName in course.children')
                        | {{ courseName }}

        template(v-else-if='section.items', v-for='item in section.items')
            div(v-if='item.break', :class='"break-" + item.break')

            template(v-if='item.degree')
                .subsection-name.mb-1
                    h3
                        span.position {{ item.course }}
                        span
                            |
                            | • {{ item.place }}
                h3.time {{ item.time }}
                h4 {{ item.degree }}:
                span.text {{ item.specialisation }}

            template(v-else-if='item.project')
                .subsection-name.mb-1
                    h3
                        span.project {{ item.project }}
                h3.time {{ item.time }}
                div(v-if='item.keyAccomplishments')
                    h4 Key accomplishments:
                    ListComponent.text(
                        v-if='!!(item.keyAccomplishments instanceof Array)',
                        :list='item.keyAccomplishments'
                    )
                    p.text(v-else) {{ item.keyAccomplishments }}
                h4.mt-2 Features:
                ListComponent.text(:list='item.features')

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

        template(v-else-if='section.list')
            ListComponent.text(:list='section.list', :class='section.class')
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
// Components
import ListComponent from '@/components/RecursiveList.vue'

@Options({
    components: {
        ListComponent,
    },
    props: ['contacts', 'sections'],
})
export default class ColumnComponent extends Vue {
    contacts!: Record<string, unknown>
    sections!: Record<string, unknown>
}
</script>
