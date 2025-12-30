import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// Fetch functions
export const fetchProjects = async () => {
  return await client.fetch(`
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
  `)
}

export const fetchBlogPosts = async () => {
  return await client.fetch(`
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
  `)
}

export const fetchSkills = async () => {
  return await client.fetch(`
    *[_type == "skill"] | order(order asc) {
      _id,
      title,
      description,
      category,
      technologies,
      order
    }
  `)
}