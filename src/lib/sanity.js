import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'veupdktb',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  timeout: 3000, // 3 second timeout
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// Fetch functions with timeout and error handling
export const fetchProjects = async () => {
  try {
    return await Promise.race([
      client.fetch(`
        *[_type == "project"] | order(publishedAt desc) {
          _id,
          title,
          description,
          technologies,
          image,
          projectUrl,
          githubUrl,
          publishedAt
        }
      `),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 2000)
      )
    ])
  } catch (error) {
    console.log('Sanity fetch failed, using fallback data')
    return []
  }
}

export const fetchBlogPosts = async () => {
  try {
    return await Promise.race([
      client.fetch(`
        *[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          content,
          image,
          publishedAt,
          readTime
        }
      `),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 2000)
      )
    ])
  } catch (error) {
    console.log('Sanity fetch failed, using fallback data')
    return []
  }
}

export const fetchSkills = async () => {
  try {
    return await Promise.race([
      client.fetch(`
        *[_type == "skill"] | order(order asc) {
          _id,
          title,
          description,
          category,
          technologies,
          order
        }
      `),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout')), 2000)
      )
    ])
  } catch (error) {
    console.log('Sanity fetch failed, using fallback data')
    return []
  }
}