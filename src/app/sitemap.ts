import { symptoms } from '@/data/symptoms'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const symptomPages = symptoms.map((s) => ({
    url: `http://159.203.110.79/symptoms/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'http://159.203.110.79', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'http://159.203.110.79/check', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...symptomPages,
  ]
}
