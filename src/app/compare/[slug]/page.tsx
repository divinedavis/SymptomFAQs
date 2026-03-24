import { notFound } from 'next/navigation'
import { comparisons, getComparison } from '@/data/comparisons'
import Link from 'next/link'
import { ChevronRight, Siren } from 'lucide-react'

export function generateStaticParams() {
  return comparisons.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) return {}
  return { title: `${c.title}: How to Tell the Difference`, description: c.description }
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const c = getComparison(slug)
  if (!c) notFound()

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/compare" className="hover:text-teal-600">Compare</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800">{c.title}</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{c.title}</h1>
      <p className="text-slate-600 mb-8">{c.description}</p>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-5 mb-6">
        <h2 className="font-semibold text-teal-800 mb-2">Key Difference</h2>
        <p className="text-teal-700 text-sm leading-relaxed">{c.keyDifference}</p>
      </div>

      {c.emergencyNote && (
        <div className="bg-red-50 border border-red-300 rounded-xl p-4 mb-8 flex gap-3">
          <Siren className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{c.emergencyNote}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[c.symptomA, c.symptomB].map((s, i) => (
          <div key={i} className={`rounded-xl border-2 p-6 ${i === 0 ? 'border-blue-200 bg-blue-50/30' : 'border-orange-200 bg-orange-50/30'}`}>
            <h2 className={`text-xl font-bold mb-4 ${i === 0 ? 'text-blue-800' : 'text-orange-800'}`}>{s.name}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Key Features</h3>
                <ul className="space-y-1">{s.keyFeatures.map((f, j) => <li key={j} className="text-sm text-slate-700 flex gap-2"><span className="text-teal-500 mt-0.5">•</span>{f}</li>)}</ul>
              </div>
              <div><h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Onset</h3><p className="text-sm text-slate-700">{s.onset}</p></div>
              <div><h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Duration</h3><p className="text-sm text-slate-700">{s.duration}</p></div>
              <div><h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">What Helps</h3><p className="text-sm text-slate-700">{s.reliefFactors}</p></div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">When to Worry</h3>
                <p className="text-sm text-amber-800">{s.whenToWorry}</p>
              </div>
            </div>
            {s.slug && <Link href={`/symptoms/${s.slug}`} className="mt-4 inline-block text-sm text-teal-600 hover:text-teal-700 underline">Full guide: {s.name} →</Link>}
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 mt-8 text-center">For educational purposes only. Not a substitute for professional medical advice.</p>
    </main>
  )
}
