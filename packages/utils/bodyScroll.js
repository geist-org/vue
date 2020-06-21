const elInfoStack = new Map()

export const lockScroll = isLock => {
  if (typeof document === 'undefined') return
  const elRef = document.body
  const lock = elementRef => {
    const elInfo = elInfoStack.get(elementRef)
    if (!elInfo) {
      elInfoStack.set(elementRef, { counter: 1, initialOverflow: elementRef.style.overflow })
      elementRef.style.overflow = 'hidden'
      return
    }
    elInfoStack.set(elementRef, { counter: elInfo.counter ++, initialOverflow: elInfo.initialOverflow })
  }
  const unlock = elementRef => {
    const elInfo = elInfoStack.get(elementRef)
    if (elInfo) {
      if (elInfo.counter === 1) {
        elInfoStack.delete(elementRef)
        elementRef.style.overflow = elInfo.initialOverflow
      } else {
        elInfoStack.set(elementRef, { counter: elInfo.counter - 1, initialOverflow: elInfo.initialOverflow })
      }
    }
  }
  if (isLock) {
    lock(elRef)
    return
  }
  unlock(elRef)
}
