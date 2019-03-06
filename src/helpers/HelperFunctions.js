export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeElement = element => {
  if(!element) return false
  element.parentNode.removeChild(element)
  return true
}