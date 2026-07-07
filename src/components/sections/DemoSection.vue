<script setup>
import {
  PackageSearch,
  Package,
  ShoppingCart,
  Warehouse,
  Users,
  LineChart,
  ExternalLink,
  Lock,
  Rocket,
  Sparkles,
  Clock,
  ArrowUpRight,
} from 'lucide-vue-next'
import { liveDemo, comingSoonDemos } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'
import GradientButton from '@/components/ui/GradientButton.vue'

const featureIcons = { Package, ShoppingCart, Warehouse, Users, LineChart }
const soonIcons = { Rocket, Sparkles, Clock }
</script>

<template>
  <section id="demo" class="section-pad relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="aurora left-[10%] top-[15%] h-96 w-96 bg-brand-500/15" />
      <div class="aurora right-[8%] bottom-[10%] h-80 w-80 bg-accent-500/15" />
    </div>

    <div class="container-x">
      <SectionHeading
        eyebrow="Live Demo"
        title="See It In Action"
        subtitle="Don't just take my word for it — explore a real, deployed project hands-on."
      />

      <!-- Featured live demo -->
      <div class="mx-auto mt-16 max-w-5xl" v-reveal="'scale'">
        <div class="glass-strong gradient-border overflow-hidden rounded-[2rem] p-6 shadow-card sm:p-8">
          <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <!-- Browser mockup (clickable) -->
            <a
              :href="liveDemo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group relative block"
              :aria-label="`Open ${liveDemo.title} live demo`"
            >
              <div class="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-500/30 to-accent-500/25 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div class="relative overflow-hidden rounded-2xl border border-white/20 bg-ink-900 shadow-card transition-transform duration-500 group-hover:-translate-y-1.5">
                <!-- window chrome + address bar -->
                <div class="flex items-center gap-3 border-b border-white/10 bg-ink-800/80 px-4 py-3">
                  <div class="flex gap-1.5">
                    <span class="h-3 w-3 rounded-full bg-rose-400" />
                    <span class="h-3 w-3 rounded-full bg-amber-400" />
                    <span class="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div class="flex flex-1 items-center gap-2 rounded-lg bg-ink-950/70 px-3 py-1.5">
                    <Lock class="h-3 w-3 text-emerald-400" />
                    <span class="truncate font-mono text-xs text-ink-300">{{ liveDemo.domain }}</span>
                  </div>
                </div>

                <!-- fake app viewport -->
                <div class="relative aspect-[16/10] bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600">
                  <!-- decorative dashboard skeleton -->
                  <div class="absolute inset-0 p-5">
                    <div class="flex h-full gap-3">
                      <!-- sidebar -->
                      <div class="hidden w-1/4 flex-col gap-2 sm:flex">
                        <div class="h-7 w-7 rounded-lg bg-white/30" />
                        <div class="mt-2 h-2.5 w-3/4 rounded bg-white/25" />
                        <div class="h-2.5 w-2/3 rounded bg-white/20" />
                        <div class="h-2.5 w-3/4 rounded bg-white/20" />
                        <div class="h-2.5 w-1/2 rounded bg-white/15" />
                      </div>
                      <!-- main -->
                      <div class="flex flex-1 flex-col gap-3">
                        <div class="grid grid-cols-3 gap-2">
                          <div class="h-12 rounded-lg bg-white/25" />
                          <div class="h-12 rounded-lg bg-white/20" />
                          <div class="h-12 rounded-lg bg-white/15" />
                        </div>
                        <div class="flex-1 rounded-lg bg-white/15">
                          <div class="flex h-full items-end gap-2 p-3">
                            <div class="h-1/3 flex-1 rounded bg-white/40" />
                            <div class="h-2/3 flex-1 rounded bg-white/50" />
                            <div class="h-1/2 flex-1 rounded bg-white/40" />
                            <div class="h-3/4 flex-1 rounded bg-white/60" />
                            <div class="h-2/5 flex-1 rounded bg-white/40" />
                            <div class="h-full flex-1 rounded bg-white/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- hover overlay -->
                  <div class="absolute inset-0 grid place-items-center bg-ink-950/40 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                    <span class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-glow">
                      <ExternalLink class="h-4 w-4" /> Open Live App
                    </span>
                  </div>
                </div>
              </div>

              <!-- live badge -->
              <span class="absolute -top-3 left-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-glow">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Live
              </span>
            </a>

            <!-- Details -->
            <div>
              <div class="mb-4 flex items-center gap-3">
                <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
                  <PackageSearch class="h-6 w-6" />
                </span>
                <div>
                  <h3 class="font-display text-2xl font-bold">{{ liveDemo.title }}</h3>
                  <p class="text-sm text-ink-500 dark:text-ink-400">{{ liveDemo.subtitle }}</p>
                </div>
              </div>

              <p class="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                {{ liveDemo.description }}
              </p>

              <!-- feature chips -->
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="f in liveDemo.features"
                  :key="f.label"
                  class="inline-flex items-center gap-1.5 rounded-full border border-ink-200/70 bg-white/50 px-3 py-1.5 text-xs font-medium text-ink-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-300"
                >
                  <component :is="featureIcons[f.icon]" class="h-3.5 w-3.5 text-brand-500" />
                  {{ f.label }}
                </span>
              </div>

              <div class="mt-5 flex flex-wrap gap-2">
                <TechBadge v-for="t in liveDemo.tech" :key="t" :label="t" />
              </div>

              <!-- CTA -->
              <div class="mt-7">
                <GradientButton :href="liveDemo.url" size="lg" target="_blank" rel="noopener noreferrer">
                  <ExternalLink class="h-4 w-4" /> Open Live Demo
                  <ArrowUpRight class="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </GradientButton>
                <p class="mt-3 text-xs text-ink-400">
                  Hosted on Render's free tier — the app may take ~30s to wake up on first load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming soon -->
      <div class="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2">
        <div
          v-for="(c, i) in comingSoonDemos"
          :key="c.title"
          v-reveal="{ dir: 'up', delay: i * 100 }"
        >
          <div class="group relative h-full overflow-hidden rounded-3xl border border-dashed border-ink-300/70 bg-white/40 p-7 text-center transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.02]">
            <div class="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-ink-400/20 to-ink-500/10 text-ink-500 dark:text-ink-300">
              <component :is="soonIcons[c.icon]" class="h-6 w-6" />
            </div>
            <div class="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-300">
              <Clock class="h-3.5 w-3.5" /> Coming Soon
            </div>
            <h3 class="font-display text-lg font-bold">{{ c.title }}</h3>
            <p class="mt-1.5 text-sm text-ink-500 dark:text-ink-400">{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
