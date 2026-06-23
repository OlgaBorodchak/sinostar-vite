import { gsap } from 'gsap'

export function initNavbar() {
  const menuToggle = document.querySelector('.menu-toggle')
  const navItems = document.querySelectorAll('.nav-item-mobile')
  const header = document.querySelector('header')

  const navMobileAnimation = gsap
    .timeline({ paused: true, reversed: true })
    .from('.nav-mobile-wrapper', {
      xPercent: -100,
      duration: 0.8,
      ease: 'power2.out',
    })

  function menuIn() {
    navMobileAnimation.reversed()
      ? navMobileAnimation.play()
      : navMobileAnimation.reverse()
  }

  function updateBackdropFilter() {
    const currentFilter = getComputedStyle(header).backdropFilter
    const newFilter =
      currentFilter === 'none' ? 'saturate(180%) blur(20px)' : 'none'
    header.style.backdropFilter = newFilter
    header.style.webkitBackdropFilter = newFilter
  }

  function updateAriaAttributes() {
    const isMenuOpen = menuToggle.classList.contains('open-btn')
    menuToggle.setAttribute('aria-label', isMenuOpen ? 'Schließen' : 'Menü')
    menuToggle.setAttribute('aria-expanded', isMenuOpen)
  }

  menuToggle.addEventListener('click', () => {
    updateBackdropFilter()
    menuToggle.classList.toggle('open-btn')
    menuIn()
    updateAriaAttributes()
  })

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      updateBackdropFilter()
      menuToggle.classList.toggle('open-btn')
      menuIn()
      updateAriaAttributes()
    })
  })

  // Shrink header on scroll
  window.addEventListener('scroll', () => {
    const scrolled =
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    header.style.paddingBlock = scrolled ? '1.5em' : '2em'
  })
}
