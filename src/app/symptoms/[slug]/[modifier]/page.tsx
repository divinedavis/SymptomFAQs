import { notFound } from "next/navigation"
import { getSymptomBySlug } from "@/data/symptoms"
import { getModifierPage, modifierPages } from "@/data/modifiers"
import Link from "next/link"
import { Siren, ChevronRight } from "lucide-react"

export async function generateStaticParams() {
  return modifierPages.map(p => ({
    slug: p.symptomSlug,
    modifier: p.modifier,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; modifier: string }> }) {
  const { slug, modifier } = await params
  const page = getModifierPage(slug, modifier)
  if (!page) return {}
  return {
    title: page.title + ": Causes & What To Do",
    description: page.description,
  }
}

export default async function ModifierSymptomPage({ params }: { params: Promise<{ slug: string; modifier: string }> }) {
  const { slug, modifier } = await params
  const page = getModifierPage(slug, modifier)
  const symptom = getSymptomBySlug(slug)
  if (!page || !symptom) notFound()

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-1 text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/check" className="hover:text-teal-600">Symptoms</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={"/symptoms/" + symptom.slug} className="hover:text-teal-600">{symptom.name}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-800">{page.title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">{page.title}</h1>
      <p className="text-slate-600 mb-6">{page.content}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Common Causes</h2>
        <ul className="space-y-2">
          {page.additionalCauses.map((cause, i) => (
            <li key={i} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg text-slate-700">
              <span className="w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
              {cause}
            </li>
          ))}
        </ul>
      </section>

      <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg mb-8">
        <p className="text-sm text-teal-800">
          For a full breakdown of all causes, severity levels, and when to see a doctor, see our complete guide to{" "}
          <Link href={"/symptoms/" + symptom.slug} className="font-semibold underline">{symptom.name}</Link>.
        </p>
      </div>

      {symptom.emergencyIf && symptom.emergencyIf.length > 0 && (
        <div className="p-4 bg-red-50 border border-red-300 rounded-lg flex gap-3">
          <Siren className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-red-800 text-sm">Emergency warning</p>
            <p className="text-red-700 text-sm mt-1">{symptom.emergencyIf[0]}</p>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-400 mt-8">This information is for educational purposes only and is not a substitute for professional medical advice.</p>
    </main>
  )
}
