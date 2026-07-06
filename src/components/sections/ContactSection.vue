<script setup>
import { computed } from 'vue'
import { Mail, MapPin, Github, Linkedin, ArrowRight } from 'lucide-vue-next'
import { profile } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import GradientButton from '@/components/ui/GradientButton.vue'

const iconMap = { Github, Linkedin, Mail }

const contactMethods = computed(() => [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
])
</script>

<template>
  <section id="contact" class="section-pad relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="aurora left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 bg-brand-500/15" />
    </div>

    <div class="container-x">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's Build Something"
        subtitle="Have a project, role or idea in mind? I'd love to hear about it. Reach out and I'll get back to you."
      />

      <div class="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
        <!-- Contact info cards -->
        <a
          v-for="m in contactMethods"
          :key="m.label"
          :href="m.href || undefined"
          class="flex items-center gap-4 rounded-2xl glass gradient-border p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
          :class="m.href ? 'cursor-pointer' : 'cursor-default'"
        >
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-glow">
            <component :is="m.icon" class="h-5 w-5" />
          </span>
          <div class="min-w-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-ink-400">{{ m.label }}</p>
            <p class="truncate font-medium text-ink-700 dark:text-ink-200">{{ m.value }}</p>
          </div>
        </a>
      </div>

      <!-- CTA card -->
      <div class="mx-auto mt-6 max-w-4xl" v-reveal="'scale'">
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-center text-white shadow-glow sm:p-12">
          <div class="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div class="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-2xl" />

          <div class="relative">
            <p class="font-display text-2xl font-bold sm:text-3xl">Prefer a quick chat?</p>
            <p class="mx-auto mt-3 max-w-lg text-white/85">
              I'm currently open to full-time roles and freelance collaborations. Send me an
              email and let's talk.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-3">
              <GradientButton :href="`mailto:${profile.email}`" variant="ghost" size="lg">
                <Mail class="h-4 w-4" /> Say hello
                <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </GradientButton>

              <a
                v-for="s in profile.socials.filter((x) => x.icon !== 'Mail')"
                :key="s.label"
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="s.label"
                class="grid h-12 w-12 place-items-center rounded-full bg-white/15 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/25"
              >
                <component :is="iconMap[s.icon]" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
