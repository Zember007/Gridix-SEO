'use client';

import { useState } from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export function IncomeCalculator() {
  const [projectCount, setProjectCount] = useState(5);
  const t = useTranslations('partnerProgram');
  const locale = useLocale();
  const router = useRouter();

  // Average annual subscription price
  const ANNUAL_PRICE = 1815;

  // Calculate income for all tiers
  const basicIncome = projectCount * ANNUAL_PRICE * 0.2;
  const integratorIncome = projectCount < 10 ? projectCount * ANNUAL_PRICE * 0.4 : 0;
  const ambassadorIncome = projectCount >= 10 ? projectCount * ANNUAL_PRICE * 0.5 : 0;

  // Determine current income
  const currentIncome = projectCount >= 10 ? ambassadorIncome : integratorIncome;

  // Get plural forms for projects
  const getProjectPlural = (count: number) => {
    if (count === 1) return t('calculator.projectSingular');
    if (count < 5) return t('calculator.projectPluralFew');
    return t('calculator.projectPluralMany');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('calculator.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('calculator.title')}
          </h2>
          <p className="text-lg text-foreground/60">
            {t('calculator.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="rounded-xl border border-border bg-background p-8 flex flex-col justify-center">
            <label className="block mb-6">
              <span className="text-sm font-semibold text-foreground mb-3 block">
                {t('calculator.projectsLabel')}
              </span>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={projectCount}
                  onChange={(e) => setProjectCount(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <span className="text-2xl font-bold text-primary w-12 text-right">
                  {projectCount}
                </span>
              </div>
            </label>

            <div className="mt-8 p-4 rounded-lg bg-secondary/50 border border-border">
              <p className="text-sm text-foreground/60 mb-2">{t('calculator.statusLabel')}</p>
              <p className="text-xl font-bold text-foreground">
                {projectCount < 5 ? (
                  t('calculator.tierBasic')
                ) : projectCount < 10 && projectCount >= 5 ? (
                  t('calculator.tierIntegrator')
                ) : (
                  t('calculator.tierAmbassador')
                )}
              </p>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
              <p className="text-sm text-foreground/60 mb-2">{t('calculator.commissionLabel')}</p>
              <p className="text-2xl font-bold text-primary">
                {projectCount < 5 ? "20%" : projectCount < 10 && projectCount >= 5 ? "40%" : "50%"}
              </p>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-4">
            {/* Current Tier Income */}
            <div className="rounded-xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <p className="text-sm font-semibold text-primary mb-2">{t('calculator.yearlyIncome')}</p>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-1">
                ${currentIncome.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="text-sm text-foreground/60">
                {t('calculator.fromProjects', { count: projectCount, projects: getProjectPlural(projectCount) })}
              </p>
            </div>

            {/* Tier Comparison */}
            <div className="space-y-3">
              {/* Basic */}
              <div className={`rounded-lg border-2 p-4 transition-all ${projectCount < 5
                ? "border-primary bg-primary/5"
                : "border-border bg-background hover:border-primary/30"
                }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground text-sm">{t('calculator.tierBasic')}</p>
                      {projectCount < 5 && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                          {t('calculator.youAreHere')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-foreground/60">
                      {projectCount} {getProjectPlural(projectCount)} • {t('calculator.commission20')}
                    </p>
                  </div>
                  <p className={`text-lg font-bold ${projectCount < 5 ? "text-primary" : "text-foreground/60"}`}>
                    ${basicIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>

              {/* Integrator */}
              <div className={`rounded-lg border-2 p-4 transition-all ${projectCount < 10 && projectCount >= 5
                ? "border-primary bg-primary/5"
                : "border-border bg-background hover:border-primary/30"
                }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground text-sm">{t('calculator.tierIntegrator')}</p>
                      {projectCount < 10 && projectCount >= 5 && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                          {t('calculator.youAreHere')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-foreground/60">{t('calculator.integratorDesc')}</p>
                  </div>
                  <p className={`text-lg font-bold ${projectCount < 10 && projectCount >= 5 ? "text-primary" : "text-foreground/60"}`}>
                    ${integratorIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>

              {/* Ambassador */}
              <div className={`rounded-lg border-2 p-4 transition-all ${projectCount >= 10
                ? "border-primary bg-primary/5"
                : "border-border bg-background hover:border-primary/30"
                }`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground text-sm">{t('calculator.tierAmbassador')}</p>
                      {projectCount >= 10 && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                          {t('calculator.youAreHere')}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-foreground/60">{t('calculator.ambassadorDesc')}</p>
                  </div>
                  <p className={`text-lg font-bold ${projectCount >= 10 ? "text-primary" : "text-foreground/60"}`}>
                    ${ambassadorIncome.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-12 p-6 rounded-xl border border-border bg-secondary/30">
          <p className="text-sm text-foreground/60 text-center">
            {t('calculator.infoNote', { price: ANNUAL_PRICE })}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://app.gridix.live/${locale}/`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t('calculator.ctaButton')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

