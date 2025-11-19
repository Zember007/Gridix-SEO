import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export const FAQ = () => {
  const t = useTranslations('landing');

  const faqGroups = [
    {
      title: t('faq.general.title'),
      items: [
        {
          id: 'general-1',
          question: t('faq.general.q1.question'),
          answer: t('faq.general.q1.answer'),
        },
        {
          id: 'general-2',
          question: t('faq.general.q2.question'),
          answer: t('faq.general.q2.answer'),
        },
        {
          id: 'general-3',
          question: t('faq.general.q3.question'),
          answer: t('faq.general.q3.answer'),
        },
        {
          id: 'general-4',
          question: t('faq.general.q4.question'),
          answer: t('faq.general.q4.answer'),
        },
      ],
    },
    {
      title: t('faq.technical.title'),
      items: [
        {
          id: 'tech-1',
          question: t('faq.technical.q1.question'),
          answer: t('faq.technical.q1.answer'),
        },
        {
          id: 'tech-2',
          question: t('faq.technical.q2.question'),
          answer: t('faq.technical.q2.answer'),
        },
        {
          id: 'tech-3',
          question: t('faq.technical.q3.question'),
          answer: t('faq.technical.q3.answer'),
        },
        {
          id: 'tech-4',
          question: t('faq.technical.q4.question'),
          answer: t('faq.technical.q4.answer'),
        },
      ],
    },
    {
      title: t('faq.payment.title'),
      items: [
        {
          id: 'payment-1',
          question: t('faq.payment.q1.question'),
          answer: t('faq.payment.q1.answer'),
        },
        {
          id: 'payment-2',
          question: t('faq.payment.q2.question'),
          answer: t('faq.payment.q2.answer'),
        },
        {
          id: 'payment-3',
          question: t('faq.payment.q3.question'),
          answer: t('faq.payment.q3.answer'),
        },
        {
          id: 'payment-4',
          question: t('faq.payment.q4.question'),
          answer: t('faq.payment.q4.answer'),
        },
        {
          id: 'payment-5',
          question: t('faq.payment.q5.question'),
          answer: t('faq.payment.q5.answer'),
        },
      ],
    },
  ]
  const locale = useLocale();

  

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {faqGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                {group.title}
              </h3>
              <Accordion
                type="single"
                collapsible
                className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4">
                {group.items.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-dashed">
                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-6 px-8">
          {(() => {
            const text = t('faq.supportLink');
            const parts = text.split('/');
            if (parts.length === 3) {
              const [before, linkText, afterLink] = parts;
          
              return (
                <>
                  {before}
                  <Link
                    href={`/${locale}/contacts`}
                    className="text-primary font-medium hover:underline">
                    {linkText}
                  </Link>
                  {afterLink || ''}
                </>
              );
            }
            return text;
          })()}
        </p>
      </div>
    </section>
  );
};


