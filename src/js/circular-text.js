import { gsap } from 'gsap'

export function initCircularText() {
  gsap.to('.circular-text', {
    rotation: 360,
    duration: 9,
    repeat: -1,
    ease: 'none',
  })
}
