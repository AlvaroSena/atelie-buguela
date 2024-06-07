document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.querySelector('.carousel-inner')
  const carouselItems = document.querySelectorAll('.carousel-item')
  const nextButton = document.getElementById('next')
  const prevButton = document.getElementById('prev')

  let currentIndex = 0

  function updateCarousel() {
      const offset = -currentIndex * 100
      carouselInner.style.transform = `translateX(${offset}%)`
      carouselItems.forEach((item, index) => {
          if (index === currentIndex) {
              item.classList.add('fade-in-active')
          } else {
              item.classList.remove('fade-in-active')
          }
      })
  }

  nextButton.addEventListener('click', () => {
      if (currentIndex < carouselItems.length - 1) {
          currentIndex++
      } else {
          currentIndex = 0
      }
      updateCarousel()
  })

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--
      } else {
          currentIndex = carouselItems.length - 1
      }
      updateCarousel()
  })

  updateCarousel()
})