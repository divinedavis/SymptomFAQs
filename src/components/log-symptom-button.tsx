'use client';

import { useState } from 'react';
import { BookmarkPlus, Check } from 'lucide-react';

interface LogSymptomButtonProps {
  symptomName: string;
  symptomSlug: string;
}

export default function LogSymptomButton({ symptomName, symptomSlug }: LogSymptomButtonProps) {
  const [logged, setLogged] = useState(false);

  function handleLog() {
    const existing = localStorage.getItem('symptom-journal');
    const entries: { id: number; symptom: string; slug: string; date: string }[] = existing
      ? JSON.parse(existing)
      : [];
    entries.unshift({
      id: Date.now(),
      symptom: symptomName,
      slug: symptomSlug,
      date: new Date().toISOString(),
    });
    localStorage.setItem('symptom-journal', JSON.stringify(entries));
    setLogged(true);
  }

  return (
    <button
      onClick={handleLog}
      disabled={logged}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-teal-200 bg-teal-50 text-teal-700 text-sm font-medium hover:bg-teal-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {logged ? (
        <>
          <Check className="w-4 h-4" />
          Logged
        </>
      ) : (
        <>
          <BookmarkPlus className="w-4 h-4" />
          Log this symptom
        </>
      )}
    </button>
  );
}
