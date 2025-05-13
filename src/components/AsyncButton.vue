<template>
    <BaseButton
        :disabled="isPending"
        :color="color"
        @click.stop.prevent="handleClick"
    >
        <span style="display: inline-flex; align-items: center; gap: 0.5em;">
            <font-awesome-icon v-if="isPending" :icon="['fas', 'circle-notch' ]" pulse/>
            <slot></slot>
        </span>
    </BaseButton>
</template>


<script>
import BaseButton from './BaseButton.vue';

export default {
    name: 'AsyncButton',
    components: { BaseButton }, 
    inheritAttrs: false,

    props: {
        color: {
            type: String, 
            default: 'primary'
        }
    },

    data () {
        return {
            isPending: false
        }
    },

    methods: {
        handleClick () {
            const originalOnClick = /** @type {() => Promise<void>} */ (this.$attrs.onClick)
            this.isPending = true
            originalOnClick().finally(() => { this.isPending = false })
        }
    }
}
</script>