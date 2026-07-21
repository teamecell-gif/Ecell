import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Providers from './providers';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-Cell VNIT | Entrepreneurship Cell',
  description: 'E-Cell VNIT empowers entrepreneurs and social startups with mentorship, workshops, and events. Join our community of innovators and turn your ideas into successful startups.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: 'E-Cell VNIT | Entrepreneurship Cell',
    description: 'Join E-Cell VNIT\'s community of entrepreneurs and empower your journey with mentorship, workshops, competitions, and events.',
    url: 'https://www.ecellvnit.org',
    siteName: 'E-Cell VNIT',
    images: [
      {
        url: '/assets/icon.webp',
        width: 800,
        height: 600,
        alt: 'E-Cell VNIT Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/assets/icon.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex flex-col min-h-screen relative overflow-x-hidden">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
