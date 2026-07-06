<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GraduationCap, Code2, Rocket, MapPin, CheckCircle2 } from 'lucide-vue-next'
import { timeline } from '@/data/portfolio'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import TechBadge from '@/components/ui/TechBadge.vue'

gsap.registerPlugin(ScrollTrigger)

const iconMap = { GraduationCap, Code2, Rocket }
const lineRef = ref(null)
const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // Animated draw of the vertical connector line
    gsap.fromTo(
      lineRef.value,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top 65%',
          end: 'bottom 75%',
          scrub: true,
        },
      },
    )

    // Node pop-in
    gsap.utils.toArray('.tl-node').forEach((node) => {
      gsap.fromTo(
        node,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: node, start: 'top 82%' },
        },
      )
    })
  }, sectionRef.value)
})

onBeforeUnmount(() => ctx && ctx.revert())
</script>

<template>
  <section id="experience" ref="sectionRef" class="section-pad relative overflow-hidden">
    <!-- soft backdrop -->
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="aurora right-[10%] top-[20%] h-96 w-96 bg-brand-500/15" />
    </div>

    <div class="container-x">
      <SectionHeading
        eyebrow="Experience"
        title="My Journey"
        subtitle="From honors student to shipping production systems — a timeline of growth across engineering and DevOps."
      />

      <div class="relative mx-auto mt-16 max-w-4xl">
        <!-- Rail -->
        <div
          class="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-ink-200 dark:bg-ink-800 md:left-1/2"
        />
        <div
          ref="lineRef"
          class="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-500 via-accent-500 to-brand-500 md:left-1/2"
        />

        <ol class="space-y-12">
          <li
            v-for="(item, i) in timeline"
            :key="item.id"
            class="relative flex flex-col md:flex-row md:items-center"
            :class="i % 2 === 0 ? 'md:justify-start' : 'md:flex-row-reverse'"
          >
            <!-- Node -->
            <div
              class="tl-node absolute left-5 top-2 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full text-white shadow-glow md:left-1/2"
              :class="
                item.current
                  ? 'bg-gradient-to-br from-accent-500 to-brand-500 ring-4 ring-accent-500/30'
                  : 'bg-gradient-to-br from-brand-600 to-brand-400'
              "
            >
              <component :is="iconMap[item.icon]" class="h-4.5 w-4.5" />
              <span
                v-if="item.current"
                class="absolute inset-0 animate-ping rounded-full bg-accent-500/40"
              />
            </div>

            <!-- Card -->
            <div class="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)]">
              <div
                v-reveal="i % 2 === 0 ? 'right' : 'left'"
                class="group glass gradient-border rounded-3xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
              >
                <div class="mb-3 flex flex-wrap items-center gap-2">
                  <span
                    class="rounded-full bg-brand-500/10 px-3 py-1 font-mono text-xs font-medium text-brand-600 dark:text-brand-300"
                  >
                    {{ item.period }}
                  </span>
                  <span
                    v-if="item.current"
                    class="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400"
                  >
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current
                  </span>
                  <span
                    v-else-if="item.type === 'education'"
                    class="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400"
                  >
                    Education
                  </span>
                </div>

                <h3 class="font-display text-xl font-bold">{{ item.role }}</h3>
                <p class="mt-1 flex items-center gap-1.5 text-sm text-ink-500 dark:text-ink-400">
                  <MapPin class="h-3.5 w-3.5 text-brand-500" /> {{ item.org }}
                </p>

                <ul class="mt-4 space-y-2">
                  <li
                    v-for="point in item.points"
                    :key="point"
                    class="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-300"
                  >
                    <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                    <span>{{ point }}</span>
                  </li>
                </ul>

                <div class="mt-4 flex flex-wrap gap-2">
                  <TechBadge v-for="tag in item.tags" :key="tag" :label="tag" />
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
