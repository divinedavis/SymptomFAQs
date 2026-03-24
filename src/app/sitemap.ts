import { symptoms } from '@/data/symptoms'
import { comparisons } from '@/data/comparisons'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const symptomPages = symptoms.map((s) => ({
    url: `http://159.203.110.79/symptoms/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const comparisonPages = comparisons.map((c) => ({
    url: `http://159.203.110.79/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: 'http://159.203.110.79', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'http://159.203.110.79/check', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'http://159.203.110.79/symptoms', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'http://159.203.110.79/body', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'http://159.203.110.79/compare', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...symptomPages,
    ...comparisonPages,
  ]
}
