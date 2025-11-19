import { AnimatedTestimonials, type Testimonial } from "@/components/landing/animated-testimonials"
import { useTranslations } from 'next-intl';

export const Testimonials = () => {
  const t = useTranslations('landing');
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('testimonials.items.marketing.name'),
      role: t('testimonials.items.marketing.role'),
      company: t('testimonials.items.marketing.company'),
      content: t('testimonials.items.marketing.content'),
      rating: 5,
      avatar: "",
    },
    {
      id: 2,
      name: t('testimonials.items.salesManager.name'),
      role: t('testimonials.items.salesManager.role'),
      company: t('testimonials.items.salesManager.company'),
      content: t('testimonials.items.salesManager.content'),
      rating: 5,
      avatar: "",
    },
    {
      id: 3,
      name: t('testimonials.items.commercialDirector.name'),
      role: t('testimonials.items.commercialDirector.role'),
      company: t('testimonials.items.commercialDirector.company'),
      content: t('testimonials.items.commercialDirector.content'),
      rating: 5,
      avatar: "",
    },
  ]

  return (
    <AnimatedTestimonials
      title={t('testimonials.title')}
      subtitle={t('testimonials.subtitle')}
      badgeText={t('testimonials.badge')}
      testimonials={testimonials}
      autoRotateInterval={5000}
    />
  )
}

