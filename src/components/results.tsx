'use client';

import { useState } from 'react';
import { AlertTriangle, Phone, Stethoscope, BookOpen, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Assessment, Cause, Likelihood, Severity } from '@/types';
import { cn } from '@/lib/utils';

interface ResultsProps {
  assessment: Assessment;
  symptom: string;
  onLogToJournal: () => void;
  onStartOver: () => void;
  isLogged: boolean;
}

const likelihoodConfig: Record<Likelihood, { label: string; className: string }> = {
  high: { label: 'Most Likely', className: 'bg-rose-100 text-rose-700 border-rose-200' },
  medium: { label: 'Possible', className: 'bg-amber-100 text-amber-700 border-amber-200' },
  low: { label: 'Less Likely', className: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
};

const severityConfig: Record<Severity, { dot: string }> = {
  low: { dot: 'bg-emerald-500' },
  medium: { dot: 'bg-amber-500' },
  high: { dot: 'bg-rose-500' },
  emergency: { dot: 'bg-rose-600 animate-pulse' },
};

function CauseCard({ cause }: { cause: Cause }) {
  const likelihood = likelihoodConfig[cause.likelihood];
  const severity = severityConfig[cause.severity];

  return (
    <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 transition-colors">
      <div className={cn('w-3 h-3 rounded-full mt-1 flex-shrink-0', severity.dot)} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="font-medium text-slate-900">{cause.name}</span>
          <Badge
            variant="outline"
            className={cn('text-xs', likelihood.className)}
          >
            {likelihood.label}
          </Badge>
          {cause.severity === 'emergency' && (
            <Badge className="text-xs bg-rose-600 text-white border-0">Emergency</Badge>
          )}
        </div>
        <p className="text-sm text-slate-600">{cause.description}</p>
      </div>
    </div>
  );
}

export default function Results({
  assessment,
  symptom,
  onLogToJournal,
  onStartOver,
  isLogged,
}: ResultsProps) {
  return (
    <div className="space-y-4">
      {assessment.emergencyWarning && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-50 border border-rose-200">
          <Phone className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-rose-700">Emergency: Call 911 Now</p>
            <p className="text-sm text-rose-600">
              Your symptoms may indicate a serious medical emergency. Do not wait — call
              emergency services immediately.
            </p>
          </div>
        </div>
      )}

      {assessment.seeDoctor && !assessment.emergencyWarning && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
          <Stethoscope className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-700">See a Doctor</p>
            <p className="text-sm text-amber-600">
              Based on your symptoms, we recommend consulting with a healthcare provider.
            </p>
          </div>
        </div>
      )}

      <Card className="border-slate-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-slate-900">
            Possible causes for: <span className="text-teal-600">{symptom}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {assessment.causes.map((cause, i) => (
            <CauseCard key={i} cause={cause} />
          ))}
        </CardContent>
      </Card>

      <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
        <AlertTriangle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500">{assessment.disclaimer}</p>
      </div>

      <Separator />

      <div className="flex gap-3">
        <Button
          onClick={onLogToJournal}
          disabled={isLogged}
          variant="outline"
          className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50"
        >
          {isLogged ? (
            <>
              <CheckCircle className="w-4 h-4 mr-2" />
              Logged to Journal
            </>
          ) : (
            <>
              <BookOpen className="w-4 h-4 mr-2" />
              Log to Journal
            </>
          )}
        </Button>
        <Button
          onClick={onStartOver}
          variant="outline"
          className="flex-1 border-slate-200 text-slate-600"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
}
