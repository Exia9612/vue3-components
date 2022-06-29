import { getStyle, getMouseCoordinate } from '../utils/index'

export default {
  mounted (el: HTMLElement) {
    const oImgWrap = document.querySelector<HTMLDivElement>('.img-wrap')!
    const oMagWrap = oImgWrap.querySelector<HTMLLinkElement>('.mag-wrap')!
    const oMagImg = oImgWrap.querySelector<HTMLImageElement>('.mag-img')!
    const magWidth = parseInt(getStyle(oMagWrap!, 'width')),
          magHeight = parseInt(getStyle(oMagWrap!, 'height')),
          imgWidth = parseInt(getStyle(oImgWrap!, 'width')),
          imgHeight = parseInt(getStyle(oImgWrap!, 'height')),
          imgWrapX = oImgWrap.offsetLeft,
          imgWrapY = oImgWrap.offsetTop

    const init = () => {
      bindEvent()
    }

    const bindEvent = () => {
      oImgWrap.addEventListener('mouseover', function (event) {
        oMagWrap.className += ' show'
        document.addEventListener('mousemove',  handleMouseMove, false)
        // oImgWrap.addEventListener('mouseout', handleMouseOut, false)
      }, false)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { x: pageX, y: pageY } = getMouseCoordinate(event)
      locatMagWrap(pageX, pageY)
      locatMagImg(pageX, pageY)

      if (
          pageX - imgWrapX >= imgWidth
          || pageX <= imgWrapX
          || pageY - imgWrapY >= imgHeight
          || pageY <= imgWrapY
        ) {
        handleMouseOut(event)
      }
    }

    const handleMouseOut = (event: MouseEvent) => {
      oMagWrap.className = 'mag-wrap'
      document.removeEventListener('mousemove', handleMouseMove)
    }

    const locatMagWrap = (x: number, y: number) => {
      oMagWrap.style.top = y - (magHeight / 2) - imgWrapY + 'px'
      oMagWrap.style.left = x - (magWidth / 2) - imgWrapX + 'px'
    }

    const locatMagImg = (x: number, y: number) => {
      oMagImg.style.top = -(y - (magHeight / 2) - imgWrapY) + 'px'
      oMagImg.style.left = -(x - (magWidth / 2) - imgWrapX) + 'px'
    }

    init()
  }
}