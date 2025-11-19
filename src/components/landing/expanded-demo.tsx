import { VideoPlayer } from './video-player';
import { Timeline } from '../ui/timeline';
import { useTranslations } from 'next-intl';

export const ExpandedDemo = () => {
  const t = useTranslations('landing');
  
  return (
    <Timeline
        title={
          <>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">{t('expandedDemo.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('expandedDemo.subtitle')}
            </p>
          </>
        }
        data={[
          {
            title: t('expandedDemo.widget.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.widget.description')}
                </p>
                <VideoPlayer
                  src={'/video/widget.mp4'}
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          },
          {
            title: t('expandedDemo.excelImport.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.excelImport.description')}
                </p>
                <VideoPlayer
                  src={'/video/import.mp4'}
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          },
          {
            title: t('expandedDemo.crmIntegration.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.crmIntegration.description')}
                </p>
                <VideoPlayer
                  src={'/video/crm.mp4'}
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          },
          {
            title: t('expandedDemo.dataUpdate.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.dataUpdate.description')}
                </p>
                <VideoPlayer
                  src={'/video/change_status.mp4'}
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          },
          {
            title: t('expandedDemo.analytics.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.analytics.description')}
                </p>
                <VideoPlayer
                  src={'/video/analytics.mp4'}
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          },
          {
            title: t('expandedDemo.teamManagement.title'),
            content: (
              <div>
                <p className="text-neutral-800">
                  {t('expandedDemo.teamManagement.description')}
                </p>
                <VideoPlayer
                  src="/video/managers.mp4"
                  className="rounded-lg object-cover h-auto w-full bg-neutral-200"
                />
              </div>
            ),
          }
        ]}
      />
  );
};

