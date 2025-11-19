'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import PricingCard, { PricingCardProps } from '@/components/pricing/PricingCard';
import InfoCard from '@/components/pricing/InfoCard';
import {
    MapIcon,
    BarChartSquareIcon,
    FileTextIcon,
    FilePdfIcon,
    LinkIconComponent,
    GlobeIcon,
    TrendingUpIcon,
    BuildingIcon,
    UploadCloudIcon,
    PenToolIcon,
    WrenchIcon,
    UsersIcon,
    PaletteIcon,
    CodeIcon,
    RocketIcon,
    HandshakeIcon,
    PiggyBankIcon,
    GiftIcon,
    ClockIcon,
    CreditCardIcon,
    BriefcaseIcon,
    LockIcon,
    SparklesIcon,
    CheckIcon,
    XCircleIcon,
} from '@/components/pricing/pricing-icons';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Glow } from '@/components/ui/glow';

// Hardcoded subscription plans data
interface SubscriptionPlan {
    id: string;
    name: string;
    slug: string;
    description: string;
    features: string[];
    pricing: {
        durationMonths: number;
        discountPercentage: number;
        monthlyPrice: number;
        totalPrice: number;
        savings: number;
    }[];
}

const HARDCODED_PLANS: SubscriptionPlan[] = [
    {
        "id": "df526be0-d27e-4d8b-864c-fec892da0027",
        "name": "Basic",
        "slug": "basic",
        "description": "Basic plan without CRM integration and custom domain",
        "features": [
            "Floor plan builder",
            "Basic templates",
            "Export to PDF",
            "Email support"
        ],
        "pricing": [
            {
                "durationMonths": 1,
                "discountPercentage": 0,
                "monthlyPrice": 129,
                "totalPrice": 129,
                "savings": 0
            },
            {
                "durationMonths": 3,
                "discountPercentage": 5,
                "monthlyPrice": 129,
                "totalPrice": 367.65,
                "savings": 19.350000000000023
            },
            {
                "durationMonths": 6,
                "discountPercentage": 10,
                "monthlyPrice": 129,
                "totalPrice": 696.5999999999999,
                "savings": 77.40000000000009
            },
            {
                "durationMonths": 12,
                "discountPercentage": 20,
                "monthlyPrice": 129,
                "totalPrice": 1238.4,
                "savings": 309.5999999999999
            }
        ]
    },
    {
        "id": "efeb19b9-a6ac-4acf-b9c1-6369166ea5be",
        "name": "Pro",
        "slug": "pro",
        "description": "Professional plan with CRM integration and custom domain",
        "features": [
            "All Basic features",
            "CRM integration",
            "Custom domain",
            "Advanced templates",
            "Priority support",
            "Analytics"
        ],
        "pricing": [
            {
                "durationMonths": 1,
                "discountPercentage": 0,
                "monthlyPrice": 189,
                "totalPrice": 189,
                "savings": 0
            },
            {
                "durationMonths": 3,
                "discountPercentage": 5,
                "monthlyPrice": 189,
                "totalPrice": 538.6500000000001,
                "savings": 28.34999999999991
            },
            {
                "durationMonths": 6,
                "discountPercentage": 10,
                "monthlyPrice": 189,
                "totalPrice": 1020.5999999999999,
                "savings": 113.40000000000009
            },
            {
                "durationMonths": 12,
                "discountPercentage": 20,
                "monthlyPrice": 189,
                "totalPrice": 1814.3999999999999,
                "savings": 453.60000000000014
            }
        ]
    }
];

