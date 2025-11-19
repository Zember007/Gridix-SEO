import type { Metadata } from 'next';
import { AppLocale } from '@/i18n/locales';
import { generatePageMetadata } from '@/lib/seo-utils';
import HeroHeader from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import ContactsClient from './ContactsClient';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(locale as AppLocale, 'contacts');
}

export default async function ContactsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex flex-col">
      <HeroHeader />
      <ContactsClient />
      <Footer />
    </div>
  );
}

