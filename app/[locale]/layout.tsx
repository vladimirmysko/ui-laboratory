import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Providers } from './providers';

const interDisplay = localFont({
  src: [
    {
      path: '../../fonts/InterDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/InterDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter-display',
});

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'UI Laboratory',
  };
}

export default function LocaleLayout({ children, params }: Readonly<LocaleLayoutProps>) {
  return (
    <html lang={params.locale}>
      <body
        className={cn(
          interDisplay.variable,
          'font-sans text-base text-black antialiased selection:bg-teal-300 selection:text-black'
        )}
        style={{ textRendering: 'optimizeLegibility' }}
      >
        <Providers locale={params.locale}>{children}</Providers>
      </body>
    </html>
  );
}
