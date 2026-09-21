#!/usr/bin/env node

// Generates public/sitemap.xml from the single source of truth:
//   • static routes (declared below)
//   • catalogue categories (imported from src/data/catalogue.js — no duplication)
//   • live product slugs (fetched from the Hostinger store, paginated)
//
// Wired into `npm run build`. It is guarded with `|| true`, so a network
// failure never breaks the build — the last committed sitemap.xml is kept.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES } from '../src/data/catalogue.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://supremeacworks.com';
const API_URL = process.env.VITE_ECOMMERCE_API_URL || 'https://api-ecommerce.hostinger.com';
const STORE_ID = process.env.VITE_ECOMMERCE_STORE_ID || 'store_01M2TAZ71AKQRW8J22X1R66HR3';

// Static routes with their crawl hints. Category URLs are appended from CATEGORIES.
const STATIC_ROUTES = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/shop', changefreq: 'weekly', priority: '0.9' },
	{ path: '/categories', changefreq: 'weekly', priority: '0.8' },
	{ path: '/about', changefreq: 'monthly', priority: '0.6' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.7' },
	{ path: '/bulk-enquiry', changefreq: 'monthly', priority: '0.7' },
	{ path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
	{ path: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
	{ path: '/shipping-policy', changefreq: 'yearly', priority: '0.3' },
	{ path: '/return-refund-policy', changefreq: 'yearly', priority: '0.3' },
];

async function fetchAllProducts() {
	const pageSize = 100;
	const products = [];
	let offset = 0;
	let total = Infinity;

	while (offset < total) {
		const url = `${API_URL}/store/${STORE_ID}/products?limit=${pageSize}&offset=${offset}&exclude_types=subscription`;
		const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
		if (!res.ok) throw new Error(`HTTP ${res.status} fetching products`);
		const data = await res.json();
		const batch = data.products || [];
		products.push(...batch);
		total = data.count ?? products.length;
		offset += pageSize;
		if (batch.length < pageSize) break;
	}
	return products;
}

function productSlug(product) {
	return product.slug || product.seo_settings?.slug || product.id;
}

function urlEntry({ loc, changefreq, priority, lastmod }) {
	return [
		'\t<url>',
		`\t\t<loc>${loc}</loc>`,
		lastmod ? `\t\t<lastmod>${lastmod}</lastmod>` : null,
		changefreq ? `\t\t<changefreq>${changefreq}</changefreq>` : null,
		priority ? `\t\t<priority>${priority}</priority>` : null,
		'\t</url>',
	].filter(Boolean).join('\n');
}

async function main() {
	const today = new Date().toISOString().slice(0, 10);

	const staticEntries = STATIC_ROUTES.map((route) =>
		urlEntry({ loc: `${SITE_URL}${route.path}`, changefreq: route.changefreq, priority: route.priority, lastmod: today }),
	);

	const categoryEntries = CATEGORIES.map((category) =>
		urlEntry({ loc: `${SITE_URL}/category/${category.slug}`, changefreq: 'weekly', priority: '0.8', lastmod: today }),
	);

	let productEntries = [];
	try {
		const products = await fetchAllProducts();
		productEntries = products.map((product) =>
			urlEntry({ loc: `${SITE_URL}/product/${productSlug(product)}`, changefreq: 'weekly', priority: '0.7', lastmod: today }),
		);
		console.log(`[sitemap] ${products.length} product URLs added`);
	} catch (err) {
		console.warn('[sitemap] product fetch failed, writing pages only:', err.message);
	}

	const body = [...staticEntries, ...categoryEntries, ...productEntries].join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

	const outputPath = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
	fs.writeFileSync(outputPath, xml, 'utf8');
	console.log(`[sitemap] wrote ${outputPath}`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
	main().catch((err) => {
		console.error('[sitemap] generation failed:', err);
		process.exit(1);
	});
}

