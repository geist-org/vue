const themes = [
  'dark-theme', 'light-theme',
]
const html = document.querySelector('html')
const subscriptions = []

export const setTheme = theme => {
  const name = themes.find(item => item === theme)
  if (!name) {
    throw new Error(`Not found theme: ${theme}. Get all theme by "getAllThemes".`)
  }
  html.classList.remove(...themes)
  html.classList.add(name)
  subscriptions.forEach(fn => fn(name))
}

export const getAllThemes = () => themes

export const getCurrentTheme = () => {
  const htmlClass = document.querySelector('html').classList.value
  return htmlClass.includes('dark-theme') ? 'dark-theme' : 'light-theme'
}

export const subscribeChange = fn => {
  if (typeof fn !== 'function') return
  subscriptions.push(fn)
}
