import { comparisons } from '@/data/comparisons'
import Link from 'next/link'
import { ChevronRight, ArrowLeftRight } from 'lucide-react'

export const metadata = {
  title: 'Symptom Comparisons — Tell the Difference',
  description: 'Side-by-side comparisons of similar symptoms. Heartburn vs heart attack, cold vs flu, anxiety vs heart attack, and more.',
}

export default function ComparePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800">Compare Symptoms</span>
      </nav>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Compare Symptoms</h1>
      <p className="text-slate-600 mb-8">Side-by-side comparisons of symptoms that are commonly confused with each other.</p>
      <div className="space-y-3">
        {comparisons.map(c => (
          <Link key={c.slug} href={`/compare/${c.slug}`} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-teal-200 hover:bg-teal-50/30 transition-all group">
            <div className="flex items-center gap-3">
              <ArrowLeftRight className="w-5 h-5 text-teal-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-slate-800 group-hover:text-teal-700">{c.title}</p>
                <p className="text-sm text-slate-500">{c.description.slice(0, 80)}...</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-teal-500 flex-shrink-0" />
          </Link>
        ))}
      </div>
    </main>
  )
}
