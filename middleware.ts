import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/locales';

export default createMiddleware({
  // Список поддерживаемых локалей
  locales: locales as unknown as string[],
  
  // Дефолтная локаль
  defaultLocale,
  
  // Определяет, показывать ли дефолтную локаль в URL
  localePrefix: 'always', // Всегда показывать префикс языка для совместимости со структурой папок
  
  // Стратегия обнаружения локали
  localeDetection: true,
});

export const config = {
  // Применять middleware ко всем путям кроме API, статики и файлов
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|gif|css|js)).*)',
  ],
};