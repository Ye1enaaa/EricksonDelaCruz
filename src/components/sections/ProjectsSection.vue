<script setup>
import {
  Wallet,
  Smartphone,
  CreditCard,
  Radio,
  PackageSearch,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Star,
} from 'lucide-vue-next'
import { projects, extraWork } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'

const iconMap = { Wallet, Smartphone, CreditCard, Radio, PackageSearch }
</script>

<template>
  <section id="projects" class="section-pad relative">
    <div class="container-x">
      <SectionHeading
        eyebrow="Portfolio"
        title="Featured Projects"
        subtitle="A selection of production platforms, mobile apps and systems I've designed and built end to end."
      />

      <div class="mt-16 grid gap-6 md:grid-cols-2">
        <article
          v-for="(p, i) in projects"
          :key="p.id"
          v-reveal="{ dir: 'up', delay: (i % 2) * 100 }"
          :class="p.featured ? 'md:col-span-2' : ''"
        >
          <div
            v-tilt="4"
            class="group relative h-full overflow-hidden rounded-3xl glass-strong gradient-border p-7 shadow-card transition-all duration-500 hover:shadow-glow"
          >
            <!-- hover spotlight -->
            <div
              class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style="background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.12), transparent 40%)"
            />

            <div
              class="flex flex-col gap-6"
              :class="p.featured ? 'md:flex-row md:items-center' : ''"
            >
              <div :class="p.featured ? 'md:flex-1' : ''">
                <div class="mb-5 flex items-center justify-between">
                  <span
                    class="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    :class="p.accent"
                  >
                    <component :is="iconMap[p.icon]" class="h-6 w-6" />
                  </span>
                  <span
                    v-if="p.featured"
                    class="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400"
                  >
                    <Star class="h-3.5 w-3.5 fill-amber-500 text-amber-500" /> Featured
                  </span>
                  <ArrowUpRight
                    v-else
                    class="h-5 w-5 text-ink-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-500"
                  />
                </div>

                <h3 class="font-display text-xl font-bold transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-300 sm:text-2xl">
                  {{ p.title }}
                </h3>
                <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">{{ p.blurb }}</p>

                <ul class="mt-4 space-y-1.5">
                  <li
                    v-for="pt in p.points"
                    :key="pt"
                    class="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
                  >
                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                    {{ pt }}
                  </li>
                </ul>

                <div class="mt-5 flex flex-wrap gap-2">
                  <TechBadge v-for="t in p.tech" :key="t" :label="t" />
                </div>

                <a
                  v-if="p.demoUrl"
                  :href="p.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink class="h-4 w-4" /> Live Demo
                </a>
              </div>

              <!-- featured decorative panel -->
              <div v-if="p.featured" class="relative hidden md:block md:w-64">
                <div class="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-500/30 to-accent-500/20 blur-2xl" />
                <div class="relative grid aspect-square place-items-center rounded-3xl border border-white/20 bg-gradient-to-br from-brand-600/90 to-accent-500/90 text-white shadow-card">
                  <component :is="iconMap[p.icon]" class="h-24 w-24 opacity-90 animate-float" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Academic & Freelance -->
      <div class="mt-8" v-reveal="'scale'">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-white shadow-glow sm:p-10">
          <div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div class="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

          <div class="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div class="max-w-xl">
              <div class="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Layers class="h-4 w-4" /> {{ extraWork.title }}
              </div>
              <p class="text-lg leading-relaxed text-white/90">{{ extraWork.blurb }}</p>
            </div>
            <ul class="grid gap-2 sm:grid-cols-1">
              <li
                v-for="item in extraWork.items"
                :key="item"
                class="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium backdrop-blur"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-white" /> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
