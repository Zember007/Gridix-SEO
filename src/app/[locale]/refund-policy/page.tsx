import type { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';
import { generatePageMetadata } from '@/lib/seo-utils';
import RefundPolicyClient from './RefundPolicyClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'refund-policy');
}

export default async function RefundPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RefundPolicyClient />;
}
