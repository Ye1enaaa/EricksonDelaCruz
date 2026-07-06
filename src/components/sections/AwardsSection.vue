<script setup>
import { GraduationCap, Trophy, Medal, Award } from 'lucide-vue-next'
import { awards } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const iconMap = { GraduationCap, Trophy, Medal, Award }
</script>

<template>
  <section id="awards" class="section-pad relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="aurora left-[15%] top-[10%] h-80 w-80 bg-amber-500/15" />
      <div class="aurora right-[15%] bottom-[10%] h-80 w-80 bg-brand-500/15" />
    </div>

    <div class="container-x">
      <SectionHeading
        eyebrow="Recognition"
        title="Awards & Achievements"
        subtitle="Milestones that reflect a commitment to excellence — academically and professionally."
      />

      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(a, i) in awards"
          :key="a.title"
          v-reveal="{ dir: 'up', delay: i * 90 }"
        >
          <div
            v-tilt="7"
            class="group relative h-full overflow-hidden rounded-3xl glass-strong gradient-border p-7 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
          >
            <!-- glow on hover -->
            <div
              class="absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10"
              :class="a.accent"
            />

            <div
              class="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
              :class="a.accent"
            >
              <component :is="iconMap[a.icon]" class="h-8 w-8" />
            </div>

            <h3 class="font-display text-lg font-bold">{{ a.title }}</h3>
            <p class="mt-2 text-sm text-ink-500 dark:text-ink-400">{{ a.desc }}</p>

            <!-- sparkle -->
            <div class="mt-5 flex justify-center gap-1">
              <span
                v-for="n in 3"
                :key="n"
                class="h-1 w-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-300 group-hover:scale-150"
                :style="{ transitionDelay: n * 60 + 'ms' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
