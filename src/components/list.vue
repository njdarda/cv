<template lang="pug">
ul
    template(v-for='(item, index) in list')
        div(v-if='item.break', :class='"new-" + item.break')
        li.list-item
            span(v-if='typeof item === "string"') {{ item }}
            template(v-else)
                span.item-name(:class='item.professional ? "professional" : ""') {{ item.name }}
                    |
                    |
                    span.item-note(v-if='item.note') {{ item.note }}
                ListComponent.children-item(v-if='item.children', :list='item.children')
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class ListComponent extends Vue {
    @Prop() list!: []
}
</script>
