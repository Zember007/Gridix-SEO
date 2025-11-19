import { TrendingUp, Clock, DollarSign } from 'lucide-react';
import FeaturesCards, { type Feature } from "@/components/landing/feature-shader-cards";
import { useTranslations } from 'next-intl';


export const KeyMetrics = () => {
  const t = useTranslations('landing');
  
  const metrics: Feature[] = [
    {
      title: t('keyMetrics.leadCost.title'),
      icon: (
          <DollarSign className="w-8 h-8 text-white" />
      ),
      content: (
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{t('keyMetrics.leadCost.reduction')}</div>
          <div className="text-sm text-gray-300 mb-3">{t('keyMetrics.leadCost.reductionText')}</div>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700  rounded-full text-sm font-bold">
            {t('keyMetrics.leadCost.reason')}
          </div>
        </div>
      ),
      showLearnMore: false,
    },
    {
      title: t('keyMetrics.conversion.title'),
      icon: (
        <TrendingUp className="w-8 h-8 text-white" />
      ),
      content: (
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-400 line-through mb-1">{t('keyMetrics.conversion.old')}</div>
          <div className="text-5xl font-bold text-white mb-2">{t('keyMetrics.conversion.new')}</div>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700  rounded-full text-sm font-bold">
            {t('keyMetrics.conversion.increase')}
          </div>
        </div>
      ),
      showLearnMore: false,
    },
    {
      title: t('keyMetrics.processingSpeed.title'),
      icon: (
          <Clock className="w-8 h-8 text-white" />
      ),
      content: (
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{t('keyMetrics.processingSpeed.savings')}</div>
          <div className="text-sm text-gray-300 mb-3">{t('keyMetrics.processingSpeed.savingsText')}</div>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700  rounded-full text-sm font-bold">
            {t('keyMetrics.processingSpeed.reason')}
          </div>
        </div>
      ),
      showLearnMore: false,
    },
   
  ];

  return (
    <FeaturesCards
      title={t('keyMetrics.title')}
      description={t('keyMetrics.description')}
      features={metrics}
      className="bg-gray-50"
      cardHeight="h-80"
    />
  );
};


