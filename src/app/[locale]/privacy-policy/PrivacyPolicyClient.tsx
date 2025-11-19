'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Mail, MapPin, Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export default function PrivacyPolicyClient() {
  const t = useTranslations('legal.privacy');
  
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
                <Shield className="h-10 w-10 text-white" />
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
                  <Eye className="h-6 w-6 text-blue-600" />
                  {t('introduction.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('introduction.text1')}</p>
                <p>{t('introduction.text2')}</p>
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
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="h-6 w-6 text-blue-600" />
                  {t('dataCollection.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('dataCollection.personal.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('dataCollection.personal.item1')}</li>
                      <li>{t('dataCollection.personal.item2')}</li>
                      <li>{t('dataCollection.personal.item3')}</li>
                      <li>{t('dataCollection.personal.item4')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('dataCollection.technical.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('dataCollection.technical.item1')}</li>
                      <li>{t('dataCollection.technical.item2')}</li>
                      <li>{t('dataCollection.technical.item3')}</li>
                      <li>{t('dataCollection.technical.item4')}</li>
                      <li>{t('dataCollection.technical.item5')}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{t('dataCollection.content.title')}</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>{t('dataCollection.content.item1')}</li>
                      <li>{t('dataCollection.content.item2')}</li>
                      <li>{t('dataCollection.content.item3')}</li>
                      <li>{t('dataCollection.content.item4')}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="h-6 w-6 text-blue-600" />
                  {t('dataUsage.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('dataUsage.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('dataUsage.item1')}</li>
                  <li>{t('dataUsage.item2')}</li>
                  <li>{t('dataUsage.item3')}</li>
                  <li>{t('dataUsage.item4')}</li>
                  <li>{t('dataUsage.item5')}</li>
                  <li>{t('dataUsage.item6')}</li>
                  <li>{t('dataUsage.item7')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('dataSharing.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('dataSharing.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('dataSharing.item1')}</li>
                  <li>{t('dataSharing.item2')}</li>
                  <li>{t('dataSharing.item3')}</li>
                  <li>{t('dataSharing.item4')}</li>
                  <li>{t('dataSharing.item5')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6 text-blue-600" />
                  {t('dataSecurity.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('dataSecurity.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('dataSecurity.item1')}</li>
                  <li>{t('dataSecurity.item2')}</li>
                  <li>{t('dataSecurity.item3')}</li>
                  <li>{t('dataSecurity.item4')}</li>
                  <li>{t('dataSecurity.item5')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('userRights.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('userRights.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t('userRights.access')}</strong> {t('userRights.accessDesc')}</li>
                  <li><strong>{t('userRights.rectification')}</strong> {t('userRights.rectificationDesc')}</li>
                  <li><strong>{t('userRights.erasure')}</strong> {t('userRights.erasureDesc')}</li>
                  <li><strong>{t('userRights.restriction')}</strong> {t('userRights.restrictionDesc')}</li>
                  <li><strong>{t('userRights.portability')}</strong> {t('userRights.portabilityDesc')}</li>
                  <li><strong>{t('userRights.objection')}</strong> {t('userRights.objectionDesc')}</li>
                </ul>
                <p className="mt-4">{t('userRights.contact')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('cookies.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('cookies.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t('cookies.necessary')}</strong> {t('cookies.necessaryDesc')}</li>
                  <li><strong>{t('cookies.functional')}</strong> {t('cookies.functionalDesc')}</li>
                  <li><strong>{t('cookies.analytical')}</strong> {t('cookies.analyticalDesc')}</li>
                </ul>
                <p className="mt-4">{t('cookies.manage')}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('dataRetention.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p className="mb-4">{t('dataRetention.text')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('dataRetention.account')}</li>
                  <li>{t('dataRetention.projects')}</li>
                  <li>{t('dataRetention.logs')}</li>
                  <li>{t('dataRetention.support')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{t('changes.title')}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed">
                <p>{t('changes.text')}</p>
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
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

