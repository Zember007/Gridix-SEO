import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { X, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DemoModal = ({ open, onOpenChange }: DemoModalProps) => {
  const t = useTranslations('landing');
  
  useEffect(() => {
    if (!open) return;

    // Cal.com's official initialization function
    /* eslint-disable @typescript-eslint/no-explicit-any, prefer-rest-params */
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { 
        a.q.push(ar); 
      };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable @typescript-eslint/no-explicit-any, prefer-rest-params */

    // Initialize Cal with the namespace
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Cal = (window as any).Cal;
    Cal("init", "gridix-15min-demo", { origin: "https://app.cal.com" });

    Cal.ns["gridix-15min-demo"]("inline", {
      elementOrSelector: "#my-cal-inline-gridix-15min-demo",
      config: { layout: "month_view" },
      calLink: "klaster-digital/gridix-15min-demo",
    });

    Cal.ns["gridix-15min-demo"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, [open]);
  
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
              className="absolute top-4 right-4 w-10 h-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Cal.com Embed */}
            <div className="h-full max-h-[90vh]">
              <div 
                style={{width: '100%', height: '100%', overflow: 'auto'}} 
                id="my-cal-inline-gridix-15min-demo"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

