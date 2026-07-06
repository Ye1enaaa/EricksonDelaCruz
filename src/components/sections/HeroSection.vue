<script setup>
import { ArrowRight, Download, Mail, Sparkles, MapPin } from 'lucide-vue-next'
import { profile } from '@/data/portfolio'
import { useTypewriter } from '@/composables/useTypewriter'
import GradientButton from '@/components/ui/GradientButton.vue'
import AuroraBackground from '@/components/ui/AuroraBackground.vue'

const { output } = useTypewriter(profile.roles, { typeSpeed: 75, deleteSpeed: 35, holdTime: 1500 })

function go(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

const codeLines = [
  { t: 'const', k: ' engineer', o: ' = {' },
  { t: '  stack:', k: " ['Vue', 'Spring', 'K8s'],", o: '' },
  { t: '  focus:', k: " 'scalable systems',", o: '' },
  { t: '  status:', k: " 'available',", o: '' },
]
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
    <AuroraBackground />

    <div class="container-x grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
      <!-- Left: copy -->
      <div class="lg:col-span-7">
        <p
          class="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium text-brand-600 dark:text-brand-300"
          v-reveal="'left'"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for new opportunities
        </p>

        <h1
          class="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          v-reveal="{ dir: 'up', delay: 80 }"
        >
          Hi, I'm
          <span class="text-gradient-animated">{{ profile.name }}</span>
        </h1>

        <!-- Typewriter role -->
        <div
          class="mt-5 flex h-10 items-center font-display text-xl font-medium text-ink-600 dark:text-ink-300 sm:text-2xl"
          v-reveal="{ dir: 'up', delay: 160 }"
        >
          <Sparkles class="mr-2 h-5 w-5 text-accent-500" />
          <span>{{ output }}</span>
          <span class="ml-0.5 inline-block h-6 w-0.5 animate-blink bg-brand-500 sm:h-7" />
        </div>

        <p
          class="mt-6 max-w-xl text-base leading-relaxed text-ink-500 dark:text-ink-400 sm:text-lg"
          v-reveal="{ dir: 'up', delay: 240 }"
        >
          {{ profile.summary }}
        </p>

        <div
          class="mt-5 inline-flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400"
          v-reveal="{ dir: 'up', delay: 300 }"
        >
          <MapPin class="h-4 w-4 text-brand-500" /> {{ profile.location }}
        </div>

        <!-- CTAs -->
        <div class="mt-8 flex flex-wrap gap-3" v-reveal="{ dir: 'up', delay: 360 }">
          <GradientButton size="lg" @click="go('#projects')">
            View Projects
            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </GradientButton>
          <GradientButton :href="profile.cvUrl" variant="outline" size="lg" download>
            <Download class="h-4 w-4" /> Download CV
          </GradientButton>
          <GradientButton variant="ghost" size="lg" @click="go('#contact')">
            <Mail class="h-4 w-4" /> Contact Me
          </GradientButton>
        </div>

        <!-- Stats -->
        <dl
          class="mt-12 grid max-w-lg grid-cols-3 gap-4"
          v-reveal="{ dir: 'up', delay: 420 }"
        >
          <div v-for="s in profile.stats" :key="s.label" class="text-center sm:text-left">
            <dt class="font-display text-2xl font-bold text-gradient sm:text-3xl">{{ s.value }}</dt>
            <dd class="mt-1 text-xs text-ink-500 dark:text-ink-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- Right: floating visual -->
      <div class="lg:col-span-5" v-reveal="{ dir: 'right', delay: 200 }">
        <div class="relative mx-auto max-w-sm" v-tilt="8">
          <!-- glow -->
          <div class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/40 to-accent-500/30 blur-3xl" />

          <!-- avatar / code card -->
          <div class="relative">
            <div class="glass-strong gradient-border overflow-hidden rounded-[2rem] p-6 shadow-card">
              <!-- window chrome -->
              <div class="mb-4 flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-rose-400" />
                <span class="h-3 w-3 rounded-full bg-amber-400" />
                <span class="h-3 w-3 rounded-full bg-emerald-400" />
                <span class="ml-2 font-mono text-xs text-ink-400">engineer.js</span>
              </div>

              <!-- avatar ring -->
              <div class="mb-5 flex items-center gap-4">
                <div class="relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-2xl font-bold text-white shadow-glow">
                  ED
                  <span class="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-emerald-500 text-[10px] text-white dark:border-ink-900">●</span>
                </div>
                <div>
                  <p class="font-display font-semibold">{{ profile.name }}</p>
                  <p class="text-xs text-ink-400">{{ profile.tagline }}</p>
                </div>
              </div>

              <!-- code snippet -->
              <pre class="rounded-xl bg-ink-900/90 p-4 font-mono text-xs leading-relaxed text-ink-200 dark:bg-black/40"><code><span v-for="(l, i) in codeLines" :key="i" class="block"><span class="text-fuchsia-400">{{ l.t }}</span><span class="text-emerald-300">{{ l.k }}</span><span class="text-ink-400">{{ l.o }}</span></span><span class="block text-ink-400">}</span></code></pre>
            </div>

            <!-- floating chips -->
            <div class="absolute -left-6 top-16 animate-float rounded-2xl glass-strong px-4 py-2 text-sm font-semibold shadow-card">
              <span class="text-gradient">☕ 5+ yrs</span>
            </div>
            <div
              class="absolute -right-5 bottom-10 animate-float rounded-2xl glass-strong px-4 py-2 text-sm font-semibold shadow-card"
              style="animation-delay: -3s"
            >
              🚀 DevOps
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- scroll cue -->
    <a
      href="#about"
      @click.prevent="go('#about')"
      class="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-400 sm:flex"
      aria-label="Scroll down"
    >
      <span class="text-xs uppercase tracking-widest">Scroll</span>
      <span class="grid h-9 w-6 justify-center rounded-full border-2 border-ink-300 pt-1.5 dark:border-ink-600">
        <span class="h-1.5 w-1 animate-bounce rounded-full bg-brand-500" />
      </span>
    </a>
  </section>
</template>
