import Swiper from 'swiper'
import { Navigation, Pagination, EffectCoverflow, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export function initCarousel() {
  new Swiper('.swiper', {
    modules: [Navigation, Pagination, EffectCoverflow, Keyboard],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 100,
    initialSlide: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    keyboard: { enabled: true },
    pagination: {
      el: '.swiper-pagination-dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
      320: { spaceBetween: 40 },
      480: { spaceBetween: 80 },
    },
  })
}
