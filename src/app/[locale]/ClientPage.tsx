'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroHeader from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { HeroSection } from '@/components/landing/hero-section';
import { KeyMetrics } from '@/components/landing/key-metrics';
import { Problems } from '@/components/landing/problems';
import { Solution } from '@/components/landing/solution';
import { WhyGridix } from '@/components/landing/why-gridix';
import { GetStarted } from '@/components/landing/get-started';
import { CaseStudy } from '@/components/landing/case-study';
import { Testimonials } from '@/components/landing/testimonials';
import { CostComparison } from '@/components/landing/cost-comparison';
import { FAQ } from '@/components/landing/faq';
import { DemoModal } from '@/components/landing/demo-modal';

const ExpandedDemo = dynamic(
    () => import('@/components/landing/expanded-demo').then((m) => m.ExpandedDemo),
    { ssr: false }
);

const ContainerScroll = dynamic(
    () => import('@/components/landing/container-scroll-animation').then((m) => m.ContainerScroll),
    { ssr: false }
);

interface LandingPageProps {
    locale: string;
}

const LandingPage = ({ locale }: LandingPageProps) => {
    const t = useTranslations('landing');
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const [isIframeVisible, setIsIframeVisible] = useState(false);
    const iframeContainerRef = useRef<HTMLDivElement | null>(null);
    const language = locale;

    const openDemoModal = () => {
        setIsDemoModalOpen(true);
    };

    useEffect(() => {
        if (!iframeContainerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIframeVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                root: null,
                rootMargin: '200px',
                threshold: 0.1,
            }
        );

        observer.observe(iframeContainerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <main className="min-h-screen">

            {/* Header */}
            <HeroHeader />

            <HeroSection
                title={t('hero.title')}
                description={t('hero.description')}
                onDemoClick={openDemoModal}
            />

            <DemoModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
            <KeyMetrics />
            <Problems />
            <Solution />
            <WhyGridix />


            <ExpandedDemo />

            <ContainerScroll

                titleComponent={
                    <>

                        <h2 className="text-4xl md:text-5xl font-light text-gray-900  mb-6">{t('howItLooks.title')}</h2>
                        <p className="text-xl text-gray-600  max-w-3xl mx-auto leading-relaxed ">
                            {t('howItLooks.subtitle')}
                        </p>
                    </>
                }
            >
                <div ref={iframeContainerRef} className="w-full h-full">
                    {isIframeVisible ? (
                        <iframe
                            title="Gridix Demo"
                            id="gridix-widget"
                            src={`https://app.gridix.live/embed/project/85a56cab-d420-4d3e-aa37-2c21bce021a8?lang=${language}`}
                            width="100%"
                            height="100%"
                            loading="lazy"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-500 text-sm">
                            Loading interactive demo…
                        </div>
                    )}
                </div>
            </ContainerScroll>

            <GetStarted />

            <CaseStudy />

            <Testimonials />

            <CostComparison  />

            <FAQ />

            <Footer />
        </main>
    );
};

export default LandingPage;