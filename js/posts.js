const publicKey = 'public_3e6b77c6-da02-458d-97f8-361b58aefe3f'
const apiURL = 'https://www.api-notionclient.cloud/v1'

const posts = []


async function getPosts() {
  const response = await axios.post(`${apiURL}/notion/database/query`, {
    publicKey,
    query: {
      property: "published", 
      checkbox: {
        equals: true,
      }
    }
  })

  const data = response.data
  console.log(data)

  data.results.forEach(post => {
    posts.push({
      thumbnail: post.properties.thumbnail.files.length >= 1 ? post.properties.thumbnail.files[0].external.url : null,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.Tags.multi_select.map(tag => tag.name),
      date: post.properties.date.date.start.split('-').map(Number),
      url: post.public_url,
    })
  })

  let contentBody = ''

  posts.forEach(post => {
    contentBody += `<a href="${post.url}" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center justify-center gap-2">`
    contentBody += `<img 
      class="md:max-w-[250px] w-full md:max-h-[332px]" 
      src="${post.thumbnail === null ? '../assets/image-not-found.png' : post.thumbnail}" 
      alt="Imagem do post"
    >`
    contentBody += `<p class="font-semibold text-zinc-600">${Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long',
    }).format(new Date(post.date[0], post.date[1] - 1, post.date[2]))}</p>`
    contentBody += `<h3 class="text-center text-zinc-800 font-semibold text-xl">${post.title}</h3>`
    contentBody += `</a>`
  })

  document.getElementById('posts').innerHTML = contentBody
}

getPosts().then()