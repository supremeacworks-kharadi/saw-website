#!/usr/bin/env node

// Post-build SEO prerender (hybrid SSG).
//
// The site ships as a client-rendered SPA. Crawlers (and social/preview bots
// that don't run JS) otherwise see the same generic index.html for every URL.
// This step writes a real static HTML file per route with baked, per-URL SEO:
//   • <title>, <meta name="description">, <link rel="canonical">
//   • Open Graph + Twitter tags
//   • JSON-LD (Product schema for product pages)
//   • a <noscript> content fallback (heading + description + image)
//
// Deliberately hybrid: only STABLE fields are baked. Volatile data (price,
// stock, cart) stays client-fetched, so nothing goes stale between builds and
// there is no hydration mismatch — the SPA still boots and refreshes everything.
//
// Wired into `npm run build` after `vite build`, guarded with `|| true`, so an
// API outage never breaks the build (pages just fall back to generic meta).

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES, IMAGES } from '../src/data/catalogue.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://supremeacworks.com';
const SITE_NAME = 'Supreme AC Works';
const DEFAULT_OG_IMAGE = `${SITE_URL}/branding/logo-full-v2.png`;
const API_URL = process.env.VITE_ECOMMERCE_API_URL || 'https://api-ecommerce.hostinger.com';
const STORE_ID = process.env.VITE_ECOMMERCE_STORE_ID || 'store_01M2TAZ71AKQRW8J22X1R66HR3';

const DIST_DIR = path.resolve(__dirname, '../../../dist/apps/web');

// Stable SEO for the fixed pages. Kept here (not in the page files) because the
// page components author their own client-side <Helmet>; this map is the
// build-time source for the prerendered HTML.
const STATIC_PAGES = {
	'/': {
		title: 'Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials',
		description: 'Supreme AC Works supplies AC spare parts, refrigerant gases, copper pipes, HVAC installation materials and AC tools to technicians, contractors and dealers across India.',
	},
	'/shop': {
		title: 'Shop AC Spare Parts & HVAC Materials — Supreme AC Works',
		description: 'Browse AC spare parts, refrigerant gases, copper pipes, compressors, motors, insulation and tools. Best prices for technicians, contractors and dealers.',
	},
	'/categories': {
		title: 'Product Categories — Supreme AC Works',
		description: 'Explore AC spare parts and HVAC materials by category: refrigerants, copper pipes, compressors, motors, insulation, electrical, PCB and tools.',
	},
	'/about': {
		title: 'About Us — Supreme AC Works',
		description: 'Supreme AC Works is a trusted supplier of AC spare parts, refrigerants and HVAC materials to technicians, contractors and dealers across India.',
	},
	'/contact': {
		title: 'Contact Us — Supreme AC Works',
		description: 'Get in touch with Supreme AC Works for AC spare parts, refrigerants and HVAC materials. Call, WhatsApp or visit our shops in Pune.',
	},
	'/bulk-enquiry': {
		title: 'Bulk & Wholesale Enquiry — Supreme AC Works',
		description: 'Request bulk and wholesale pricing on AC spare parts, refrigerants, copper pipes and HVAC materials for your business.',
	},
	'/privacy-policy': {
		title: 'Privacy Policy — Supreme AC Works',
		description: 'How Supreme AC Works collects, uses and protects your information.',
	},
	'/terms-and-conditions': {
		title: 'Terms & Conditions — Supreme AC Works',
		description: 'The terms and conditions governing the use of the Supreme AC Works website and services.',
	},
	'/shipping-policy': {
		title: 'Shipping Policy — Supreme AC Works',
		description: 'Shipping, dispatch and delivery information for orders from Supreme AC Works.',
	},
	'/return-refund-policy': {
		title: 'Return & Refund Policy — Supreme AC Works',
		description: 'Our return and refund policy for AC spare parts and HVAC materials.',
	},
};

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

function escapeHtml(value) {
	return String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

// Turn an HTML product description into a plain-text, length-capped meta string.
function toMetaDescription(html, fallback) {
	const text = String(html ?? '')
		.replace(/<[^>]*>/g, ' ')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	const chosen = text || fallback || '';
	return chosen.length > 160 ? `${chosen.slice(0, 157).trimEnd()}…` : chosen;
}

/**
 * Rewrite the built index.html for one route: swap the head SEO tags, add a
 * canonical link, optional JSON-LD, and a <noscript> content fallback.
 */
function renderRouteHtml(template, { canonical, title, description, image, type = 'website', jsonLd, noscript, preloadImage }) {
	let html = template;
	const safeTitle = escapeHtml(title);
	const safeDesc = escapeHtml(description);
	const safeImage = escapeHtml(image || DEFAULT_OG_IMAGE);

	// <title>
	html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);

	// Replace the content of known meta/og/twitter tags.
	const setMetaName = (name, content) => {
		const re = new RegExp(`(<meta\\s+name="${name}"\\s+content=")[^"]*(")`);
		if (re.test(html)) html = html.replace(re, `$1${content}$2`);
	};
	const setMetaProp = (prop, content) => {
		const re = new RegExp(`(<meta\\s+property="${prop}"\\s+content=")[^"]*(")`);
		if (re.test(html)) html = html.replace(re, `$1${content}$2`);
	};

	setMetaName('description', safeDesc);
	setMetaProp('og:type', escapeHtml(type));
	setMetaProp('og:title', safeTitle);
	setMetaProp('og:description', safeDesc);
	setMetaProp('og:url', escapeHtml(canonical));
	setMetaProp('og:image', safeImage);
	setMetaName('twitter:title', safeTitle);
	setMetaName('twitter:description', safeDesc);
	setMetaName('twitter:image', safeImage);

	// Inject a canonical link (none in the template) right before </head>.
	const headInjections = [`\t\t<link rel="canonical" href="${escapeHtml(canonical)}" />`];
	// Preload the page's LCP image so the browser discovers it from the HTML
	// immediately, instead of waiting for the JS bundle to render it.
	if (preloadImage) {
		headInjections.push(
			`\t\t<link rel="preload" as="image" href="${escapeHtml(preloadImage)}" fetchpriority="high" />`,
		);
	}
	if (jsonLd) {
		headInjections.push(
			`\t\t<script type="application/ld+json">\n${JSON.stringify(jsonLd)}\n\t\t</script>`,
		);
	}
	html = html.replace('</head>', `${headInjections.join('\n')}\n\t</head>`);

	// Inject a no-JS content fallback just after the app root (React never
	// touches nodes outside #root, and <noscript> is inert for JS visitors).
	if (noscript) {
		html = html.replace(
			'<div id="root"></div>',
			`<div id="root"></div>\n\t\t<noscript>\n${noscript}\n\t\t</noscript>`,
		);
	}

	return html;
}

