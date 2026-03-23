import type { Metadata } from 'next';
import { Suspense } from 'react';
import CheckPageClient from './client';

export const metadata: Metadata = {
  title: 'Check Symptoms — Browse & Search',
  description: 'Search symptoms and get instant information on causes, severity, and what to do.',
};

export default function CheckPage() {
  return (
    <Suspense fallback={null}>
      <CheckPageClient />
    </Suspense>
  );
}
