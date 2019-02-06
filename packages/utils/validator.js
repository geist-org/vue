export const enums = (params) => (val) => {
  if (!Array.isArray(params)) return false
  return !!params.find(item => item === val)
}
