import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import ProductCard from '@/components/site/ProductCard';
import CategoryGrid from '@/components/site/CategoryGrid';
import Seo from '@/components/Seo';
import { getCategoryBySlug, matchCategory, matchSubcategory } from '@/data/catalogue';
import { useProducts } from '@/hooks/useCatalogue';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { siteName, siteUrl, defaultOgImage } from '@/data/siteMeta';

export default function CategoryPage() {
	const { slug } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const activeSub = searchParams.get('sub') || 'all';
	const category = getCategoryBySlug(slug);
	const { products, isLoading } = useProducts();

	const categoryProducts = useMemo(
		() => (category ? products.filter((product) => matchCategory(product)?.slug === category.slug) : []),
		[products, category],
	);

	const subcategories = category?.subcategories || [];
	const visibleProducts = useMemo(() => {
		if (activeSub === 'all' || !subcategories.length) return categoryProducts;
		return categoryProducts.filter(
			(product) => matchSubcategory(product)?.subcategory?.slug === activeSub,
		);
	}, [categoryProducts, activeSub, subcategories.length]);

	const setSub = (value) => {
		const next = new URLSearchParams(searchParams);
		if (value && value !== 'all') next.set('sub', value);
		else next.delete('sub');
		setSearchParams(next, { replace: true });
	};

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
				<script type="application/ld+json">
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BreadcrumbList',
						itemListElement: [
							{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
							{ '@type': 'ListItem', position: 2, name: 'Categories', item: `${siteUrl}/categories` },
							{ '@type': 'ListItem', position: 3, name: category.name, item: `${siteUrl}/category/${category.slug}` },
						],
					})}
				</script>
			</Helmet>
			<Seo
				title={`${category.name} — Supreme AC Works | AC Spare Parts Supplier India`}
				description={`${category.name} at Supreme AC Works — ${category.tagline} Enquire on WhatsApp for best price and availability.`}
				siteName={siteName}
				image={defaultOgImage}
				url={`${siteUrl}/category/${category.slug}`}
			/>
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
					{subcategories.length ? (
						<div className="saw-chips saw-chips--scroll saw-subcat-chips">
							<button
								type="button"
								className={`saw-chip ${activeSub === 'all' ? 'is-active' : ''}`}
								onClick={() => setSub('all')}
							>
								All {category.name}
							</button>
							{subcategories.map((sub) => (
								<button
									key={sub.slug}
									type="button"
									className={`saw-chip ${activeSub === sub.slug ? 'is-active' : ''}`}
									onClick={() => setSub(sub.slug)}
								>
									{sub.name}
								</button>
							))}
						</div>
					) : null}

					{isLoading ? (
						<div className="saw-product-grid">
							{Array.from({ length: 4 }).map((_, index) => (
								<div key={index} className="saw-product-card saw-product-card--skeleton" />
							))}
						</div>
					) : visibleProducts.length ? (
						<div className="saw-product-grid">
							{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
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