// Feature mapping - maps feature keys to icons
const getFeatureMap = (): Record<string, { icon: React.ReactNode; textKey: string }> => ({
    'interactive_floor_plan': { icon: <MapIcon />, textKey: 'features.interactive_floor_plan' },
    'apartment_management': { icon: <BarChartSquareIcon />, textKey: 'features.apartment_management' },
    'lead_management': { icon: <FileTextIcon />, textKey: 'features.lead_management' },
    'pdf_presentations': { icon: <FilePdfIcon />, textKey: 'features.pdf_presentations' },
    'public_link': { icon: <LinkIconComponent />, textKey: 'features.public_link' },
    'widget_embedding': { icon: <GlobeIcon />, textKey: 'features.widget_embedding' },
    'analytics': { icon: <TrendingUpIcon />, textKey: 'features.analytics' },
    'project_types': { icon: <BuildingIcon />, textKey: 'features.project_types' },
    'bulk_import': { icon: <UploadCloudIcon />, textKey: 'features.bulk_import' },
    'gridix_label': { icon: <PenToolIcon />, textKey: 'features.gridix_label' },
    'support': { icon: <WrenchIcon />, textKey: 'features.support' },
    'team_management': { icon: <UsersIcon />, textKey: 'features.team_management' },
    'crm_integration': { icon: <LinkIconComponent />, textKey: 'features.crm_integration' },
    'custom_domain': { icon: <GlobeIcon />, textKey: 'features.custom_domain' },
    'branding': { icon: <PaletteIcon />, textKey: 'features.branding' },
    'api_access': { icon: <CodeIcon />, textKey: 'features.api_access' },
    'white_label': { icon: <HandshakeIcon />, textKey: 'features.white_label' },
    'priority_support': { icon: <RocketIcon />, textKey: 'features.priority_support' },
});

const getLimitationMap = (): Record<string, { icon: React.ReactNode; textKey: string }> => ({
    'no_crm': { icon: <XCircleIcon />, textKey: 'limitations.no_crm' },
    'no_custom_domain': { icon: <XCircleIcon />, textKey: 'limitations.no_custom_domain' },
    'no_branding': { icon: <XCircleIcon />, textKey: 'limitations.no_branding' },
    'no_team': { icon: <XCircleIcon />, textKey: 'limitations.no_team' },
});

