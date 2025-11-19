import { locales, AppLocale } from '@/i18n/locales';
import LandingPage from './ClientPage';
import { generatePageMetadata } from '@/lib/seo-utils';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'home');
}

export default async function Page({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return <LandingPage locale={locale} />;
}