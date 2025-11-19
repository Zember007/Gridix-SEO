'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, AlertTriangle, CreditCard, Gavel, Mail, MapPin, Building2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function TermsOfServiceClient() {
  const t = useTranslations('legal.terms');
  const locale = useLocale();
  
  const currentDate = new Date().toLocaleDateString(undefined, { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <Header />

      <main className="container mx-auto py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                <FileText className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('lastUpdated')} {currentDate}
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="h-6 w-6 text-blue-600" />
                  {t('general.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('general.text1')}</p>
                <p className="mb-4">{t('general.text2')}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    <strong>{t('general.important')}</strong> {t('general.importantText')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Building2 className="h-6 w-6 text-blue-600" />
                  {t('companyInfo.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-5 w-5 text-gray-500" />
                    <span><strong>{t('companyInfo.name')}</strong> {t('companyInfo.nameValue')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span><strong>{t('companyInfo.address')}</strong> {t('companyInfo.addressValue')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span><strong>{t('companyInfo.email')}</strong> {t('companyInfo.emailValue')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('serviceDescription.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('serviceDescription.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('serviceDescription.item1')}</li>
                  <li>{t('serviceDescription.item2')}</li>
                  <li>{t('serviceDescription.item3')}</li>
                  <li>{t('serviceDescription.item4')}</li>
                  <li>{t('serviceDescription.item5')}</li>
                  <li>{t('serviceDescription.item6')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-blue-600" />
                  {t('userAccounts.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('userAccounts.registration.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('userAccounts.registration.item1')}</li>
                      <li>{t('userAccounts.registration.item2')}</li>
                      <li>{t('userAccounts.registration.item3')}</li>
                      <li>{t('userAccounts.registration.item4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('userAccounts.requirements.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('userAccounts.requirements.item1')}</li>
                      <li>{t('userAccounts.requirements.item2')}</li>
                      <li>{t('userAccounts.requirements.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('userObligations.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('userObligations.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('userObligations.item1')}</li>
                  <li>{t('userObligations.item2')}</li>
                  <li>{t('userObligations.item3')}</li>
                  <li>{t('userObligations.item4')}</li>
                  <li>{t('userObligations.item5')}</li>
                  <li>{t('userObligations.item6')}</li>
                  <li>{t('userObligations.item7')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  {t('prohibitedUses.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <p className="text-red-800 font-semibold mb-2">{t('prohibitedUses.warning')}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('prohibitedUses.item1')}</li>
                  <li>{t('prohibitedUses.item2')}</li>
                  <li>{t('prohibitedUses.item3')}</li>
                  <li>{t('prohibitedUses.item4')}</li>
                  <li>{t('prohibitedUses.item5')}</li>
                  <li>{t('prohibitedUses.item6')}</li>
                  <li>{t('prohibitedUses.item7')}</li>
                  <li>{t('prohibitedUses.item8')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('intellectualProperty.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('intellectualProperty.companyRights.title')}</h4>
                    <p className="mb-2">{t('intellectualProperty.companyRights.text')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('intellectualProperty.userRights.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('intellectualProperty.userRights.item1')}</li>
                      <li>{t('intellectualProperty.userRights.item2')}</li>
                      <li>{t('intellectualProperty.userRights.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  {t('paymentTerms.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('paymentTerms.pricing.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('paymentTerms.pricing.item1')}</li>
                      <li>{t('paymentTerms.pricing.item2')}</li>
                      <li>{t('paymentTerms.pricing.item3')}</li>
                      <li>{t('paymentTerms.pricing.item4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('paymentTerms.refunds.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('paymentTerms.refunds.item1')}</li>
                      <li>{t('paymentTerms.refunds.item2')}</li>
                      <li>{t('paymentTerms.refunds.item3')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('paymentTerms.suspension.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('paymentTerms.suspension.item1')}</li>
                      <li>{t('paymentTerms.suspension.item2')}</li>
                      <li>{t('paymentTerms.suspension.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Gavel className="h-6 w-6 text-blue-600" />
                  {t('liability.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('liability.limitation.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('liability.limitation.item1')}</li>
                      <li>{t('liability.limitation.item2')}</li>
                      <li>{t('liability.limitation.item3')}</li>
                      <li>{t('liability.limitation.item4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('liability.userLiability.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('liability.userLiability.item1')}</li>
                      <li>{t('liability.userLiability.item2')}</li>
                      <li>{t('liability.userLiability.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('dataProcessing.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  {t('dataProcessing.text')} {' '}
                  <Link href={`/${locale}/privacy-policy`} className="text-blue-600 hover:underline">
                    {t('dataProcessing.linkText')}
                  </Link>.
                </p>
                <p className="mb-4">{t('dataProcessing.principles')}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t('dataProcessing.item1')}</li>
                  <li>{t('dataProcessing.item2')}</li>
                  <li>{t('dataProcessing.item3')}</li>
                  <li>{t('dataProcessing.item4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('termination.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('termination.byUser.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('termination.byUser.item1')}</li>
                      <li>{t('termination.byUser.item2')}</li>
                      <li>{t('termination.byUser.item3')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('termination.byCompany.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('termination.byCompany.item1')}</li>
                      <li>{t('termination.byCompany.item2')}</li>
                      <li>{t('termination.byCompany.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('changes.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('changes.text')}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>{t('changes.item1')}</li>
                  <li>{t('changes.item2')}</li>
                  <li>{t('changes.item3')}</li>
                </ul>
                <p className="mt-4">{t('changes.continuation')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('applicableLaw.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('applicableLaw.law.title')}</h4>
                    <p>{t('applicableLaw.law.text')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('applicableLaw.disputes.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('applicableLaw.disputes.item1')}</li>
                      <li>{t('applicableLaw.disputes.item2')}</li>
                      <li>{t('applicableLaw.disputes.item3')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Mail className="h-6 w-6 text-blue-600" />
                  {t('contact.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">{t('contact.text')}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>{t('contact.email')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>{t('contact.address')}</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>{t('contact.responseTime')}</strong> {t('contact.responseTimeText')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

