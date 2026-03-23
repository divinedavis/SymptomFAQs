import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: 'SymptomFAQs — What\'s your body telling you?', template: '%s | SymptomFAQs' },
  description: 'Look up symptoms instantly. Get common causes, severity levels, and when to see a doctor — no AI, no fluff, just clear answers.',
  metadataBase: new URL('http://159.203.110.79'),
  openGraph: {
    type: 'website',
    siteName: 'SymptomFAQs',
    title: 'SymptomFAQs — What\'s your body telling you?',
    description: 'Look up symptoms instantly. Get common causes, severity levels, and when to see a doctor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SymptomFAQs',
    description: 'Look up symptoms instantly. Get common causes, severity levels, and when to see a doctor.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
