import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import ProductCard from '@/components/site/ProductCard';
import CategoryGrid from '@/components/site/CategoryGrid';
import { getCategoryBySlug, matchCategory } from '@/data/catalogue';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function CategoryPage() {
	const { slug } = useParams();
	const category = getCategoryBySlug(slug);
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const api = await import('@/api/EcommerceApi.js');
				const result = await api.getProducts({ limit: 100, exclude_types: 'subscription' });
				const list = (Array.isArray(result) ? result : result?.products) || [];
				if (!cancelled) setProducts(list);
			} catch (err) {
				console.warn('[CategoryPage] failed to load products', err);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		})();
		return () => { cancelled = true; };
	}, []);

	const categoryProducts = useMemo(
		() => (category ? products.filter((product) => matchCategory(product)?.slug === category.slug) : []),
		[products, category],
	);

	if (!category) {
		return (
			<>
				<Helmet><title>Category not found — Supreme AC Works</title></Helmet>
				<SiteHeader />
				<section className="saw-section">
					<div className="saw-container saw-empty">
						<h1>Category not found</h1>
						<p>The category you are looking for does not exist yet.</p>
						<Link to="/categories" className="saw-btn saw-btn--red">View All Categories</Link>
					</div>
				</section>
				<SiteFooter />
			</>
		);
	}

	return (
		<>
			<Helmet>
				<title>{category.name} — Supreme AC Works | AC Spare Parts Supplier India</title>
				<meta name="description" content={`${category.name} at Supreme AC Works — ${category.tagline} Enquire on WhatsApp for best price and availability.`} />
			</Helmet>
			<SiteHeader />

			<section className="saw-page-head saw-page-head--category">
				<div className="saw-container saw-split">
					<div className="saw-split__copy">
						<p className="saw-eyebrow">Category</p>
						<h1>{category.name}</h1>
						<p>{category.tagline}</p>
						{category.popular?.length ? (
							<div className="saw-chips">
								{category.popular.map((term) => (
									<Link key={term} to={`/shop?q=${encodeURIComponent(term)}`} className="saw-chip">{term}</Link>
								))}
							</div>
						) : null}
					</div>
					<div className="saw-split__media saw-split__media--small">
						<img src={category.image} alt={category.name} />
					</div>
				</div>
			</section>

			<section className="saw-section saw-section--flush-top">
				<div className="saw-container">
					{isLoading ? (
						<div className="saw-product-grid">
							{Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="saw-product-card saw-product-card--skeleton" />
							))}
						</div>
					) : categoryProducts.length ? (
						<div className="saw-product-grid">
							{categoryProducts.map((product) => <ProductCard key={product.id} product={product} />)}
						</div>
					) : (
						<div className="saw-empty">
							<h3>Products being added to this category</h3>
							<p>Send us your {category.name.toLowerCase()} requirement — model number, size or photo — and we will confirm price and availability.</p>
							<a
								className="saw-btn saw-btn--whatsapp"
								href={buildWhatsAppLink(`Hello Supreme AC Works, I want to enquire about ${category.name}. Please share your best price and availability.`)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle size={16} strokeWidth={2.2} /> Enquire on WhatsApp
							</a>
						</div>
					)}

					<div className="saw-spec-note">
						<h3>Product information we can provide</h3>
						<ul>
							{category.specFields.map((field) => (
								<li key={field}><Check size={15} strokeWidth={2.6} /> {field}</li>
							))}
						</ul>
						<p className="saw-spec-note__hint">Share the model number or size you need on WhatsApp for exact specifications, price and stock.</p>
					</div>
				</div>
			</section>

			<section className="saw-section saw-section--tint">
				<div className="saw-container">
					<div className="saw-section__head">
						<div>
							<p className="saw-eyebrow">More</p>
							<h2>Other Categories</h2>
						</div>
						<Link to="/categories" className="saw-link-arrow">All categories <ArrowRight size={15} strokeWidth={2.4} /></Link>
					</div>
					<CategoryGrid />
				</div>
			</section>

			<SiteFooter />
		</>
	);
}