export default function PricingClient() {
    const [selectedDuration, setSelectedDuration] = useState<number>(1);
    const [isInvoiceDialogOpen, setIsInvoiceDialogOpen] = useState(false);
    const [selectedPlanId, setSelectedPlanId] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    const t = useTranslations('pricing');

    const getDurationLabel = (months: number) => {
        const key = `duration.${months}`;
        if (t(key) !== key) {
            return t(key);
        }
        return `${months} ${t('duration.months')}`;
    };

    const handlePlanSelect = (planId: string, durationMonths: number) => {
        setSelectedPlanId(planId);
        setSelectedDuration(durationMonths);
        setIsInvoiceDialogOpen(true);
    };

    const handleRequestInvoice = async () => {
        if (!selectedPlanId) {
            console.error('Please select a plan');
            return;
        }

        setIsProcessing(true);
        try {
            console.log('Requesting invoice for plan:', selectedPlanId, 'duration:', selectedDuration);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsInvoiceDialogOpen(false);
        } catch (error) {
            console.error('Error requesting invoice:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const convertPlanToCardProps = (plan: SubscriptionPlan, durationMonths: number): PricingCardProps | null => {
        const selectedPricing = plan.pricing.find(p => p.durationMonths === durationMonths);
        if (!selectedPricing) return null;

        const featureMap = getFeatureMap();
        const limitationMap = getLimitationMap();
        const features: { icon: React.ReactNode; text: string }[] = [];
        const limitations: { icon: React.ReactNode; text: string }[] = [];

        if (Array.isArray(plan.features)) {
            plan.features.forEach((feature: string) => {
                const mapped = featureMap[feature];
                if (mapped) {
                    features.push({ icon: mapped.icon, text: t(mapped.textKey) });
                } else {
                    features.push({ icon: <CheckIcon className="text-black" />, text: feature });
                }
            });
        }

        if (plan.slug === 'basic') {
            const noCrm = limitationMap['no_crm'];
            const noCustomDomain = limitationMap['no_custom_domain'];
            const noBranding = limitationMap['no_branding'];
            const noTeam = limitationMap['no_team'];

            if (noCrm) limitations.push({ icon: noCrm.icon, text: t(noCrm.textKey) });
            if (noCustomDomain) limitations.push({ icon: noCustomDomain.icon, text: t(noCustomDomain.textKey) });
            if (noBranding) limitations.push({ icon: noBranding.icon, text: t(noBranding.textKey) });
            if (noTeam) limitations.push({ icon: noTeam.icon, text: t(noTeam.textKey) });
        }

        if (plan.slug === 'pro' && features.length > 0 && features[0] && !features[0].text.includes(t('allFromBasic'))) {
            features.unshift({ icon: <CheckIcon className="text-black" />, text: t('allFromBasic') });
        }

        const price = `$${selectedPricing.monthlyPrice.toFixed(0)}`;
        const pricePeriod = t('pricePeriod');
        const isFeatured = plan.slug === 'pro';

        let suitability = '';
        if (plan.slug === 'basic') {
            suitability = t('suitability.basic');
        } else if (plan.slug === 'pro') {
            suitability = t('suitability.pro');
        }

        const ctaText = isFeatured ? t('cta.pro') : t('cta.basic');

        return {
            title: plan.name.toUpperCase(),
            price,
            pricePeriod,
            description: plan.description || '',
            features,
            limitations,
            suitability,
            ctaText,
            isFeatured,
            disabled: false,
            includedLabel: t('included'),
            limitationsLabel: t('limitationsLabel'),
        };
    };

    const availableDurations = HARDCODED_PLANS[0]?.pricing || [];
    const basicPlan = HARDCODED_PLANS.find(p => p.slug === 'basic');
    const proPlan = HARDCODED_PLANS.find(p => p.slug === 'pro');

    const basicCardProps = basicPlan ? convertPlanToCardProps(basicPlan, selectedDuration) : null;
    const proCardProps = proPlan ? convertPlanToCardProps(proPlan, selectedDuration) : null;

    const discountInfo = availableDurations
        .filter(p => p.durationMonths > 1)
        .map(p => ({
            months: p.durationMonths,
            discount: p.discountPercentage,
            label: getDurationLabel(p.durationMonths),
        }))
        .sort((a, b) => a.months - b.months);

    return (
        <main className="container mx-auto py-20 md:py-32 relative">
            {/* Header */}
            <div className="text-center mb-12 md:mb-20">
                <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl">
                    {t('title')}
                </h1>

                <p className="text-md relative z-10 animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
                    {t('subtitle')}
                </p>
            </div>
            <Glow
                variant="above"
                className="animate-appear-zoom opacity-0 delay-1000"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {basicCardProps && <PricingCard {...basicCardProps} />}
                {proCardProps && <PricingCard {...proCardProps} />}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InfoCard icon={<PiggyBankIcon />} title={t('infoCards.discounts.title')}>
                    <p className="font-semibold text-gray-800">{t('infoCards.discounts.description')}</p>
                    <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                        {discountInfo.map((info) => (
                            <React.Fragment key={info.months}>
                                <span className="text-black font-mono text-sm">{info.discount}%</span> {info.label}
                            </React.Fragment>
                        ))}
                    </div>
                    <p className="text-sm mt-2">{t('infoCards.discounts.paymentNote')}</p>
                </InfoCard>

                <InfoCard icon={<GiftIcon />} title={t('infoCards.trial.title')}>
                    <ul className="list-inside space-y-2">
                        <li className="flex items-center gap-3"><ClockIcon /> {t('infoCards.trial.item1')}</li>
                        <li className="flex items-center gap-3"><CreditCardIcon /> {t('infoCards.trial.item2')}</li>
                        <li className="flex items-center gap-3"><SparklesIcon /> {t('infoCards.trial.item3')}</li>
                    </ul>
                </InfoCard>

                <InfoCard icon={<CreditCardIcon />} title={t('infoCards.payment.title')}>
                    <ul className="list-inside space-y-2">
                        <li className="flex items-center gap-3"><CreditCardIcon /> {t('infoCards.payment.item1')}</li>
                        <li className="flex items-center gap-3"><BriefcaseIcon /> {t('infoCards.payment.item2')}</li>
                        <li className="flex items-center gap-3"><LockIcon /> {t('infoCards.payment.item3')}</li>
                    </ul>
                </InfoCard>
            </div>

            {/* Invoice Request Dialog */}
            <Dialog open={isInvoiceDialogOpen} onOpenChange={setIsInvoiceDialogOpen}>
                <DialogContent className="bg-white border-gray-200 text-gray-900">
                    <DialogHeader>
                        <DialogTitle className="text-gray-900">{t('dialog.title')}</DialogTitle>
                        <DialogDescription className="text-gray-600">
                            {t('dialog.description')}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm font-medium text-gray-700">
                                {t('dialog.selectedProject')} {HARDCODED_PLANS.find(p => p.id === selectedPlanId)?.name || t('dialog.selectedProjectDefault')}
                            </p>
                        </div>

                        <Button
                            onClick={handleRequestInvoice}
                            disabled={isProcessing || !selectedPlanId}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            {isProcessing && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />}
                            {t('dialog.requestButton')}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    );
}

