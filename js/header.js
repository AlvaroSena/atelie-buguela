window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header')
  if (window.scrollY > 0) {
    header.classList.add('bg-white')
  } else {
    header.classList.remove('bg-white')
  }
})