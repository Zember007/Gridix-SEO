import type { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';
import { generatePageMetadata } from '@/lib/seo-utils';
import HeroHeader from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PartnerProgramClient from './PartnerProgramClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'partner-program');
}

export default async function PartnerProgramPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <HeroHeader />
      <PartnerProgramClient locale={locale} />
      <Footer />
    </div>
  );
}
