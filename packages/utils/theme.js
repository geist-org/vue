const themes = [
  'dark-theme', 'light-theme',
]
const html = document.querySelector('html')
const setTheme = theme => {
  html.classList.remove(...themes)
  html.classList.add(theme)
}

export const enableLight = () => {
  setTheme('light-theme')
}

export const enableDark = () => {
  setTheme('dark-theme')
}
