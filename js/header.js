const prodPathname = 'atelie-buguela'

function render() {
  const pathname = window.location.pathname + window.location.hash

  const links = [
    {
      id: 'home-link',
      href: pathname.includes(prodPathname) ? '/atelie-buguela' : '/',
      content: 'Início',
    },
    {
      id: 'products-link',
      href: pathname.includes(prodPathname) ? '/atelie-buguela/#produtos' : '/#produtos', 
      content: 'Produtos',
    },
    {
      id: 'about-link',
      href: pathname.includes(prodPathname) ? '/atelie-buguela/#quem-somos' : '/#quem-somos',
      content: 'Quem somos?',
    },
    {
      id: 'contact-link',
      href:  pathname.includes(prodPathname) ? '/atelie-buguela/#contato' : '/#contato',
      content: 'Contato',
    },
    {
      id: 'blog-link',
      href:  pathname.includes('atelie-buguela') ? '/atelie-buguela/blog/index.html' : '/blog/index.html',
      content: 'Blog',
    },
  ]

  let contentBody = ''

  links.forEach(link => {
    contentBody += `
      <a 
        id="${link.id}"
        href="${link.href}"
        class="text-zinc-950 active:text-orange-500 leading-[80px]"
        >
        ${link.content}
        </a>
      `
  })

  document.getElementById('desktop-nav').innerHTML = contentBody
  document.getElementById('mobile-nav').innerHTML = contentBody
}

render()

function toogleSection() {
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
}

document.addEventListener('DOMContentLoaded', () => {
  toogleSection()
})

window.addEventListener('scroll', () => {
  toogleSection()

  const header = document.getElementById('main-header')
  if (window.scrollY > 0) {
    header.classList.add('bg-white')
  } else {
    header.classList.remove('bg-white')
  }
})