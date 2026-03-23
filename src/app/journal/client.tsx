'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Plus, Trash2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatDistanceToNow } from 'date-fns';

interface JournalEntry {
  id: number;
  symptom: string;
  slug: string;
  date: string;
}

interface PatternInsight {
  pattern: string;
  occurrences: number;
  symptom: string;
  details: string;
}

function detectPatterns(entries: JournalEntry[]): PatternInsight[] {
  if (entries.length < 3) return [];

  const patterns: PatternInsight[] = [];
  const symptomCounts: Record<string, { count: number; dates: Date[] }> = {};

  for (const entry of entries) {
    const normalized = entry.symptom.toLowerCase().trim();
    if (!symptomCounts[normalized]) {
      symptomCounts[normalized] = { count: 0, dates: [] };
    }
    symptomCounts[normalized].count++;
    symptomCounts[normalized].dates.push(new Date(entry.date));
  }

  for (const [symptom, data] of Object.entries(symptomCounts)) {
    if (data.count >= 2) {
      const dayNames = data.dates.map((d) =>
        d.toLocaleDateString('en-US', { weekday: 'long' })
      );
      const dayCounts: Record<string, number> = {};
      for (const day of dayNames) {
        dayCounts[day] = (dayCounts[day] ?? 0) + 1;
      }

      const [topDay, topCount] = Object.entries(dayCounts).sort(
        ([, a], [, b]) => b - a
      )[0];

      if (topCount >= 2) {
        patterns.push({
          pattern: `You often report ${symptom} on ${topDay}s`,
          occurrences: data.count,
          symptom,
          details: `This symptom has appeared ${topCount} times on ${topDay}s. Consider tracking your activities on those days.`,
        });
      } else if (data.count >= 3) {
        patterns.push({
          pattern: `Recurring ${symptom}`,
          occurrences: data.count,
          symptom,
          details: `You have logged ${symptom} ${data.count} times. This pattern may be worth discussing with your doctor.`,
        });
      }
    }
  }

  return patterns.slice(0, 3);
}

function formatDate(dateStr: string) {
  try {
    return formatDistanceToNow(new Date(dateStr), { addSuffix: true });
  } catch {
    return dateStr;
  }
}

export default function JournalClient() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [patterns, setPatterns] = useState<PatternInsight[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('symptom-journal');
    const parsed: JournalEntry[] = stored ? JSON.parse(stored) : [];
    setEntries(parsed);
    setPatterns(detectPatterns(parsed));
    setIsLoading(false);
  }, []);

  function deleteEntry(id: number) {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    setPatterns(detectPatterns(updated));
    localStorage.setItem('symptom-journal', JSON.stringify(updated));
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Symptom Journal</h1>
          <p className="text-slate-500 text-sm mt-1">Your personal health log</p>
        </div>
        <Link href="/check">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
            <Plus className="w-4 h-4 mr-2" />
            Check Symptom
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 w-full rounded-xl bg-slate-100 animate-pulse" />
          ))}
        </div>
      ) : (
        <>
          {patterns.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <TrendingUp className="w-4 h-4 text-teal-600" />
                Patterns detected
              </div>
              {patterns.map((p, i) => (
                <div key={i} className="rounded-xl border border-teal-100 bg-teal-50 p-4 space-y-1">
                  <p className="text-sm font-medium text-teal-900">{p.pattern}</p>
                  <p className="text-xs text-teal-700">{p.details}</p>
                </div>
              ))}
            </div>
          )}

          {entries.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-slate-400" />
              </div>
              <div>
                <p className="font-medium text-slate-700">No entries yet</p>
                <p className="text-sm text-slate-500 mt-1">
                  After checking a symptom, tap &quot;Log this symptom&quot; to save it here.
                </p>
              </div>
              <Link href="/check">
                <Button
                  variant="outline"
                  className="border-teal-200 text-teal-700 hover:bg-teal-50"
                >
                  Check a symptom
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
              </p>
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/symptoms/${entry.slug}`}
                        className="font-medium text-slate-900 capitalize hover:text-teal-700 transition-colors"
                      >
                        {entry.symptom}
                      </Link>
                    </div>
                    <p className="text-xs text-slate-400">{formatDate(entry.date)}</p>
                  </div>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    aria-label={`Delete ${entry.symptom} entry`}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
