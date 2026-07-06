<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur dark:border-brand-400/20 dark:bg-brand-400/10 dark:text-brand-200"
  >
    {{ label }}
  </span>
</template>
