window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header')
  if (window.scrollY > 0) {
    header.classList.add('bg-white')
  } else {
    header.classList.remove('bg-white')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a')
  let currentPath = window.location.pathname + window.location.hash

  links.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.remove('text-zinc-950')
      link.classList.add('text-orange-500', 'font-semibold')
    } else {
      link.classList.remove('text-orange-500', 'font-semibold')
    }
  })
})
