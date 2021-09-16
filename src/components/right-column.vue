<template lang="pug">
.right-column-component
    template(v-for='section in sections')
        div(v-if='section.break', :class='"new-" + section.break')
        .section-name.mb-2
            h2 {{ section.name }}
        template(v-for='item in section.items')
            div(v-if='item.break', :class='"new-" + item.break')
            template(v-if='item.degree')
                .subsection-name.mb-1
                    h3 {{ item.degree }} • {{ item.place }}
                h3.time {{ item.time }}
                h3.course {{ item.course }}
                span.text
                    |
                    | Specialisation: {{ item.specialisation }}
            template(v-else-if='item.position')
                .subsection-name.mb-1
                    h3
                        span.position {{ item.position }}
                        span
                            |
                            | • {{ item.place }}
                h3.time {{ item.time }}
                h4.mt-2 Responsibilities:
                ul.text
                    li(v-for='responsibility in item.responsibilities')
                        | {{ responsibility }}
                div(v-if='item.keyAccomplishments')
                    h4 Key accomplishments:
                    p.text {{ item.keyAccomplishments }}
            template(v-else-if='item.courseOrganiser')
                .subsection-name.mb-1
                    h3 {{ item.courseOrganiser }}
                ul.text
                    li(v-for='item in item.items')
                        | {{ item }}
            template(v-else-if='item.list')
                ListComponent.text.skills-list(:list='item.list')
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
export default class RightColumnComponent extends Vue {
    @Prop() sections!: Record<string, unknown>
}
</script>
