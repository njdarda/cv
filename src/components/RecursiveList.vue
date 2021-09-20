<template lang="pug">
ul
    template(v-for='(item, index) in list')
        li(v-if='item.break', :class='"break-" + item.break')
        li.list-item
            span(v-if='typeof item === "string"') {{ item }}
            template(v-else)
                span.item-name(:class='item.professional ? "professional" : ""') {{ item.name }}
                    |
                    |
                    span.item-note(v-if='item.note') {{ item.note }}
                recursive-list.children-item(v-if='item.children', :list='item.children')
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
    name: 'recursive-list',
    props: ['list'],
})
export default class ListComponent extends Vue {
    list!: Array<unknown>
}
</script>
