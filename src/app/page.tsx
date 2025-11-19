import { redirect } from 'next/navigation';
import { defaultLocale } from '@/i18n/locales';

// Корневая страница - редиректит на дефолтную локаль
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}

