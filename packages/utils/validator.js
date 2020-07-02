export const enums = params => val => {
  if (!Array.isArray(params)) return false
  return !!params.find(item => item === val)
}

export const isMac = () => {
  if (typeof window === 'undefined' || !window.navigator) return false
  const agent = navigator.userAgent.toLowerCase()
  return /macintosh|mac os x/i.test(agent)
}
