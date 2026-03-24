import { symptoms } from '@/data/symptoms'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Symptoms A-Z — Complete Symptom List',
  description: 'Browse all symptoms A-Z. Find causes, severity levels, and when to see a doctor for 100+ common symptoms.',
}

export default function SymptomsIndexPage() {
  const sorted = [...symptoms].sort((a, b) => a.name.localeCompare(b.name))
  const letters = [...new Set(sorted.map(s => s.name[0].toUpperCase()))]

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800">Symptoms A-Z</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">Symptoms A-Z</h1>
      <p className="text-slate-600 mb-8">Browse {symptoms.length} symptoms. Click any symptom to see causes, severity, and when to see a doctor.</p>

      {/* Letter jump nav */}
      <div className="flex flex-wrap gap-2 mb-10">
        {letters.map(l => (
          <a key={l} href={`#letter-${l}`} className="w-9 h-9 flex items-center justify-center rounded-lg bg-teal-50 text-teal-700 font-semibold hover:bg-teal-100 transition-colors text-sm">
            {l}
          </a>
        ))}
      </div>

      {/* Grouped by letter */}
      <div className="space-y-10">
        {letters.map(letter => (
          <div key={letter} id={`letter-${letter}`}>
            <h2 className="text-2xl font-bold text-teal-600 border-b border-slate-200 pb-2 mb-4">{letter}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {sorted
                .filter(s => s.name[0].toUpperCase() === letter)
                .map(s => (
                  <Link
                    key={s.slug}
                    href={`/symptoms/${s.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group"
                  >
                    <span className="text-slate-700 group-hover:text-teal-600 text-sm">{s.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500" />
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-slate-400 mt-12 text-center">For educational purposes only. Not a substitute for professional medical advice.</p>
    </main>
  )
}
