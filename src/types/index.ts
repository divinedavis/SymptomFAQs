export type MessageRole = 'user' | 'assistant';

export interface Message {
  role: MessageRole;
  content: string;
}

export type Severity = 'low' | 'medium' | 'high' | 'emergency';
export type Likelihood = 'high' | 'medium' | 'low';

export interface Cause {
  name: string;
  likelihood: Likelihood;
  description: string;
  severity: Severity;
}

export interface Assessment {
  causes: Cause[];
  seeDoctor: boolean;
  emergencyWarning: boolean;
  disclaimer: string;
}

export interface TriageResponse {
  questions?: string[];
  assessment?: Assessment;
  followUpQuestion?: string;
}

export interface SymptomLog {
  id: string;
  user_id: string | null;
  session_id: string | null;
  symptom: string;
  severity: number | null;
  duration: string | null;
  causes: Cause[] | null;
  see_doctor: boolean;
  created_at: string;
}

export interface PatternInsight {
  pattern: string;
  occurrences: number;
  symptom: string;
  details: string;
}
