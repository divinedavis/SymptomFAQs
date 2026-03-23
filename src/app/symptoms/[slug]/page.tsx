import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TriangleAlert, Siren, ChevronRight } from 'lucide-react';
import { getSymptomBySlug, symptoms, type SymptomCause, type Likelihood, type Severity } from '@/data/symptoms';
import LogSymptomButton from '@/components/log-symptom-button';

export async function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) return {};
  return {
    title: `${symptom.name}: Causes, Symptoms & When to See a Doctor`,
    description: symptom.summary,
    openGraph: {
      title: `${symptom.name}: Causes, Symptoms & When to See a Doctor`,
      description: symptom.summary,
    },
  };
}

const LIKELIHOOD_BADGE: Record<Likelihood, string> = {
  'very-common': 'bg-teal-100 text-teal-800',
  common: 'bg-blue-100 text-blue-800',
  'less-common': 'bg-slate-100 text-slate-700',
  rare: 'bg-purple-100 text-purple-800',
};

const LIKELIHOOD_LABEL: Record<Likelihood, string> = {
  'very-common': 'Very common',
  common: 'Common',
  'less-common': 'Less common',
  rare: 'Rare',
};

const SEVERITY_DOT: Record<Severity, string> = {
  low: 'bg-green-500',
  medium: 'bg-amber-400',
  high: 'bg-red-500',
  emergency: 'bg-red-600 animate-pulse',
};

const SEVERITY_LABEL: Record<Severity, string> = {
  low: 'Mild',
  medium: 'Moderate',
  high: 'Serious',
  emergency: 'Emergency',
};

function CauseCard({ cause }: { cause: SymptomCause }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-3">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-semibold text-slate-900">{cause.name}</span>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${LIKELIHOOD_BADGE[cause.likelihood]}`}
        >
          {LIKELIHOOD_LABEL[cause.likelihood]}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${SEVERITY_DOT[cause.severity]}`} />
          {SEVERITY_LABEL[cause.severity]}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{cause.description}</p>
      <div className="rounded-lg bg-teal-50 border border-teal-100 px-4 py-3">
        <p className="text-sm text-teal-800 italic">{cause.whatToDo}</p>
      </div>
    </div>
  );
}

export default async function SymptomPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);

  if (!symptom) notFound();

  const relatedData = symptom.relatedSymptoms
    .map((s) => getSymptomBySlug(s))
    .filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: symptom.name,
    description: symptom.summary,
    url: `http://159.203.110.79/symptoms/${symptom.slug}`,
    about: {
      '@type': 'MedicalCondition',
      name: symptom.name,
      possibleTreatment: symptom.seeDoctorIf?.join(', '),
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      cssSelector: 'main',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What causes ${symptom.name.toLowerCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: symptom.causes.map(c => c.name).join(', '),
        },
      },
      {
        '@type': 'Question',
        name: `When should I see a doctor for ${symptom.name.toLowerCase()}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: symptom.seeDoctorIf?.join(' ') || 'Consult a doctor if symptoms persist or worsen.',
        },
      },
      ...(symptom.emergencyIf?.length ? [{
        '@type': 'Question',
        name: `Is ${symptom.name.toLowerCase()} an emergency?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Seek emergency care if: ${symptom.emergencyIf.join(' ')}`,
        },
      }] : []),
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-slate-400">
        <Link href="/" className="hover:text-slate-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/check" className="hover:text-slate-600 transition-colors">
          Symptoms
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600">{symptom.name}</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{symptom.name}</h1>
        <p className="text-xl text-slate-500">{symptom.commonName}</p>
        <p className="text-slate-600 leading-relaxed pt-1">{symptom.summary}</p>
        <div className="pt-2">
          <LogSymptomButton symptomName={symptom.name} symptomSlug={symptom.slug} />
        </div>
      </div>

      {/* Possible Causes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Possible Causes</h2>
        <div className="space-y-4">
          {symptom.causes.map((cause, i) => (
            <CauseCard key={i} cause={cause} />
          ))}
        </div>
      </section>

      {/* See a Doctor If */}
      {symptom.seeDoctorIf.length > 0 && (
        <section>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <TriangleAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <h2 className="font-semibold text-amber-900">See a Doctor If</h2>
            </div>
            <ul className="space-y-1.5">
              {symptom.seeDoctorIf.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-amber-800">
                  <span className="font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Emergency If */}
      {symptom.emergencyIf.length > 0 && (
        <section>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Siren className="w-5 h-5 text-red-600 flex-shrink-0" />
              <h2 className="font-semibold text-red-900">Go to ER / Call 911 If</h2>
            </div>
            <ul className="space-y-1.5">
              {symptom.emergencyIf.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                  <span className="font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}


      {/* FAQ Section */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-medium text-slate-800">What are the most common causes of {symptom.name.toLowerCase()}?</h3>
            <p className="text-slate-600 mt-2 text-sm">
              The most common causes include {symptom.causes.filter(c => c.likelihood === "very-common" || c.likelihood === "common").map(c => c.name).join(", ")}.
            </p>
          </div>
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-medium text-slate-800">When should I see a doctor for {symptom.name.toLowerCase()}?</h3>
            <p className="text-slate-600 mt-2 text-sm">
              See a doctor if: {symptom.seeDoctorIf?.slice(0, 3).join("; ")}.
            </p>
          </div>
          {symptom.emergencyIf && symptom.emergencyIf.length > 0 && (
            <div className="border border-red-200 rounded-lg p-4 bg-red-50">
              <h3 className="font-medium text-red-800">Is {symptom.name.toLowerCase()} ever an emergency?</h3>
              <p className="text-red-700 mt-2 text-sm">
                Yes — seek emergency care if: {symptom.emergencyIf.slice(0, 2).join("; ")}.
              </p>
            </div>
          )}
          <div className="border border-slate-200 rounded-lg p-4">
            <h3 className="font-medium text-slate-800">How do I relieve {symptom.name.toLowerCase()} at home?</h3>
            <p className="text-slate-600 mt-2 text-sm">
              {symptom.causes[0]?.whatToDo} For persistent symptoms, consult a healthcare provider.
            </p>
          </div>
        </div>
      </section>

      {/* Related Symptoms */}
      {relatedData.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold text-slate-900">Related Symptoms</h2>
          <div className="flex flex-wrap gap-2">
            {relatedData.map((related) => (
              <Link
                key={related!.slug}
                href={`/symptoms/${related!.slug}`}
                className="px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 text-slate-600 text-sm transition-colors"
              >
                {related!.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-100 pt-6">
        This information is for educational purposes only and is not a substitute for professional
        medical advice. Always consult a qualified healthcare provider for diagnosis and treatment.
        If you are experiencing a medical emergency, call 911 immediately.
      </p>
    </div>
  );
}
