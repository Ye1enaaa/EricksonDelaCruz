/**
 * v-reveal — lightweight scroll-in animation via IntersectionObserver.
 * Usage:
 *   <div v-reveal>           → fade + up
 *   <div v-reveal="'left'">  → slide from left  ('right' | 'scale' also supported)
 *   <div v-reveal="{ dir: 'up', delay: 150, once: true }">
 */
const observers = new WeakMap()

function parse(binding) {
  const v = binding.value
  if (typeof v === 'string') return { dir: v, delay: 0, once: true }
  return { dir: v?.dir ?? 'up', delay: v?.delay ?? 0, once: v?.once ?? true }
}

export const reveal = {
  mounted(el, binding) {
    const { dir, delay, once } = parse(binding)
    el.setAttribute('data-reveal', dir === 'up' ? '' : dir)
    if (delay) el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (once) {
              io.unobserve(entry.target)
              observers.delete(el)
            }
          } else if (!once) {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    observers.set(el, io)
  },
  unmounted(el) {
    const io = observers.get(el)
    if (io) io.disconnect()
  },
}
