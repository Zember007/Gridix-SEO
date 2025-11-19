import type {MetadataRoute} from 'next';
import {locales} from '@/i18n/locales';

export default function sitemap(): MetadataRoute.Sitemap {
	const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
	const now = new Date();
	const paths = ['', '/pricing', '/contacts', '/refund-policy', '/privacy-policy', '/terms'];
	const entries: MetadataRoute.Sitemap = [];
	for (const locale of locales) {
		for (const p of paths) {
			entries.push({
				url: `${base}/${locale}${p}`,
				lastModified: now,
				changeFrequency: 'weekly',
				priority: p === '' ? 1 : 0.7
			});
		}
	}
	return entries;
}


