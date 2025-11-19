import { Zap, Sparkles, Settings, Shield } from 'lucide-react';
import FeaturesCards, { type Feature } from "@/components/landing/feature-shader-cards";
import { useTranslations } from 'next-intl';


export const WhyGridix = () => {
  const t = useTranslations('landing');
  
  const features: Feature[] = [
    {
      title: t('whyGridix.quickLaunch.title'),
      icon: (
          <Zap className="w-8 h-8 text-white" />
      ),
      content: (
        <ul className="space-y-3 text-sm text-gray-100">
          <li className="flex items-start gap-2">
            <span className="text-[#e98383] ">✓</span>
            <span>{t('whyGridix.quickLaunch.item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e98383] ">✓</span>
            <span>{t('whyGridix.quickLaunch.item2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e98383] ">✓</span>
            <span>{t('whyGridix.quickLaunch.item3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#e98383] ">✓</span>
            <span>{t('whyGridix.quickLaunch.item4')}</span>
          </li>
        </ul>
      ),
      showLearnMore: false,
    },
    {
      title: t('whyGridix.automation.title'),
      icon: (
          <Sparkles className="w-8 h-8 text-white" />
      ),
      content: (
        <ul className="space-y-3 text-sm text-gray-100">
          <li className="flex items-start gap-2">
            <span className="text-blue-400 ">✓</span>
            <span>{t('whyGridix.automation.item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 ">✓</span>
            <span>{t('whyGridix.automation.item2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 ">✓</span>
            <span>{t('whyGridix.automation.item3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400 ">✓</span>
            <span>{t('whyGridix.automation.item4')}</span>
          </li>
        </ul>
      ),
      showLearnMore: false,
    },
    {
      title: t('whyGridix.flexibility.title'),
      icon: (
          <Settings className="w-8 h-8 text-white" />
      ),
      content: (
        <ul className="space-y-3 text-sm text-gray-100">
          <li className="flex items-start gap-2">
            <span className="text-green-400 ">✓</span>
            <span>{t('whyGridix.flexibility.item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 ">✓</span>
            <span>{t('whyGridix.flexibility.item2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 ">✓</span>
            <span>{t('whyGridix.flexibility.item3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 ">✓</span>
            <span>{t('whyGridix.flexibility.item4')}</span>
          </li>
        </ul>
      ),
      showLearnMore: false,
    },
    {
      title: t('whyGridix.technology.title'),
      icon: (
          <Shield className="w-8 h-8 text-white" />
      ),
      content: (
        <ul className="space-y-3 text-sm text-gray-100">
          <li className="flex items-start gap-2">
            <span className="text-orange-400 ">✓</span>
            <span>{t('whyGridix.technology.item1')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 ">✓</span>
            <span>{t('whyGridix.technology.item2')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 ">✓</span>
            <span>{t('whyGridix.technology.item3')}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-400 ">✓</span>
            <span>{t('whyGridix.technology.item4')}</span>
          </li>
        </ul>
      ),
      showLearnMore: false,
    },
  ];

  return (
    <div id="why-gridix">
      <FeaturesCards
        title={t('whyGridix.title')}
        description={t('whyGridix.description')}
        features={features}
        className="bg-white"
        cardHeight="h-auto min-h-[350px]"
        gridCols="grid-cols-1 md:grid-cols-2"
      />
    </div>
  );
};


