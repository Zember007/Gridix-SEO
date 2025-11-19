export const locales = ['en', 'ru', 'ka', 'ar'] as const;
export type AppLocale = typeof locales[number];
export const defaultLocale: AppLocale = 'en';


