import { gsap } from 'gsap'

export function initNavbar() {
  const menuToggle = document.querySelector('.menu-toggle')
  const navItems = document.querySelectorAll('.nav-item-mobile')
  const header = document.querySelector('header')
  const mobileMenu = document.querySelector('.nav-mobile-wrapper')

  const navMobileAnimation = gsap
    .timeline({
      paused: true,
      reversed: true,
    })
    .from('.nav-mobile-wrapper', {
      xPercent: -100,
      duration: 0.8,
      ease: 'power2.out',
    })

  function updateBackdropFilter(isOpen) {
    const filter = isOpen ? 'none' : 'saturate(180%) blur(20px)'
    header.style.backdropFilter = filter
    header.style.webkitBackdropFilter = filter
  }

  function updateAriaAttributes() {
    const isMenuOpen = menuToggle.classList.contains('open-btn')
    menuToggle.setAttribute('aria-label', isMenuOpen ? 'Schließen' : 'Menü')
    menuToggle.setAttribute('aria-expanded', isMenuOpen)
    mobileMenu.setAttribute('aria-hidden', !isMenuOpen)
  }

  function openMenu() {
    menuToggle.classList.add('open-btn')
    navMobileAnimation.play()
    updateBackdropFilter(true)
    updateAriaAttributes()
  }

  function closeMenu() {
    menuToggle.classList.remove('open-btn')
    navMobileAnimation.reverse()
    updateBackdropFilter(false)
    updateAriaAttributes()
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.contains('open-btn')

    isOpen ? closeMenu() : openMenu()
  })

  navItems.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu()
    })
  })

  window.addEventListener(
    'scroll',
    () => {
      const scrolled =
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100

      header.style.paddingBlock = scrolled ? '1.5em' : '2em'
    },
    { passive: true },
  )

  updateAriaAttributes()
}
