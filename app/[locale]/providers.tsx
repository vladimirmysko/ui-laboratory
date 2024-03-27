'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { I18nProviderClient } from '@/locales/client';

interface ProvidersProps extends ThemeProviderProps {
  children: React.ReactNode;
  locale: string;
}

export function Providers({ children, locale, ...props }: Readonly<ProvidersProps>) {
  return (
    <NextThemesProvider {...props}>
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </NextThemesProvider>
  );
}
