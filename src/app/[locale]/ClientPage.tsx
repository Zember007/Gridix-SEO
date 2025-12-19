'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import HeroHeader from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { HeroSection } from '@/components/landing/hero-section';
import { KeyMetrics } from '@/components/landing/key-metrics';
import { Problems } from '@/components/landing/problems';
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

const Solution = dynamic(
    () => import('@/components/landing/solution').then((m) => m.Solution),
    { ssr: false }
);

interface LandingPageProps {
    locale: string;
}

const LandingPage = ({ locale }: LandingPageProps) => {
    const t = useTranslations('landing');
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    const language = locale;

    const openDemoModal = () => {
        setIsDemoModalOpen(true);
    };



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
                <div
                    className="w-full h-full">
                    <iframe
                        title="Gridix Demo"
                        id="gridix-widget"
                        src={`https://app.gridix.live/embed/project/85a56cab-d420-4d3e-aa37-2c21bce021a8?lang=${language}`}
                        width="100%"
                        height="100%"
                        loading="lazy"
                    />
                </div>
            </ContainerScroll>

            <GetStarted />

            <CaseStudy />

            <Testimonials />

            <CostComparison />

            <FAQ />

            <Footer />
        </main>
    );
};

export default LandingPage;