<script setup>
// Decorative animated gradient blobs + grid. Purely presentational.
defineProps({
  grid: { type: Boolean, default: true },
})
</script>

<template>
  <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div
      v-if="grid"
      class="absolute inset-0 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)] dark:bg-grid-dark"
    />
    <div
      class="aurora left-[-10%] top-[-10%] h-[36rem] w-[36rem] animate-float-slow bg-brand-500/40 dark:bg-brand-600/30"
    />
    <div
      class="aurora right-[-8%] top-[10%] h-[30rem] w-[30rem] animate-float bg-accent-500/30 dark:bg-accent-500/20"
      style="animation-delay: -2s"
    />
    <div
      class="aurora bottom-[-15%] left-[25%] h-[34rem] w-[34rem] animate-float-slow bg-fuchsia-500/20 dark:bg-fuchsia-600/20"
      style="animation-delay: -4s"
    />
  </div>
</template>
