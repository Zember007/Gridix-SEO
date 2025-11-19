import type { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';
import { generatePageMetadata } from '@/lib/seo-utils';
import HeroHeader from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PricingClient from './PricingClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'pricing');
}

export default async function PricingPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroHeader />
      <PricingClient />
      <Footer />
    </div>
  );
}

