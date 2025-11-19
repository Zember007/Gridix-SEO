import { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const defaultOgImage = '/images/og-default.jpg';
const baseUrl = 'https://gridix.live';

/**
 * Генерирует метаданные для страницы с поддержкой мультиязычности
 */
export async function generatePageMetadata(
  locale: AppLocale,
  page: 'home' | 'pricing' | 'contacts' | 'partner-program' | 'privacy-policy' | 'refund-policy' | 'terms-of-service'
): Promise<Metadata> {
  // Динамически загружаем переводы для SEO
  let seoMessages: Record<string, any> = {};
  
  try {
    // Загружаем SEO переводы для конкретной страницы
    const messages = await import(`@/messages/${locale}/seo.json`);
    seoMessages = messages.default;
  } catch (error) {
    console.warn(`SEO translations not found for locale: ${locale}`);
  }

  const pageMetadata = seoMessages[page] || {};
  
  const title = pageMetadata.title || 'Gridix - Interactive Floor Plans for Real Estate';
  const description = pageMetadata.description || 'Professional platform for creating and managing interactive real estate floor plans.';
  const keywords = pageMetadata.keywords || 'real estate, floor plans, interactive, property management';
  
  const canonicalUrl = `${baseUrl}/${locale}${page === 'home' ? '' : `/${page}`}`;
  
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${baseUrl}/en${page === 'home' ? '' : `/${page}`}`,
        'ru': `${baseUrl}/ru${page === 'home' ? '' : `/${page}`}`,
        'ka': `${baseUrl}/ka${page === 'home' ? '' : `/${page}`}`,
        'ar': `${baseUrl}/ar${page === 'home' ? '' : `/${page}`}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'Gridix',
      locale: locale === 'en' ? 'en_US' : locale === 'ru' ? 'ru_RU' : locale === 'ka' ? 'ka_GE' : 'ar_AE',
      type: 'website',
      images: [
        {
          url: pageMetadata.ogImage || defaultOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [pageMetadata.ogImage || defaultOgImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Генерирует JSON-LD структурированные данные для организации
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gridix',
    url: baseUrl,
    logo: `${baseUrl}/images/logo/gridix_black_logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      availableLanguage: ['English', 'Russian', 'Georgian', 'Arabic'],
    },
    sameAs: [
      'https://t.me/gridix_bot',
    ],
  };
}

/**
 * Генерирует JSON-LD структурированные данные для веб-приложения
 */
export function generateWebApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Gridix',
    description: 'Professional platform for creating and managing interactive real estate floor plans',
    url: baseUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '129',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

