import type { Metadata } from 'next';
import JournalClient from './client';

export const metadata: Metadata = {
  title: 'Symptom Journal',
  description: 'View your symptom history and discover patterns in your health.',
};

export default function JournalPage() {
  return <JournalClient />;
}
