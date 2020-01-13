const themes = [
  'dark-theme', 'light-theme',
]

const setTheme = theme => {
  if (typeof document === 'undefined') return

  const html = document.querySelector('html')
  html.classList.remove(...themes)
  html.classList.add(theme)
}

export const enableLight = () => {
  setTheme('light-theme')
}

export const enableDark = () => {
  setTheme('dark-theme')
}
