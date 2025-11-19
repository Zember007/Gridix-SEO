import type { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';
import { generatePageMetadata } from '@/lib/seo-utils';
import TermsOfServiceClient from './TermsOfServiceClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'terms-of-service');
}

export default async function TermsOfServicePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TermsOfServiceClient />;
}
