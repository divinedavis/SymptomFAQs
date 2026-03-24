import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Activity className="w-5 h-5 text-teal-600" />
          <span>SymptomCheck</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/check"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Check Symptoms
          </Link>
          <Link
            href="/symptoms"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Symptoms A-Z
          </Link>
          <Link
            href="/body"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            By Body Part
          </Link>
          <Link
            href="/journal"
            className="text-slate-600 hover:text-slate-900 transition-colors"
          >
            Journal
          </Link>
        </div>
      </div>
    </nav>
  );
}
