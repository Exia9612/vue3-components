export default {
  mounted (el: HTMLElement) {
    const oSelectorInput: HTMLElement | null = el.querySelector('.selector-input'),
          oDropDownMenu: HTMLElement | null = el.querySelector('.dropdown-menu')
    const oPlaceHolder: HTMLElement | null = el.querySelector('.placeholder'),
          oInput: HTMLInputElement | null = el.querySelector('input'),
          oIcon: HTMLElement | null = el.querySelector('.iconfont')

    oInput?.addEventListener('focus', () => {
      if (oPlaceHolder !== null) {
        oPlaceHolder.style.display = 'none'
      }
      if (oIcon) {
        oIcon.className = 'iconfont icon-search'
      }
      if (oDropDownMenu) {
        // 为了事件响应延迟展示或消失
        setTimeout(() => {
          oDropDownMenu.style.display = 'block'
        }, 200)
      }
    })

    oInput?.addEventListener('blur', () => {
      if (oIcon) {
        oIcon.className = 'iconfont icon-arrow-down'
      }
      setTimeout(() => {
        if (oDropDownMenu) {
          oDropDownMenu.style.display = 'none'
        }
        if (oPlaceHolder && oInput.value?.length === 0) {
          oPlaceHolder.style.display = 'block'
        }
      }, 200)
    })
  }
}