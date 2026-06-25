// Eco clothing hover video
export function initEcoVideo() {
  const video = document.querySelector('.eco-clothing-video')
  const videoPlayBtn = document.querySelector('.eco-clothing-video-btn')
  if (!video) return

  video.addEventListener('mouseenter', () => {
    video.play()
    videoPlayBtn.style.display = 'none'
  })

  video.addEventListener('mouseleave', () => {
    video.pause()
    videoPlayBtn.style.display = 'block'
  })

  videoPlayBtn.addEventListener('click', () => {
    video.play()
    videoPlayBtn.style.display = 'none'
  })

  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause()
      videoPlayBtn.style.display = 'block'
    }
  })
}

// Brand story video players (play/close/ended)
export function initVideoPlayers() {
  const playBtns = document.querySelectorAll('.video-play-btn')
  const closeBtns = document.querySelectorAll('.video-close-btn')
  const videoPlayers = document.querySelectorAll('.video-player')

  playBtns.forEach((btn, index) => {
    const video = videoPlayers[index].querySelector('.video')

    function updateAriaLabel() {
      btn.setAttribute(
        'aria-label',
        video.paused ? 'Video abspielen' : 'Video pausieren'
      )
    }

    btn.addEventListener('click', () => {
      btn.style.display = 'none'
      videoPlayers.forEach((player, playerIndex) => {
        if (index === playerIndex) {
          player.style.display = 'block'
          video.play()
        } else {
          player.querySelector('.video').pause()
          player.style.display = 'none'
          playBtns[playerIndex].style.display = 'block'
        }
      })
      updateAriaLabel()
    })

    closeBtns[index].addEventListener('click', () => {
      video.pause()
      videoPlayers[index].style.display = 'none'
      btn.style.display = 'block'
      updateAriaLabel()
    })

    video.addEventListener('ended', () => {
      videoPlayers[index].style.display = 'none'
      btn.style.display = 'block'
      updateAriaLabel()
    })

    updateAriaLabel()
  })
}
