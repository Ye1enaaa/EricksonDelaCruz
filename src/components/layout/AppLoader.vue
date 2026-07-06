<script setup>
import { ref, onMounted } from 'vue'
import { profile } from '@/data/portfolio'

const emit = defineEmits(['done'])
const progress = ref(0)
const hiding = ref(false)

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)

onMounted(() => {
  const iv = setInterval(() => {
    progress.value = Math.min(100, progress.value + Math.random() * 18 + 6)
    if (progress.value >= 100) {
      clearInterval(iv)
      setTimeout(() => {
        hiding.value = true
        setTimeout(() => emit('done'), 650)
      }, 350)
    }
  }, 140)
})
</script>

<template>
  <div
    class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-50 transition-all duration-700 dark:bg-ink-950"
    :class="hiding ? 'pointer-events-none -translate-y-4 opacity-0' : 'opacity-100'"
  >
    <!-- glow ring -->
    <div class="relative mb-8 grid h-28 w-28 place-items-center">
      <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 opacity-30 blur-2xl animate-pulse" />
      <div class="absolute inset-0 animate-spin-slow rounded-3xl border border-brand-400/40" />
      <div
        class="glass-strong grid h-20 w-20 place-items-center rounded-2xl font-display text-2xl font-bold text-gradient"
      >
        {{ initials }}
      </div>
    </div>

    <p class="mb-4 font-display text-sm font-medium tracking-[0.3em] text-ink-500 dark:text-ink-400">
      LOADING PORTFOLIO
    </p>

    <!-- progress -->
    <div class="h-1 w-56 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800">
      <div
        class="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-[width] duration-200 ease-out"
        :style="{ width: progress + '%' }"
      />
    </div>
    <p class="mt-3 font-mono text-xs text-ink-400">{{ Math.round(progress) }}%</p>
  </div>
</template>
