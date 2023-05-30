<template lang="pug">
.nice-scrollbar(ref='niceScrollbarElement')
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { nextTick } from 'vue'
import { RouteLocation } from 'vue-router'
import { debounce } from 'lodash'

export default class NiceScrollComponent extends Vue {
    declare $refs: {
        niceScrollbarElement: HTMLElement
    }
    wrapEl!: HTMLElement
    niceEl!: HTMLElement

    currentTimeout!: number
    dragging = false
    lastY = 0
    suppressScrollHandler = true

    // Hooks
    mounted(): void {
        this.niceEl = this.$refs.niceScrollbarElement as HTMLElement

        // todo:
        // if not placed in #app:
        //     this.wrapEl = this.$refs.niceScrollbarElement.parentElement as HTMLElement
        //     let scrollWrapper = this.wrapEl
        this.wrapEl = document.documentElement

        this.wrapEl.classList.add('nice-scroll-wrapper')

        this.$watch('$route', (to: RouteLocation, from: RouteLocation) => {
            nextTick(() => {
                this.setScroll(to, from, document.querySelector('.fade-leave-active') as HTMLElement)
            })
        })

        this.setScrollbarHeight()
        this.scrollHandler()

        this.niceEl.addEventListener('mousedown', this.dragStart, { passive: true })
        this.niceEl.addEventListener('touchstart', this.dragStart, { passive: true })
        window.addEventListener('mousemove', this.dragMove)
        window.addEventListener('touchmove', this.dragMove)
        window.addEventListener('mouseup', this.dragEnd, { passive: true })
        window.addEventListener('touchend', this.dragEnd, { passive: true })

        if (this.wrapEl === document.documentElement) {
            document.body.onscroll = this.scrollHandler
        } else {
            this.wrapEl.onscroll = this.scrollHandler
        }

        window.addEventListener(
            'resize',
            debounce(() => {
                this.setScrollbarHeight()
                this.scrollHandler()
            }, 400),
            true,
        )
    }

    beforeUnmount(): void {
        // todo: rm resize listener and others
    }

    // Methods
    getClientY(event: MouseEvent | TouchEvent): number {
        if (event instanceof MouseEvent) {
            return event.clientY
        } else if (event instanceof TouchEvent) {
            return event.touches[0].clientY
        }

        return 0
    }

    dragStart(event: MouseEvent | TouchEvent): void {
        this.dragging = true
        this.lastY = this.getClientY(event)
    }

    dragEnd(): void {
        this.dragging = false
    }

    dragMove(event: MouseEvent | TouchEvent): void {
        if (!this.dragging) {
            return
        }

        // todo
        // wrapElement.style.pointerEvents = 'none'
        // wrapElement.style.userSelect = 'none'

        event.preventDefault()

        let clientY = this.getClientY(event)
        this.wrapEl.scrollTop += ((clientY - this.lastY) * this.wrapEl.scrollHeight) / this.wrapEl.clientHeight
        this.lastY = clientY
    }

    scrollHandler(): void {
        if (this.suppressScrollHandler) {
            this.suppressScrollHandler = false
            return
        }

        let scrollbarTop =
            (this.wrapEl.scrollTop *
                (this.wrapEl.clientHeight -
                    this.wrapEl.clientHeight * (this.wrapEl.clientHeight / this.wrapEl.scrollHeight))) /
            (this.wrapEl.scrollHeight - this.wrapEl.clientHeight)

        this.niceEl.style.top = Math.round(scrollbarTop) + 'px'
    }

    setScrollbarHeight(): void {
        if (this.wrapEl.clientHeight < this.wrapEl.scrollHeight) {
            let scrollbarHeight = this.wrapEl.clientHeight * (this.wrapEl.clientHeight / this.wrapEl.scrollHeight)
            this.niceEl.style.height = Math.round(scrollbarHeight) + 'px'
            this.niceEl.classList.remove('scrollbar-invisible')
        }
    }

    setScroll(to: RouteLocation, from: RouteLocation, el: HTMLElement): void {
        this.currentTimeout && clearTimeout(this.currentTimeout)
        this.niceEl.classList.add('scrollbar-invisible')

        if (el) {
            this.currentTimeout = setTimeout(() => {
                this.setScrollbarHeight()
            }, parseFloat(getComputedStyle(el)['transition-duration']) * 1000 + 32)

            el.style.top = -this.wrapEl.scrollTop + 'px'

            nextTick(() => {
                if (this.wrapEl.scrollTop) {
                    el.style.top = this.wrapEl.scrollTop + 'px'
                }
            })

            // this.suppressScrollHandler = true
            // this.wrapEl.scrollTop = 0
        } else {
            this.setScrollbarHeight()
        }
    }
}
</script>

<style lang="sass">
.nice-scroll-wrapper
    // hide scrollbar
    &::-webkit-scrollbar
        display: none
    -ms-overflow-style: none
    scrollbar-width: none

.nice-scrollbar
    display: block
    width: 12px
    transition: background-color var(--color-animation-time) ease-in-out, opacity var(--color-animation-time) ease-in-out
    background-color: var(--theme-color)
    opacity: 1
    position: fixed
    right: 0
    top: 0

    @media print
        display: none

    &.scrollbar-invisible
        opacity: 0
</style>
