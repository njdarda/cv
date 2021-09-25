<template lang="pug">
.nice-scrollbar(ref='niceScrollbarElement')
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { nextTick } from 'vue'
import { RouteLocation } from 'vue-router'

export default class NiceScrollComponent extends Vue {
    currentTimeout!: number

    rootEl = document.documentElement
    bodyEl = document.body
    niceEl!: HTMLElement

    scrollPositions = {}
    suppressScrollHandler = true

    // Hooks
    mounted(): void {
        this.niceEl = this.$refs.niceScrollbarElement as HTMLElement

        if (getComputedStyle(this.niceEl)['display'] === 'block') {
            this.$watch('$route', (to: RouteLocation, from: RouteLocation) => {
                nextTick(() => {
                    this.setScroll(to, from, document.querySelector('.fade-leave-active') as HTMLElement)
                })
            })

            window.addEventListener('scroll', this.scrollHandler)
            this.scrollPosition()
            this.scrollHandler()
        }
    }

    beforeUnmount(): void {
        window.removeEventListener('scroll', this.scrollHandler)
    }

    // Methods
    scrollHandler(): void {
        if (this.suppressScrollHandler) {
            this.suppressScrollHandler = false
            return
        }

        let scrollbarTop =
            (this.rootEl.scrollTop *
                (this.rootEl.clientHeight -
                    this.rootEl.clientHeight * (this.rootEl.clientHeight / this.bodyEl.scrollHeight))) /
            (this.bodyEl.scrollHeight - this.rootEl.clientHeight)

        this.niceEl.style.top = Math.round(scrollbarTop) + 'px'
    }

    scrollPosition(): void {
        if (this.rootEl.clientHeight < this.bodyEl.scrollHeight) {
            let scrollbarHeight = this.rootEl.clientHeight * (this.rootEl.clientHeight / this.bodyEl.scrollHeight)
            this.niceEl.style.height = Math.round(scrollbarHeight) + 'px'
            this.niceEl.classList.remove('scrollbar-invisible')
        }
    }

    setScroll(to: RouteLocation, from: RouteLocation, el: HTMLElement): void {
        this.currentTimeout && clearTimeout(this.currentTimeout)
        this.niceEl.classList.add('scrollbar-invisible')

        if (el) {
            this.currentTimeout = setTimeout(() => {
                this.scrollPosition()
            }, parseFloat(getComputedStyle(el)['transition-duration']) * 1000 + 32)

            this.scrollPositions[from.fullPath] = this.rootEl.scrollTop
            el.style.top = -this.rootEl.scrollTop + 'px'

            if (this.scrollPositions[to.fullPath]) {
                nextTick(() => {
                    this.suppressScrollHandler = true
                    this.rootEl.scrollTop = this.scrollPositions[to.fullPath]
                    el.style.top = this.scrollPositions[to.fullPath] + 'px'
                })
            } else {
                this.suppressScrollHandler = true
                this.rootEl.scrollTop = 0
            }
        } else {
            this.scrollPosition()
        }
    }
}
</script>

<style lang="sass">
.nice-scrollbar
  display: none

@media only screen and (hover: hover) and (pointer: fine)
  ::-webkit-scrollbar
    width: 12px
    height: 12px

  ::-webkit-scrollbar-thumb
    background-color: transparent

  ::-webkit-scrollbar-track
    background: transparent

  .nice-scrollbar
    display: block
    width: 12px
    transition: background-color var(--color-animation-time) ease-in-out, opacity var(--color-animation-time) ease-in-out
    background-color: var(--theme-color)
    opacity: 1
    position: fixed
    right: 0
    top: 0

    &.scrollbar-invisible
      opacity: 0
</style>
