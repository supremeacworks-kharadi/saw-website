import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MessageCircle } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import ProductCard from '@/components/site/ProductCard';
import Seo from '@/components/Seo';
import { CATEGORIES, matchCategory } from '@/data/catalogue';
import { getVariantPriceAmount } from '@/components/builder/blocks/ecommerceHelpers.js';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';
import { siteName, siteUrl, defaultOgImage } from '@/data/siteMeta';

const SORTS = [
	{ value: 'relevance', label: 'Relevance' },
	{ value: 'price-asc', label: 'Price: Low to High' },
	{ value: 'price-desc', label: 'Price: High to Low' },
	{ value: 'name', label: 'Name A–Z' },
];

export default function ShopPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('q') || '';
	const activeCategory = searchParams.get('cat') || 'all';
	const [sort, setSort] = useState('relevance');
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			setIsLoading(true);
			try {
				const api = await import('@/api/EcommerceApi.js');
				const result = await api.getProducts({ limit: 100, exclude_types: 'subscription' });
				const list = (Array.isArray(result) ? result : result?.products) || [];
				if (!cancelled) {
					setProducts(list);
					setError(null);
				}
			} catch (err) {
				console.warn('[ShopPage] failed to load products', err);
				if (!cancelled) setError(err);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		})();
		return () => { cancelled = true; };
	}, []);

	const filtered = useMemo(() => {
		let list = products;

		if (activeCategory !== 'all') {
			const category = CATEGORIES.find((item) => item.slug === activeCategory);
			if (category) {
				list = list.filter((product) => matchCategory(product)?.slug === category.slug);
			}
		}

		const q = query.trim().toLowerCase();
		if (q) {
			const terms = q.split(/\s+/).filter(Boolean);
			list = list.filter((product) => {
				const haystack = [
					product?.title,
					product?.description,
					product?.sku,
					...(product?.variants || []).map((variant) => `${variant?.title || ''} ${variant?.sku || ''}`),
				].join(' ').toLowerCase().replace(/<[^>]*>/g, ' ');
				return terms.every((term) => haystack.includes(term));
			});
		}

		const sorted = [...list];
		if (sort === 'price-asc') {
			sorted.sort((a, b) => (getVariantPriceAmount(a?.variants?.[0]) ?? Infinity) - (getVariantPriceAmount(b?.variants?.[0]) ?? Infinity));
		} else if (sort === 'price-desc') {
			sorted.sort((a, b) => (getVariantPriceAmount(b?.variants?.[0]) ?? -1) - (getVariantPriceAmount(a?.variants?.[0]) ?? -1));
		} else if (sort === 'name') {
			sorted.sort((a, b) => String(a?.title || '').localeCompare(String(b?.title || '')));
		}
		return sorted;
	}, [products, query, activeCategory, sort]);

	const setParam = (key, value) => {
		const next = new URLSearchParams(searchParams);
		if (value && value !== 'all') next.set(key, value);
		else next.delete(key);
		setSearchParams(next, { replace: true });
	};

	return (
		<>
			<Helmet>
				<title>Shop AC Spare Parts, Refrigerants & HVAC Materials — Supreme AC Works</title>
				<meta name="description" content="Browse AC spare parts, refrigerant gases (R32, R410A, R134a), copper pipes, compressors, motors, insulation, electrical material, AC stands and HVAC tools at Supreme AC Works. Enquire on WhatsApp for best price." />
				{query ? <meta name="robots" content="noindex,follow" /> : null}
			</Helmet>
			<Seo
				title="Shop AC Spare Parts, Refrigerants & HVAC Materials — Supreme AC Works"
				description="Browse AC spare parts, refrigerant gases (R32, R410A, R134a), copper pipes, compressors, motors, insulation, electrical material, AC stands and HVAC tools at Supreme AC Works."
				siteName={siteName}
				image={defaultOgImage}
				url={`${siteUrl}/shop`}
			/>
			<SiteHeader />

			<section className="saw-page-head">
				<div className="saw-container">
					<p className="saw-eyebrow">Product Catalogue</p>
					<h1>Shop AC Spare Parts &amp; HVAC Materials</h1>
					<form
						className="saw-hero__search saw-hero__search--page"
						onSubmit={(event) => {
							event.preventDefault();
							setParam('q', event.currentTarget.elements.q.value.trim());
						}}
					>
						<Search size={18} strokeWidth={2.2} />
						<input
							name="q"
							type="search"
							defaultValue={query}
							placeholder="Search R32, Floron, 5/8 copper, compressor, motor, capacitor, PCB…"
							aria-label="Search products"
						/>
						<button type="submit" className="saw-btn saw-btn--red">Search</button>
					</form>
				</div>
			</section>

			<section className="saw-section saw-section--flush-top">
				<div className="saw-container">
					<div className="saw-shop-toolbar">
						<div className="saw-chips saw-chips--scroll">
							<button
								type="button"
								className={`saw-chip ${activeCategory === 'all' ? 'is-active' : ''}`}
								onClick={() => setParam('cat', 'all')}
							>
								All Products
							</button>
							{CATEGORIES.map((category) => (
								<button
									key={category.slug}
									type="button"
									className={`saw-chip ${activeCategory === category.slug ? 'is-active' : ''}`}
									onClick={() => setParam('cat', category.slug)}
								>
									{category.name}
								</button>
							))}
						</div>
						<select
							className="saw-input saw-shop-toolbar__sort"
							value={sort}
							onChange={(event) => setSort(event.target.value)}
							aria-label="Sort products"
						>
							{SORTS.map((option) => (
								<option key={option.value} value={option.value}>{option.label}</option>
							))}
						</select>
					</div>

					{isLoading ? (
						<div className="saw-product-grid">
							{Array.from({ length: 8 }).map((_, index) => (
								<div key={index} className="saw-product-card saw-product-card--skeleton" />
							))}
						</div>
					) : error ? (
						<div className="saw-empty">
							<p>Products are unavailable right now. Please try again or enquire on WhatsApp.</p>
						</div>
					) : filtered.length ? (
						<>
							<p className="saw-shop-count">{filtered.length} product{filtered.length === 1 ? '' : 's'}{query ? ` for “${query}”` : ''}</p>
							<div className="saw-product-grid">
								{filtered.map((product) => <ProductCard key={product.id} product={product} />)}
							</div>
						</>
					) : (
						<div className="saw-empty">
							<h3>No products found{query ? ` for “${query}”` : ''}</h3>
							<p>We may still have it in stock — new items are added regularly. Send us your requirement directly:</p>
							<a
								className="saw-btn saw-btn--whatsapp"
								href={buildWhatsAppLink(`Hello Supreme AC Works, I am looking for ${query || 'an AC spare part / material'}. Please share price and availability.`)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle size={16} strokeWidth={2.2} /> Ask on WhatsApp
							</a>
							<Link to="/shop" className="saw-link-arrow">Clear search</Link>
						</div>
					)}
				</div>
			</section>

			<SiteFooter />
		</>
	);
}
