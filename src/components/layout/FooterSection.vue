<script setup>
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-vue-next'
import { profile, navLinks } from '@/data/portfolio'

const iconMap = { Github, Linkedin, Mail }
const year = 2026

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
function go(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative overflow-hidden border-t border-ink-200/60 dark:border-white/5">
    <div class="container-x px-5 py-14 sm:px-8 lg:px-12">
      <div class="grid gap-10 md:grid-cols-3">
        <!-- Brand -->
        <div>
          <a href="#home" @click.prevent="go('#home')" class="flex items-center gap-2.5">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-base font-bold text-white shadow-glow"
            >
              E
            </span>
            <span class="font-display text-lg font-semibold">
              Erickson<span class="text-gradient">.dev</span>
            </span>
          </a>
          <p class="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            {{ profile.tagline }}. Building scalable, production-grade software with care.
          </p>
        </div>

        <!-- Quick nav -->
        <div>
          <h3 class="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-ink-400">
            Navigation
          </h3>
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                @click.prevent="go(link.href)"
                class="text-sm text-ink-600 transition-colors hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-300"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-ink-400">
            Connect
          </h3>
          <div class="flex gap-3">
            <a
              v-for="s in profile.socials"
              :key="s.label"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="grid h-11 w-11 place-items-center rounded-xl glass transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <component :is="iconMap[s.icon]" class="h-5 w-5" />
            </a>
          </div>
          <p class="mt-4 text-sm text-ink-500 dark:text-ink-400">{{ profile.email }}</p>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-200/60 pt-6 text-sm text-ink-500 dark:border-white/5 dark:text-ink-400 sm:flex-row"
      >
        <p class="flex items-center gap-1.5">
          © {{ year }} {{ profile.name }}. Crafted with
          <Heart class="h-4 w-4 fill-rose-500 text-rose-500" /> and Vue.
        </p>
        <button
          @click="scrollTop"
          class="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-medium transition-all hover:-translate-y-0.5 hover:shadow-glow"
        >
          Back to top
          <ArrowUp class="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </footer>
</template>
