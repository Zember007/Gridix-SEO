'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from './logo';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const t = useTranslations('landing');
  const locale = useLocale();
  const isMobile = useIsMobile();
  const router = useRouter();
  const goToAdmin = () => {
    window.open(`https://app.gridix.live/${locale}/`, '_self');
  };

  const goToPrivacyPolicy = () => {
    router.push(`/${locale}/privacy-policy`);
  };

  const goToTermsOfService = () => {
    router.push(`/${locale}/terms-of-service`);
  };

  const goToRefundPolicy = () => {
    router.push(`/${locale}/refund-policy`);
  };

  const goToPricing = () => {
    router.push(`/${locale}/pricing`);
  };

  const goToContacts = () => {
    router.push(`/${locale}/contacts`);
  };

  const goToPartnerProgram = () => {
    router.push(`/${locale}/partner-program`);
  };

  return (
    <footer className={`bg-black ${isMobile ? 'py-12' : 'py-16'}`}>
      <div className="container mx-auto">
        <div className={`flex ${isMobile ? 'flex-col gap-8' : 'flex-row justify-between gap-8 items-center'} mb-8`}>
          {/* Company Info */}
          <div>
            <Logo
              invert={true}
            />
            <p className="text-gray-400 text-xs mb-4 max-w-md">
              {t('companyDescription')}
            </p>

          </div>

          <div className="text-sm text-gray-400">
            <p><strong>{t('company')}:</strong> Gridix</p>
            <p><strong>{t('address')}:</strong> {t('addressValue')}</p>
            <p><strong>{t('email')}:</strong> inbox@gridix.live</p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4 text-white">{t('quickLinks')}</p>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={goToAdmin} className="hover:text-blue-400 transition-colors">{t('adminPanel')}</button></li>
              <li><button onClick={goToPricing} className="hover:text-blue-400 transition-colors">{t('pricing')}</button></li>
              <li><button onClick={goToPartnerProgram} className="hover:text-blue-400 transition-colors">{t('partnerProgram')}</button></li>
              <li><button onClick={goToContacts} className="hover:text-blue-400 transition-colors">{t('contacts')}</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className={`flex ${isMobile ? 'flex-col gap-4 text-center' : 'justify-between items-center'}`}>
            <p className="text-gray-400">
              © {new Date().getFullYear()} {t('copyright')}
            </p>
            <ul className="flex sm:gap-10 gap-2 text-gray-400 text-xs sm:justify-center sm:flex-row flex-col text-left">
              <li><button onClick={goToPrivacyPolicy} className="hover:text-blue-400 transition-colors">{t('privacyPolicy')}</button></li>
              <li><button onClick={goToTermsOfService} className="hover:text-blue-400 transition-colors">{t('termsOfService')}</button></li>
              <li><button onClick={goToRefundPolicy} className="hover:text-blue-400 transition-colors">{t('refundPolicy')}</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

