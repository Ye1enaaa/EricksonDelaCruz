/**
 * v-tilt — subtle 3D pointer tilt for premium card hover.
 * Respects reduced-motion and pointer-fine devices only.
 */
const state = new WeakMap()

function enable(el, max) {
  const onMove = (e) => {
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * max
    const ry = (px - 0.5) * max
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }
  const onLeave = () => {
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }
  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)
  state.set(el, { onMove, onLeave })
}

export const tilt = {
  mounted(el, binding) {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 0.25s ease'
    enable(el, binding.value ?? 6)
  },
  unmounted(el) {
    const s = state.get(el)
    if (s) {
      el.removeEventListener('pointermove', s.onMove)
      el.removeEventListener('pointerleave', s.onLeave)
    }
  },
}
