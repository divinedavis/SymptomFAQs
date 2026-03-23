'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { searchIndex } from '@/data/search-index';
import { symptoms } from '@/data/symptoms';

export default function CheckPageClient() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim()
    ? searchIndex
        .filter((entry) => entry.tag.toLowerCase().includes(query.toLowerCase()))
        .reduce<{ slug: string; name: string }[]>((acc, entry) => {
          if (!acc.find((r) => r.slug === entry.slug)) {
            acc.push({ slug: entry.slug, name: entry.name });
          }
          return acc;
        }, [])
        .slice(0, 6)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(slug: string) {
    setOpen(false);
    setQuery('');
    router.push(`/symptoms/${slug}`);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Search section */}
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Find your symptom</h1>
        <p className="text-slate-500 max-w-md">
          Type a symptom below to instantly see possible causes, severity, and what to do.
        </p>

        <div ref={containerRef} className="relative w-full max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <Input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder="e.g. stomach pain, dizzy, can't sleep…"
            className="pl-10 h-14 text-base rounded-xl border-slate-300 focus:border-teal-500 focus:ring-teal-500 w-full"
            autoFocus
          />

          {open && results.length > 0 && (
            <div className="absolute z-50 mt-1 w-full bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">
              {results.map((r) => (
                <button
                  key={r.slug}
                  onMouseDown={() => handleSelect(r.slug)}
                  className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-800 transition-colors border-b border-slate-100 last:border-0"
                >
                  {r.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Browse all symptoms */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">Browse all symptoms</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {symptoms.map((s) => (
            <Link
              key={s.slug}
              href={`/symptoms/${s.slug}`}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-800 transition-colors text-center"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
