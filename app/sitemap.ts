import { MetadataRoute } from 'next'
import projects from '@/data/projects.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://musharaf.dev'

  const routes = ['', '/work', '/freelance', '/achievements'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes]
}
