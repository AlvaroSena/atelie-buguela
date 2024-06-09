import { Spinner } from '../spinner.js'
import { getPosts } from '../api/getPosts.js'

function render() {
  document.getElementById('loading').innerHTML = Spinner()

  getPosts().then(data => {
    document.getElementById('loading').innerHTML = null
    let contentBody = ''
  
    data.forEach(post => {
      const [day, month, year] = post.date

      contentBody += `<a href="${post.url}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center gap-2">`
      contentBody += `
        <img 
          class="w-full h-48 object-cover" 
          src="${post.thumbnail === null ? '../assets/image-not-found.png' : post.thumbnail}" 
          alt="Imagem do post"
      >`
      contentBody += `<p class="font-semibold text-sm xl:text-md text-zinc-600">${Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'long',
      }).format(new Date(day, month - 1, year))}</p>`
      contentBody += `<h3 class="text-center text-zinc-800 font-semibold text-sm md:text-md xl:text-xl">${post.title}</h3>`
      contentBody += `</a>`
    })
  
    document.getElementById('posts').innerHTML = contentBody
  })
}

render()