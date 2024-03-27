import { getI18n } from '@/locales/server';
import { cn } from '@/lib/utils';

import { LocaleSwitcher } from '@/components/locale-switcher';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export async function Toolbar({ className, ...props }: ToolbarProps) {
  const t = await getI18n();

  return (
    <div
      className={cn(
        'flex h-12 flex-row items-center gap-3 rounded-xl bg-gray-1 px-4 shadow-xl ring-1 ring-gray-alpha-3',
        className
      )}
      {...props}
    >
      <p className="text-xs text-gray-11">{t('count_components', { count: 0 })}</p>
      <span className="h-4 w-px bg-gray-6" />
      <LocaleSwitcher />
    </div>
  );
}
