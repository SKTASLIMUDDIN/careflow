import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CareFlow — Patient Follow-up & Care Coordination | By CAPSIC CARE',
  description:
    'CareFlow helps independent doctors and private chambers in Howrah and Kolkata manage post-consultation follow-ups, patient reminders and prescribed diagnostic coordination through a dedicated patient-care support team.',
  keywords: [
    'independent doctors in Howrah',
    'doctor chambers in Howrah',
    'patient follow-up services in Howrah',
    'independent doctors in Kolkata',
    'private doctor chambers in Kolkata',
    'patient follow-up management for doctors',
    'patient coordination services for private practice',
    'Capsic Care',
    'CareFlow'
  ],
  icons: {
    icon: '/assets/brand/capsic-logo.png',
    apple: '/assets/brand/capsic-logo.png',
  },
  openGraph: {
    title: 'CareFlow — Patient Follow-up & Care Coordination | By CAPSIC CARE',
    description:
      'CareFlow helps independent doctors manage post-consultation follow-ups, patient reminders and prescribed diagnostic coordination.',
    url: 'https://capsic.in/careflow/',
    siteName: 'CareFlow by CAPSIC CARE',
    locale: 'en_IN',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d9488',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-white text-slate-900 font-sans antialiased selection:bg-teal-100 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
