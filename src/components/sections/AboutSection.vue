<script setup>
import { Code2, Boxes, Server, FlaskConical, Sparkles } from 'lucide-vue-next'
import { skillGroups, profile } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import SkillBar from '@/components/ui/SkillBar.vue'

const iconMap = { Code2, Boxes, Server, FlaskConical }
</script>

<template>
  <section id="about" class="section-pad relative">
    <div class="container-x">
      <SectionHeading
        eyebrow="About Me"
        title="Skills & Expertise"
        subtitle="A versatile toolkit spanning full-stack development, cloud-native DevOps and rigorous testing — the foundation for shipping reliable software."
      />

      <div class="mt-16 grid gap-8 lg:grid-cols-3">
        <!-- Intro card -->
        <div class="lg:col-span-1" v-reveal="'left'">
          <div class="glass-strong gradient-border sticky top-28 rounded-3xl p-7 shadow-card">
            <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-300">
              <Sparkles class="h-3.5 w-3.5" /> Who I am
            </div>
            <h3 class="font-display text-2xl font-bold">
              Turning complex problems into <span class="text-gradient">elegant systems</span>.
            </h3>
            <p class="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {{ profile.summary }} I care deeply about clean architecture, developer
              experience, and shipping features that hold up in production.
            </p>

            <div class="mt-6 grid grid-cols-3 gap-3">
              <div
                v-for="s in profile.stats"
                :key="s.label"
                class="rounded-2xl border border-ink-200/60 bg-white/50 p-4 text-center dark:border-white/5 dark:bg-white/[0.03]"
              >
                <p class="font-display text-2xl font-bold text-gradient">{{ s.value }}</p>
                <p class="mt-1 text-[11px] text-ink-500 dark:text-ink-400">{{ s.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skill groups -->
        <div class="grid gap-6 sm:grid-cols-2 lg:col-span-2">
          <div
            v-for="(group, gi) in skillGroups"
            :key="group.title"
            v-reveal="{ dir: 'up', delay: gi * 90 }"
          >
            <div class="glass gradient-border h-full rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div class="mb-5 flex items-center gap-3">
                <span
                  class="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white shadow-glow"
                  :class="group.accent"
                >
                  <component :is="iconMap[group.icon]" class="h-5 w-5" />
                </span>
                <h4 class="font-display text-lg font-semibold">{{ group.title }}</h4>
              </div>

              <div class="space-y-4">
                <SkillBar
                  v-for="skill in group.skills"
                  :key="skill.name"
                  :name="skill.name"
                  :level="skill.level"
                  :accent="group.accent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
