export default {
  mounted (el: HTMLElement) {
    const oSelectorInput: HTMLElement | null = el.querySelector('.selector-input')
    const oPlaceHolder: HTMLElement | null = el.querySelector('.placeholder'),
          oInput: HTMLElement | null = el.querySelector('input'),
          oIcon: HTMLElement | null = el.querySelector('.iconfont')

    oInput?.addEventListener('focus', () => {
      if (oPlaceHolder !== null) {
        oPlaceHolder.style.display = 'none'
      }
      if (oIcon) {
        oIcon.className = 'iconfont icon-search'
      }
    })

    oInput?.addEventListener('blur', () => {
      if (oPlaceHolder !== null) {
        oPlaceHolder.style.display = 'block'
      }
      if (oIcon) {
        oIcon.className = 'iconfont icon-arrow-down'
      }
    })
  }
}