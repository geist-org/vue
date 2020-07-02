import { isMac } from './validator'

const elInfoStack = new Map()

export const lockScroll = isLock => {
  if (typeof document === 'undefined') return
  const elRef = document.body
  const lock = elementRef => {
    const defaultPaddingRight = getComputedStyle(elRef)['padding-right']
    const elInfo = elInfoStack.get(elementRef)
    if (!elInfo) {
      elInfoStack.set(elementRef, {
        counter: 1,
        initialOverflow: elementRef.style.overflow,
        initialRight: defaultPaddingRight,
      })
      elementRef.style.overflow = 'hidden'
      elementRef.style.paddingRight = `calc(${getScrollbarWidth()} + ${defaultPaddingRight})`
      return
    }
    elInfoStack.set(elementRef, {
      counter: elInfo.counter++,
      initialOverflow: elInfo.initialOverflow,
      initialRight: defaultPaddingRight,
    })
  }
  const unlock = elementRef => {
    const elInfo = elInfoStack.get(elementRef)
    if (!elInfo) return
    if (elInfo.counter === 1) {
      elInfoStack.delete(elementRef)
      elementRef.style.overflow = elInfo.initialOverflow
      elementRef.style.paddingRight = elInfo.initialRight
    } else {
      elInfoStack.set(elementRef, {
        counter: elInfo.counter - 1,
        initialOverflow: elInfo.initialOverflow,
        initialRight: elInfo.initialRight,
      })
    }
  }
  if (isLock) {
    lock(elRef)
    return
  }
  unlock(elRef)
}

const getScrollbarWidth = () => {
  if (isMac()) return '0px'
  const pseudoElWidth = window.getComputedStyle(document.body, '-webkit-scrollbar').width
  if (pseudoElWidth !== 'auto') return pseudoElWidth
  const scrollElement = document.createElement('div')
  const elStyle = 'position: absolute; top: -9999px; width: 50px; height: 50px; overflow: scroll;'
  scrollElement.setAttribute('style', elStyle)
  document.body.appendChild(scrollElement)
  const scrollbarWidth = `${
    scrollElement.getBoundingClientRect().width - scrollElement.clientWidth
  }px`
  document.body.removeChild(scrollElement)
  return scrollbarWidth
}
