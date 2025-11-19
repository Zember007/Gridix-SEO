import { getRequestConfig } from 'next-intl/server';
import { locales, type AppLocale } from './i18n/locales';

export default getRequestConfig(async ({ locale }) => {
  // Проверяем, что локаль поддерживается
  const validLocale: AppLocale =
    locale && locales.includes(locale as AppLocale)
      ? (locale as AppLocale)
      : 'en';

  // Загружаем все файлы из папки языка
  const messages = {
    site: (await import(`./messages/${validLocale}/site.json`)).default,
    nav: (await import(`./messages/${validLocale}/nav.json`)).default,
    landing: (await import(`./messages/${validLocale}/landing.json`)).default,
    pricing: (await import(`./messages/${validLocale}/pricing.json`)).default,
    contacts: (await import(`./messages/${validLocale}/contacts.json`)).default,
    policies: (await import(`./messages/${validLocale}/policies.json`)).default,
    partnerProgram: (await import(`./messages/${validLocale}/partnerProgram.json`)).default,
    legal: (await import(`./messages/${validLocale}/legal.json`)).default,
    seo: (await import(`./messages/${validLocale}/seo.json`)).default,
  };

  return {
    locale: validLocale,
    messages,
  };
});

