import { api } from './api.js'

export async function getPosts() {
  const response = await axios.post(`${api.url}/notion/database/query`, {
    publicKey: api.publicKey,
    query: {
      property: "published", 
      checkbox: {
        equals: true,
      }
    }
  })

  let data = response.data.results

  data = data.map(post => {
    return {
      thumbnail: post.properties.thumbnail.files.length >= 1 ? post.properties.thumbnail.files[0].external.url : null,
      title: post.properties.title.title[0].plain_text,
      slug: post.properties.slug.rich_text[0].plain_text,
      tags: post.properties.Tags.multi_select.map(tag => tag.name),
      date: post.properties.date.date.start.split('-').map(Number),
      url: post.public_url,
    }
  })

  return data
}
