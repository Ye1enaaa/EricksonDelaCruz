<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  level: { type: Number, required: true },
  accent: { type: String, default: 'from-brand-500 to-accent-500' },
})

const width = ref(0)
const barRef = ref(null)

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          // slight delay so the fill animates in view
          requestAnimationFrame(() => (width.value = props.level))
          io.disconnect()
        }
      })
    },
    { threshold: 0.4 },
  )
  if (barRef.value) io.observe(barRef.value)
})
</script>

<template>
  <div ref="barRef">
    <div class="mb-1.5 flex items-center justify-between text-sm">
      <span class="font-medium text-ink-700 dark:text-ink-200">{{ name }}</span>
      <span class="font-mono text-xs text-ink-400">{{ width }}%</span>
    </div>
    <div class="h-2.5 overflow-hidden rounded-full bg-ink-200/70 dark:bg-ink-800">
      <div
        class="h-full rounded-full bg-gradient-to-r transition-[width] duration-1000 ease-out"
        :class="accent"
        :style="{ width: width + '%' }"
      >
        <div class="h-full w-full animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] bg-[length:200%_100%]" />
      </div>
    </div>
  </div>
</template>
