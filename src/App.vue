<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AppLoader from '@/components/layout/AppLoader.vue'
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import { useTheme } from '@/composables/useTheme'

// initialise theme early
useTheme()

gsap.registerPlugin(ScrollTrigger)

const loading = ref(true)
const scrollProgress = ref(0)
let lenis
let rafId

function onLoaderDone() {
  loading.value = false
}

function updateProgress() {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  scrollProgress.value = max > 0 ? (h.scrollTop / max) * 100 : 0
}

onMounted(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduced) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
  updateProgress()
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (lenis) lenis.destroy()
  window.removeEventListener('scroll', updateProgress)
})
</script>

<template>
  <!-- Loading screen -->
  <Transition
    leave-active-class="transition-opacity duration-500"
    leave-to-class="opacity-0"
  >
    <AppLoader v-if="loading" @done="onLoaderDone" />
  </Transition>

  <!-- Scroll progress bar -->
  <div
    class="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand-500 via-accent-500 to-brand-500"
    :style="{ transform: `scaleX(${scrollProgress / 100})` }"
  />

  <NavBar />
  <RouterView />
  <FooterSection />
</template>
