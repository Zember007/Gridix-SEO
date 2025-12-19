import type { Metadata } from "next";
import Script from "next/script";
import { cache } from "react";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/locales';
import "@/app/globals.css";
import { Language } from "@/lib/language-utils";
import { generateOrganizationSchema } from '@/lib/seo-utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const title = "Gridix - Interactive Floor Plans for Real Estate";
  const description = "Professional platform for creating and managing interactive real estate floor plans. Create stunning visualizations, manage leads, and boost your real estate sales.";
  const url = 'https://gridix.live';

  // Базовые метаданные (будут переопределены на страницах)
  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: "%s | Gridix"
    },
    description: description,
    keywords: ['real estate', 'floor plans', 'interactive', 'visualization', 'property management', 'CRM'],
    authors: [{ name: 'Gridix' }],
    creator: 'Gridix',
    publisher: 'Gridix',

    // Favicon и иконки
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'mask-icon',
          url: '/safari-pinned-tab.svg',
        },
      ],
    },

    // Manifest
    manifest: '/site.webmanifest',

    // Open Graph
    openGraph: {
      type: 'website',
      locale: locale,
      url: url,
      title: title,
      description: description,
      siteName: 'Gridix',
      images: [
        {
          url: `${url}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
          alt: 'Gridix Logo',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [`${url}/android-chrome-512x512.png`],
      creator: '@georgii_build',
    },

    // Верификация
    verification: {
      google: 'your-google-verification-code',
    },

    // Дополнительные метатеги
    other: {
      'theme-color': '#000000',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'apple-mobile-web-app-title': 'Gridix',
      'format-detection': 'telephone=no',
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {


  const { locale } = await params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  // Оптимизированная загрузка переводов:
  // - все JSON грузятся параллельно через Promise.all
  // - результат кешируется между рендерами для одного и того же locale
  const getMessages = cache(async (loc: string) => {
    const [
      site,
      nav,
      landing,
      pricing,
      contacts,
      policies,
      partnerProgram,
      legal,
      seo,
    ] = await Promise.all([
      import(`@/messages/${loc}/site.json`),
      import(`@/messages/${loc}/nav.json`),
      import(`@/messages/${loc}/landing.json`),
      import(`@/messages/${loc}/pricing.json`),
      import(`@/messages/${loc}/contacts.json`),
      import(`@/messages/${loc}/policies.json`),
      import(`@/messages/${loc}/partnerProgram.json`),
      import(`@/messages/${loc}/legal.json`),
      import(`@/messages/${loc}/seo.json`),
    ]);

    return {
      site: site.default,
      nav: nav.default,
      landing: landing.default,
      pricing: pricing.default,
      contacts: contacts.default,
      policies: policies.default,
      partnerProgram: partnerProgram.default,
      legal: legal.default,
      seo: seo.default,
    };
  });

  const messages = await getMessages(locale);

  // Генерируем структурированные данные для организации
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang={locale} className="light" suppressHydrationWarning>
      <head>
        <Script
          id="gtm-base"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PFVTWTXM');`
          }}
        />
        {/* Структурированные данные для SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

      </head>
      <body className={`${poppins.className} antialiased`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFVTWTXM"
          height={0} width={0} style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

