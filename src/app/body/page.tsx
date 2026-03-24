import { bodyParts } from '@/data/body-parts'
import { symptoms } from '@/data/symptoms'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Symptoms by Body Part — Find Your Symptom',
  description: 'Find symptoms by body part. Head, chest, stomach, back, skin and more — click your body part to see common symptoms and causes.',
}

export default function BodyPartPage() {
  const symptomMap = Object.fromEntries(symptoms.map(s => [s.slug, s]))

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800">By Body Part</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Symptoms by Body Part</h1>
      <p className="text-slate-600 mb-10">Select the area of your body where you are experiencing symptoms.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bodyParts.map(group => {
          const validSlugs = group.slugs.filter(s => symptomMap[s])
          if (validSlugs.length === 0) return null
          return (
            <div key={group.name} className="border border-slate-200 rounded-xl p-5 hover:border-teal-200 transition-colors">
              <h2 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                <span>{group.emoji}</span>
                {group.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {validSlugs.map(slug => {
                  const s = symptomMap[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/symptoms/${slug}`}
                      className="text-sm px-3 py-1.5 bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 rounded-full border border-slate-200 hover:border-teal-200 transition-all"
                    >
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-xs text-slate-400 mt-12 text-center">For educational purposes only. Not a substitute for professional medical advice.</p>
    </main>
  )
}
