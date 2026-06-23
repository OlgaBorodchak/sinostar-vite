import { gsap } from 'gsap'

export function initBanner() {
  gsap
    .timeline()
    .to('.animated-text', {
      scale: 100,
      duration: 4,
      transformOrigin: 'center center',
      xPercent: -240,
      delay: 3,
      opacity: 0,
      ease: 'expo.in',
    })
    .to('header', { opacity: 1, duration: 2 }, '>')
    .to(
      '.welcome-video',
      {
        scaleY: 0.9,
        scaleX: 0.9,
        yPercent: 15,
        duration: 2,
        borderRadius: '2em',
        ease: 'power1.inOut',
      },
      '>'
    )
    .to('.banner', { paddingBottom: '10%', duration: 2, ease: 'none' }, '<')

  const animatedText = document.querySelector('.animated-text')
  setTimeout(() => (animatedText.style.display = 'none'), 8000)
}

export function initVideoSource() {
  const video = document.querySelector('.welcome-video')
  const sources = video.getElementsByTagName('source')

  function updateVideoSource() {
    if (window.innerWidth <= 480) {
      sources[0].src = './assets/welcome_video_mobile.webm'
      sources[1].src = './assets/welcome_video_mobile.mp4'
    } else {
      sources[0].src = './assets/welcome_video.webm'
      sources[1].src = './assets/welcome_video.mp4'
    }
    video.load()
  }

  updateVideoSource()
}
