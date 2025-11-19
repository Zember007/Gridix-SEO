'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Calendar, AlertCircle, CheckCircle, Mail, MapPin, Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function RefundPolicyClient() {
  const t = useTranslations('legal.refund');
  
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
                <CreditCard className="h-10 w-10 text-white" />
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
                  <CreditCard className="h-6 w-6 text-blue-600" />
                  {t('introduction.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('introduction.text')}</p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    <strong>{t('introduction.important')}</strong> {t('introduction.importantText')}
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

            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  {t('guarantee.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('guarantee.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('guarantee.item1')}</li>
                  <li>{t('guarantee.item2')}</li>
                  <li>{t('guarantee.item3')}</li>
                  <li>{t('guarantee.item4')}</li>
                  <li>{t('guarantee.item5')}</li>
                </ul>
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800">
                    <strong>{t('guarantee.note')}</strong> {t('guarantee.noteText')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  {t('eligibility.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-600">{t('eligibility.eligible.title')}</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{t('eligibility.eligible.item1')}</li>
                      <li>{t('eligibility.eligible.item2')}</li>
                      <li>{t('eligibility.eligible.item3')}</li>
                      <li>{t('eligibility.eligible.item4')}</li>
                      <li>{t('eligibility.eligible.item5')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-red-600">{t('eligibility.notEligible.title')}</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{t('eligibility.notEligible.item1')}</li>
                      <li>{t('eligibility.notEligible.item2')}</li>
                      <li>{t('eligibility.notEligible.item3')}</li>
                      <li>{t('eligibility.notEligible.item4')}</li>
                      <li>{t('eligibility.notEligible.item5')}</li>
                      <li>{t('eligibility.notEligible.item6')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('process.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('process.text')}</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('process.step1.title')}</h4>
                      <p>{t('process.step1.text')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('process.step2.title')}</h4>
                      <p>{t('process.step2.text')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('process.step3.title')}</h4>
                      <p>{t('process.step3.text')}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('process.step4.title')}</h4>
                      <p>{t('process.step4.text')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  {t('timeline.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('timeline.processing.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('timeline.processing.item1')}</li>
                      <li>{t('timeline.processing.item2')}</li>
                      <li>{t('timeline.processing.item3')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('timeline.receipt.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('timeline.receipt.item1')}</li>
                      <li>{t('timeline.receipt.item2')}</li>
                      <li>{t('timeline.receipt.item3')}</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-yellow-800">
                      <strong>{t('timeline.note')}</strong> {t('timeline.noteText')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('partialRefunds.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('partialRefunds.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('partialRefunds.item1')}</li>
                  <li>{t('partialRefunds.item2')}</li>
                  <li>{t('partialRefunds.item3')}</li>
                </ul>
                <p className="mt-4">{t('partialRefunds.calculation')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('cancellation.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('cancellation.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('cancellation.item1')}</li>
                  <li>{t('cancellation.item2')}</li>
                  <li>{t('cancellation.item3')}</li>
                  <li>{t('cancellation.item4')}</li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>{t('cancellation.howTo')}</strong> {t('cancellation.howToText')}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                  {t('specialCases.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('specialCases.technical.title')}</h4>
                    <p>{t('specialCases.technical.text')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('specialCases.forceMajeure.title')}</h4>
                    <p>{t('specialCases.forceMajeure.text')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('specialCases.functionality.title')}</h4>
                    <p>{t('specialCases.functionality.text')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('disputes.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('disputes.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('disputes.item1')}</li>
                  <li>{t('disputes.item2')}</li>
                  <li>{t('disputes.item3')}</li>
                  <li>{t('disputes.item4')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('changes.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('changes.text1')}</p>
                <p>{t('changes.text2')}</p>
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

