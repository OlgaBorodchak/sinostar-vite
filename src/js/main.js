import '../styles/main.css'

import { initNavbar } from './navbar.js'
import { initBanner, initVideoSource } from './banner.js'
import { initCarousel } from './carousel.js'
import { initCircularText } from './circular-text.js'
import { initEcoVideo, initVideoPlayers } from './videos.js'
import { initProductGallery } from './product-gallery.js'

document.addEventListener('DOMContentLoaded', () => {
  initNavbar()
  initBanner()
  initVideoSource()
  initCarousel()
  initCircularText()
  initEcoVideo()
  initVideoPlayers()
  initProductGallery()
})
