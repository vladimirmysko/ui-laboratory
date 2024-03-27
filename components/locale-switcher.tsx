'use client';

import { useChangeLocale, useCurrentLocale } from '@/locales/client';
import { cn } from '@/lib/utils';

import { ChevronUpDownIcon } from '@heroicons/react/16/solid';

interface LocaleSwitcherProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'children' | 'onChange' | 'defaultValue' | 'id' | 'name'
  > {
  containerClassName?: string;
}

export function LocaleSwitcher({ className, containerClassName, ...props }: LocaleSwitcherProps) {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  const locales: { value: 'en' | 'ru' | 'kk'; label: string }[] = [
    { value: 'kk', label: 'Қазақ' },
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
  ];

  return (
    <div className="relative flex flex-col items-stretch">
      <select
        className={cn(
          'h-7 cursor-pointer rounded-md border-0 bg-white bg-none px-2.5 py-0 pr-8 text-xs font-medium transition',
          'focus-visible:bg-gray-4 focus-visible:outline-0 focus-visible:ring-0',
          className
        )}
        name="locale"
        id="locale"
        defaultValue={currentLocale}
        onChange={(e) => changeLocale(e.target.value as 'en' | 'ru' | 'kk')}
        {...props}
      >
        {locales.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.label}
          </option>
        ))}
      </select>
      <ChevronUpDownIcon className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-11" />
    </div>
  );
}
