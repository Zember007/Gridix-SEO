import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const HeroStats = () => {
  const t = useTranslations('landing');
  
  return (

    <div className="flex md:items-start items-center justify-center gap-6 text-sm text-gray-600 max-w-4xl md:flex-col">
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span>{t('heroStats.projectsLaunched')}</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span>{t('heroStats.conversionGrowth')}</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-green-500" />
        <span>{t('heroStats.countries')}</span>
      </div>
    </div>

  );
};


