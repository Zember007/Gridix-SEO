'use client';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Language, LANGUAGE_CONFIG } from '@/lib/language-utils';

export const LanguageToggle = ({ classNameButton = '' }: { classNameButton?: string }) => {
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (newLanguage: string) => {
    // Получаем текущий путь без локали
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Редиректим на тот же путь с новой локалью
    router.push(`/${newLanguage}${pathWithoutLocale || ''}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`h-9 w-9 p-0 ${classNameButton}`}>
          <Globe className="h-4 w-4" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {Object.entries(LANGUAGE_CONFIG).map(([code, config]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`cursor-pointer ${locale === code ? 'bg-accent' : ''}`}
          >
            <span className="mr-2">{config.flag}</span>
            {config.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
