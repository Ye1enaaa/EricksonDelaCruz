import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Typewriter effect cycling through an array of phrases.
 * @param {string[]} words
 * @param {object} opts { typeSpeed, deleteSpeed, holdTime }
 */
export function useTypewriter(words, opts = {}) {
  const { typeSpeed = 80, deleteSpeed = 40, holdTime = 1600 } = opts
  const output = ref('')
  let wordIndex = 0
  let charIndex = 0
  let deleting = false
  let timer = null

  function tick() {
    const current = words[wordIndex % words.length]

    if (deleting) {
      charIndex--
      output.value = current.slice(0, charIndex)
    } else {
      charIndex++
      output.value = current.slice(0, charIndex)
    }

    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && charIndex === current.length) {
      delay = holdTime
      deleting = true
    } else if (deleting && charIndex === 0) {
      deleting = false
      wordIndex++
      delay = 400
    }

    timer = setTimeout(tick, delay)
  }

  onMounted(() => {
    timer = setTimeout(tick, 500)
  })
  onBeforeUnmount(() => clearTimeout(timer))

  return { output }
}
