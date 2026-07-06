<script setup>
defineProps({
  as: { type: String, default: 'div' },
  gradient: { type: Boolean, default: true },
  hover: { type: Boolean, default: true },
})
</script>

<template>
  <component
    :is="as"
    class="glass rounded-3xl shadow-card transition-all duration-300"
    :class="[
      gradient ? 'gradient-border' : '',
      hover ? 'hover:-translate-y-1 hover:shadow-glow' : '',
    ]"
  >
    <slot />
  </component>
</template>
