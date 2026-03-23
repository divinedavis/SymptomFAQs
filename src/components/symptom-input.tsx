'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchIndex } from '@/data/search-index';

export default function SymptomInput() {
  const [symptom, setSymptom] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = symptom.trim().toLowerCase();
    if (!trimmed) return;

    const match = searchIndex.find((entry) =>
      entry.tag.toLowerCase().includes(trimmed)
    );

    if (match) {
      router.push(`/symptoms/${match.slug}`);
    } else {
      router.push('/check');
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <Input
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            placeholder="Describe your symptom (e.g. stomach pain, dizzy)"
            className="pl-10 h-14 text-base rounded-xl border-slate-300 focus:border-teal-500 focus:ring-teal-500"
            autoFocus
          />
        </div>
        <Button
          type="submit"
          disabled={!symptom.trim()}
          className="h-14 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
}
