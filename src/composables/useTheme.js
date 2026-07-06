import { ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const isDark = ref(false)
let initialized = false

function apply(dark) {
  document.documentElement.classList.toggle('dark', dark)
}

function init() {
  if (initialized) return
  initialized = true
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  apply(isDark.value)

  watch(isDark, (val) => {
    apply(val)
    localStorage.setItem(STORAGE_KEY, val ? 'dark' : 'light')
  })
}

export function useTheme() {
  init()
  const toggle = () => (isDark.value = !isDark.value)
  return { isDark, toggle }
}
