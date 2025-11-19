import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { X, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const t = useTranslations('landing');
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-hidden p-0 gap-0">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Text Content */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 text-white flex flex-col justify-center">
            <div className="mb-8">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-lg rounded-full text-sm font-semibold mb-6">
                {t('demoModal.badge')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {t('demoModal.title')}
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                {t('demoModal.description')}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{t('demoModal.benefits.personalDemo.title')}</p>
                  <p className="text-sm text-blue-100">{t('demoModal.benefits.personalDemo.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{t('demoModal.benefits.answers.title')}</p>
                  <p className="text-sm text-blue-100">{t('demoModal.benefits.answers.description')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{t('demoModal.benefits.help.title')}</p>
                  <p className="text-sm text-blue-100">{t('demoModal.benefits.help.description')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cal.com Widget */}
          <div className="bg-gray-50">
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Cal.com Embed */}
            <div className="h-full min-h-[500px]">
              <iframe
                src="https://cal.com/gridix/demo?embed=true&theme=light"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-xl"
                title={t('demoModal.calendarTitle')}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

