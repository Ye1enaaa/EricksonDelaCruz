<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left
})
</script>

<template>
  <div
    class="max-w-2xl"
    :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
    v-reveal
  >
    <p
      v-if="eyebrow"
      class="mb-3 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
      <span class="text-gradient">{{ title }}</span>
    </h2>
    <p
      v-if="subtitle"
      class="mt-4 text-base leading-relaxed text-ink-500 dark:text-ink-400"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