function writeRouteFile(routePath, html) {
	// '/' -> index.html; '/shop' -> shop.html; '/product/x' -> product/x.html
	const relative = routePath === '/' ? 'index.html' : `${routePath.replace(/^\//, '')}.html`;
	const outPath = path.join(DIST_DIR, relative);
	fs.mkdirSync(path.dirname(outPath), { recursive: true });
	fs.writeFileSync(outPath, html, 'utf8');
	return relative;
}

async function main() {
	const templatePath = path.join(DIST_DIR, 'index.html');
	if (!fs.existsSync(templatePath)) {
		console.warn('[prerender] dist index.html not found — run vite build first. Skipping.');
		return;
	}
	const template = fs.readFileSync(templatePath, 'utf8');
	let written = 0;

	// 1) Static pages
	for (const [routePath, meta] of Object.entries(STATIC_PAGES)) {
		const canonical = `${SITE_URL}${routePath}`;
		const html = renderRouteHtml(template, {
			canonical,
			title: meta.title,
			description: meta.description,
			image: DEFAULT_OG_IMAGE,
			// The home hero is the LCP element — preload it so it paints fast.
			preloadImage: routePath === '/' ? IMAGES.hero : undefined,
			noscript: `\t\t\t<h1>${escapeHtml(meta.title)}</h1>\n\t\t\t<p>${escapeHtml(meta.description)}</p>`,
		});
		writeRouteFile(routePath, html);
		written += 1;
	}

	// 2) Category pages (from the catalogue single source of truth)
	for (const category of CATEGORIES) {
		const routePath = `/category/${category.slug}`;
		const canonical = `${SITE_URL}${routePath}`;
		const title = `${category.name} — ${SITE_NAME}`;
		const description = category.tagline || `Shop ${category.name} at ${SITE_NAME}.`;
		const html = renderRouteHtml(template, {
			canonical,
			title,
			description,
			image: category.image || DEFAULT_OG_IMAGE,
			noscript: `\t\t\t<h1>${escapeHtml(category.name)}</h1>\n\t\t\t<p>${escapeHtml(description)}</p>`,
		});
		writeRouteFile(routePath, html);
		written += 1;
	}

	// 3) Product pages (stable fields only — no price, to stay fresh)
	try {
		const products = await fetchAllProducts();
		for (const product of products) {
			const slug = productSlug(product);
			const routePath = `/product/${slug}`;
			const canonical = `${SITE_URL}${routePath}`;
			const name = String(product.title ?? '').replace(/\s+/g, ' ').trim();
			const title = `${name} — ${SITE_NAME}`;
			const description = toMetaDescription(
				product.description,
				product.subtitle || `${name} available at ${SITE_NAME}.`,
			);
			const image = product.thumbnail || DEFAULT_OG_IMAGE;
			const sku = product.variants?.[0]?.sku || undefined;

			const jsonLd = {
				'@context': 'https://schema.org',
				'@type': 'Product',
				name,
				description,
				image,
				url: canonical,
				...(sku ? { sku } : {}),
				brand: { '@type': 'Brand', name: SITE_NAME },
			};

			const noscriptImg = `\t\t\t<img src="${escapeHtml(image)}" alt="${escapeHtml(name)}" width="480" />`;
			const html = renderRouteHtml(template, {
				canonical,
				title,
				description,
				image,
				type: 'product',
				jsonLd,
				// The product photo is the LCP element on a product page.
				preloadImage: image,
				noscript: `\t\t\t<h1>${escapeHtml(name)}</h1>\n\t\t\t<p>${escapeHtml(description)}</p>\n${noscriptImg}`,
			});
			writeRouteFile(routePath, html);
			written += 1;
		}
		console.log(`[prerender] ${products.length} product pages baked`);
	} catch (err) {
		console.warn('[prerender] product fetch failed, static + category pages only:', err.message);
	}

	console.log(`[prerender] wrote ${written} prerendered HTML files to ${DIST_DIR}`);
}

main().catch((err) => {
	console.error('[prerender] failed:', err);
	// Non-fatal: the SPA still works without baked meta.
	process.exit(0);
});







