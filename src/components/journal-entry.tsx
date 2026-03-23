import { formatDistanceToNow } from 'date-fns';
import { Stethoscope, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SymptomLog } from '@/types';
import { cn } from '@/lib/utils';

interface JournalEntryProps {
  log: SymptomLog;
}

function formatDate(dateStr: string) {
  try {
    return formatDistanceToNow(new Date(dateStr), { addSuffix: true });
  } catch {
    return dateStr;
  }
}

export default function JournalEntry({ log }: JournalEntryProps) {
  const topCause = log.causes?.[0];

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-slate-900 capitalize">{log.symptom}</span>
          {log.severity != null && (
            <Badge
              variant="outline"
              className={cn(
                'text-xs',
                log.severity >= 7
                  ? 'border-rose-200 text-rose-600'
                  : log.severity >= 4
                  ? 'border-amber-200 text-amber-600'
                  : 'border-emerald-200 text-emerald-600'
              )}
            >
              Severity {log.severity}/10
            </Badge>
          )}
          {log.see_doctor && (
            <Badge variant="outline" className="text-xs border-amber-200 text-amber-600">
              <Stethoscope className="w-3 h-3 mr-1" />
              See doctor
            </Badge>
          )}
        </div>

        {topCause && (
          <p className="text-sm text-slate-600">
            Most likely: <span className="font-medium">{topCause.name}</span>
          </p>
        )}

        {log.duration && (
          <p className="text-xs text-slate-500">Duration: {log.duration}</p>
        )}
      </div>

      <span className="text-xs text-slate-400 flex-shrink-0 mt-0.5">
        {formatDate(log.created_at)}
      </span>
    </div>
  );
}
