<script setup>
import { computed } from 'vue'

const props = defineProps({
  as: { type: String, default: 'button' },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | ghost | outline
  size: { type: String, default: 'md' }, // sm | md | lg
})

const tag = computed(() => (props.href ? 'a' : props.as))

const sizeClass = computed(
  () =>
    ({
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm',
      lg: 'px-7 py-3.5 text-base',
    })[props.size],
)

const variantClass = computed(
  () =>
    ({
      primary:
        'text-white bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-[length:200%_auto] hover:bg-[position:100%_0] shadow-glow',
      outline:
        'text-brand-700 dark:text-brand-200 border border-brand-400/60 dark:border-brand-400/30 hover:bg-brand-500/10',
      ghost:
        'text-ink-700 dark:text-ink-200 glass hover:shadow-glow-cyan',
    })[props.variant],
)
</script>

<template>
  <component
    :is="tag"
    :href="href"
    class="group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    :class="[sizeClass, variantClass]"
  >
    <slot />
  </component>
</template>
