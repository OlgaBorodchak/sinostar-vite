import { gsap } from 'gsap'

// Cycling image switcher (hoodies, item-10)
function startImageLoop(selector) {
  const images = document.querySelectorAll(selector)
  if (!images.length) return

  let current = document.querySelector(`${selector}.is-visible`)

  setInterval(() => {
    images.forEach((img) => img.classList.remove('is-visible'))
    const next =
      current.nextElementSibling?.classList.contains(selector.replace('.', ''))
        ? current.nextElementSibling
        : images[0]
    next.classList.add('is-visible')
    current = next
  }, selector.includes('hoody') ? 1000 : 2000)
}

// Item 5 hover animation
function initItemFive() {
  const itemFiveTitle = document.querySelector('.item-5-title')
  if (!itemFiveTitle) return

  const itemFiveImg = document.querySelector('.item-5 img')
  const zoomItemFive = gsap.timeline({ paused: true })

  zoomItemFive.to(itemFiveImg, {
    scale: 1.4,
    transformOrigin: 'left 100%',
    duration: 0.6,
    ease: 'none',
  })

  const mm = gsap.matchMedia()
  mm.add('(min-width: 1200px)', () => {
    zoomItemFive.to('.item-5-text-container svg', { x: 160, ease: 'none', duration: 0.6 }, '<')
  })
  mm.add('(min-width: 861px) and (max-width: 1199px)', () => {
    zoomItemFive.to('.item-5-text-container svg', { x: 140, ease: 'none', duration: 0.6 }, '<')
  })
  mm.add('(max-width: 860px)', () => {
    zoomItemFive.to('.item-5-text-container svg', { x: 100, ease: 'none', duration: 0.6 }, '<')
  })

  itemFiveTitle.addEventListener('mouseenter', () => zoomItemFive.play())
  itemFiveTitle.addEventListener('mouseleave', () => zoomItemFive.reverse())
}

// Item 13 hover animation
function initItemThirteen() {
  const itemThirteen = document.querySelector('.item-13')
  if (!itemThirteen) return

  const itemAnimation = gsap.timeline({ paused: true })
  itemAnimation.fromTo('.item-13-title', { y: 100 }, { autoAlpha: 1, y: 0 })
  itemAnimation.fromTo('.item-13-title span', { y: 200 }, { y: 0, duration: 1 })
  itemAnimation.fromTo('.item-13-title img', { y: 200 }, { y: 4, duration: 1 })

  itemThirteen.addEventListener('mouseenter', () => itemAnimation.play())
  itemThirteen.addEventListener('mouseleave', () => itemAnimation.reverse())

  let item13Active = false
  itemThirteen.addEventListener('click', () => {
    item13Active ? itemAnimation.reverse() : itemAnimation.play()
    item13Active = !item13Active
  })
}

// Item 15 hover animation
function initItemFifteen() {
  const itemFifteen = document.querySelector('.item-15')
  if (!itemFifteen) return

  const zoomItemFifteen = gsap.timeline({ paused: true })
  zoomItemFifteen.to('.zoom-item-15', { scale: 1.3, duration: 1 })
  zoomItemFifteen.fromTo('.item-15-icon', { y: 100 }, { autoAlpha: 1, y: 0 })

  itemFifteen.addEventListener('mouseenter', () => zoomItemFifteen.play())
  itemFifteen.addEventListener('mouseleave', () => zoomItemFifteen.reverse())

  let item15Active = false
  itemFifteen.addEventListener('click', () => {
    item15Active ? zoomItemFifteen.reverse() : zoomItemFifteen.play()
    item15Active = !item15Active
  })
}

export function initProductGallery() {
  startImageLoop('.hoody-img')
  startImageLoop('.item-10-img')
  startImageLoop('.item-10-img-mobile')
  initItemFive()
  initItemThirteen()
  initItemFifteen()
}
