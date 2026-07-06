<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu, X, Sun, Moon, Download } from 'lucide-vue-next'
import { navLinks, profile } from '@/data/portfolio'
import { useTheme } from '@/composables/useTheme'
import GradientButton from '@/components/ui/GradientButton.vue'

const { isDark, toggle } = useTheme()
const scrolled = ref(false)
const open = ref(false)
const active = ref('#home')

function onScroll() {
  scrolled.value = window.scrollY > 24

  // scroll-spy
  let current = active.value
  for (const link of navLinks) {
    const el = document.querySelector(link.href)
    if (el) {
      const top = el.getBoundingClientRect().top
      if (top <= 140) current = link.href
    }
  }
  active.value = current
}

function go(href) {
  open.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-2' : 'py-4'"
  >
    <nav
      class="container-x flex items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6"
      :class="scrolled ? 'glass-strong shadow-card py-2.5' : 'py-3'"
    >
      <!-- Brand -->
      <a
        href="#home"
        @click.prevent="go('#home')"
        class="group flex items-center gap-2.5"
      >
        <span
          class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-sm font-bold text-white shadow-glow"
        >
          E
        </span>
        <span class="hidden font-display text-sm font-semibold tracking-tight sm:block">
          Erickson<span class="text-gradient">.dev</span>
        </span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click.prevent="go(link.href)"
            class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            :class="
              active === link.href
                ? 'text-brand-600 dark:text-brand-300'
                : 'text-ink-600 hover:text-brand-600 dark:text-ink-300 dark:hover:text-brand-300'
            "
          >
            {{ link.label }}
            <span
              v-if="active === link.href"
              class="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
            />
          </a>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <button
          @click="toggle"
          class="grid h-9 w-9 place-items-center rounded-xl glass transition-transform hover:scale-105"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" class="h-4 w-4 text-amber-400" />
          <Moon v-else class="h-4 w-4 text-brand-600" />
        </button>

        <GradientButton
          :href="profile.cvUrl"
          size="sm"
          class="hidden sm:inline-flex"
          download
        >
          <Download class="h-4 w-4" /> CV
        </GradientButton>

        <button
          @click="open = !open"
          class="grid h-9 w-9 place-items-center rounded-xl glass lg:hidden"
          aria-label="Toggle menu"
        >
          <X v-if="open" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div v-if="open" class="container-x mt-2 px-4 lg:hidden">
        <ul class="glass-strong flex flex-col gap-1 rounded-2xl p-3 shadow-card">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click.prevent="go(link.href)"
              class="block rounded-xl px-4 py-3 text-sm font-medium transition-colors"
              :class="
                active === link.href
                  ? 'bg-brand-500/10 text-brand-600 dark:text-brand-300'
                  : 'text-ink-600 hover:bg-brand-500/5 dark:text-ink-300'
              "
            >
              {{ link.label }}
            </a>
          </li>
          <li class="mt-1">
            <GradientButton :href="profile.cvUrl" class="w-full" download>
              <Download class="h-4 w-4" /> Download CV
            </GradientButton>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>
