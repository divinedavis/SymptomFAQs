import { TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { PatternInsight } from '@/types';

interface PatternCardProps {
  pattern: PatternInsight;
}

export default function PatternCard({ pattern }: PatternCardProps) {
  return (
    <Card className="border-teal-200 bg-teal-50">
      <CardContent className="flex items-start gap-3 pt-4">
        <TrendingUp className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-teal-900 text-sm">{pattern.pattern}</p>
          <p className="text-xs text-teal-700 mt-1">{pattern.details}</p>
          <p className="text-xs text-teal-600 mt-1">
            {pattern.occurrences} {pattern.occurrences === 1 ? 'occurrence' : 'occurrences'} of{' '}
            <span className="font-medium">{pattern.symptom}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
