import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Tag, Minus, Plus, Check, ChevronRight, X, ChevronLeft, ZoomIn } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import ProductCard, { getProductHref } from '@/components/site/ProductCard';
import Seo from '@/components/Seo';
import { useEcommerceCart } from '@/components/builder/blocks/EcommerceCart.jsx';
import {
	getProductImage,
	getProductImages,
	getVariantPriceAmount,
	getVariantCurrency,
	getVariantCurrencyInfo,
} from '@/components/builder/blocks/ecommerceHelpers.js';
import { productPlaceholderImage } from '@/data/ecommerce';
import { matchCategory } from '@/data/catalogue';
import { useProduct, useProducts } from '@/hooks/useCatalogue';
import { buildWhatsAppLink, productEnquiryMessage, bestPriceMessage } from '@/lib/whatsapp';
import { siteName, siteUrl, defaultOgImage } from '@/data/siteMeta';

export default function ProductPage() {
	const { slug } = useParams();
	const { addItem, removeItem, isInCart } = useEcommerceCart();
	const { product, status } = useProduct(slug);
	const { products: allProducts } = useProducts();
	const [quantity, setQuantity] = useState(1);
	const [activeImage, setActiveImage] = useState(0);
	const [selectedVariantId, setSelectedVariantId] = useState('');
	const [lightboxOpen, setLightboxOpen] = useState(false);

	// Reset per-product view state whenever the route changes.
	useEffect(() => {
		setActiveImage(0);
		setQuantity(1);
		setSelectedVariantId('');
	}, [slug]);

	const variants = product?.variants || [];
	const variant = variants.find((v) => v.id === selectedVariantId) || variants[0];
	const hasVariantChoice = variants.length > 1;
	const variantLabel = hasVariantChoice ? (variant?.title || '') : '';
	const enquiryName = variantLabel ? `${product?.title} — ${variantLabel}` : product?.title;
	const price = variant?.sale_price_formatted || variant?.price_formatted || product?.price_formatted || '';
	const sku = variant?.sku || product?.sku || '';
	const inCart = variant ? isInCart(variant.id) : false;
	const images = useMemo(() => {
		const list = getProductImages(product);
		return list.length ? list : [productPlaceholderImage].filter(Boolean);
	}, [product]);
	const category = product ? matchCategory(product) : null;
	const additionalInfo = [...(product?.additional_info || [])].sort((a, b) => (a.order || 0) - (b.order || 0));

	const showPrevImage = () => setActiveImage((i) => (i - 1 + images.length) % images.length);
	const showNextImage = () => setActiveImage((i) => (i + 1) % images.length);

	// Lightbox: lock page scroll while open and wire up keyboard controls (Esc / arrows).
	useEffect(() => {
		if (!lightboxOpen) return undefined;
		const onKey = (e) => {
			if (e.key === 'Escape') setLightboxOpen(false);
			else if (e.key === 'ArrowLeft') showPrevImage();
			else if (e.key === 'ArrowRight') showNextImage();
		};
		window.addEventListener('keydown', onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			window.removeEventListener('keydown', onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [lightboxOpen, images.length]);

	const related = useMemo(() => {
		if (!product || !category) return [];
		return allProducts
			.filter((item) => item.id !== product.id && matchCategory(item)?.slug === category.slug)
			.slice(0, 4);
	}, [allProducts, product, category]);

	const productDescription = product?.seo_settings?.description
		|| product?.subtitle
		|| `${product?.title || 'AC spare parts and HVAC materials'} at Supreme AC Works. Enquire on WhatsApp for best price and availability.`;
	const canonicalUrl = product ? `${siteUrl}/product/${product.slug || product.id}` : `${siteUrl}/shop`;
	const ogImage = images[0] || defaultOgImage;

	const productJsonLd = useMemo(() => {
		if (!product) return null;
		const priceMinor = getVariantPriceAmount(variant);
		const currency = (getVariantCurrency(variant) || 'INR').toUpperCase();
		const data = {
			'@context': 'https://schema.org',
			'@type': 'Product',
			name: product.title,
			description: productDescription,
			image: images.filter(Boolean),
			...(sku ? { sku } : {}),
			...(category ? { category: category.name } : {}),
		};
		if (typeof priceMinor === 'number') {
			data.offers = {
				'@type': 'Offer',
				price: (priceMinor / 100).toFixed(2),
				priceCurrency: currency,
				availability: 'https://schema.org/InStock',
				url: canonicalUrl,
				seller: { '@type': 'Organization', name: 'Supreme AC Works' },
			};
		}
		return data;
	}, [product, variant, images, sku, category, productDescription, canonicalUrl]);

	const breadcrumbJsonLd = useMemo(() => {
		if (!product) return null;
		const items = [
			{ '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
			{ '@type': 'ListItem', position: 2, name: 'Shop', item: `${siteUrl}/shop` },
		];
		if (category) {
			items.push({ '@type': 'ListItem', position: 3, name: category.name, item: `${siteUrl}/category/${category.slug}` });
		}
		items.push({ '@type': 'ListItem', position: items.length + 1, name: product.title, item: canonicalUrl });
		return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
	}, [product, category, canonicalUrl]);

	const handleAdd = () => {
		if (!product) return;
		const itemKey = variant?.id || product.id;
		if (isInCart(itemKey)) {
			removeItem(itemKey);
			return;
		}
		addItem({
			id: product.id,
			variant_id: variant?.id || product.id,
			variant_title: variant?.title || '',
			title: product.title,
			sku,
			image: getProductImage(product),
			price_amount: getVariantPriceAmount(variant),
			currency: getVariantCurrency(variant),
			currency_info: getVariantCurrencyInfo(variant),
			price_formatted: price,
			type: product?.type?.value,
			quantity,
		});
	};

	return (
		<>
			<Helmet>
				<title>{product ? `${product.title} — Supreme AC Works` : 'Product — Supreme AC Works'}</title>
				<meta name="description" content={product?.seo_settings?.description || `${product?.title || 'AC spare parts and HVAC materials'} at Supreme AC Works. Enquire on WhatsApp for best price and availability.`} />
				{status === 'notfound' || status === 'error' ? (
					<meta name="robots" content="noindex,follow" />
				) : null}
				{productJsonLd ? (
					<script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
				) : null}
				{breadcrumbJsonLd ? (
					<script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
				) : null}
			</Helmet>
			{product ? (
				<Seo
					title={`${product.title} — Supreme AC Works`}
					description={productDescription}
					siteName={siteName}
					image={ogImage}
					url={canonicalUrl}
					type="product"
				/>
			) : null}
			<SiteHeader />

			{status === 'loading' ? (
				<section className="saw-section"><div className="saw-container"><p className="saw-empty">Loading product…</p></div></section>
			) : null}

			{status === 'notfound' || status === 'error' ? (
				<section className="saw-section">
					<div className="saw-container saw-empty">
						<h1>{status === 'notfound' ? 'Product not found' : 'Product unavailable'}</h1>
						<p>The product you are looking for is not listed right now. We may still have it in stock.</p>
						<a
							className="saw-btn saw-btn--whatsapp"
							href={buildWhatsAppLink('Hello Supreme AC Works, I am looking for a specific AC spare part / material. Please share price and availability.')}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle size={16} strokeWidth={2.2} /> Ask on WhatsApp
						</a>
						<Link to="/shop" className="saw-link-arrow">Back to shop</Link>
					</div>
				</section>
			) : null}

			{status === 'ready' && product ? (
				<>
					<section className="saw-section saw-section--flush-top saw-product">
						<div className="saw-container">
							<nav className="saw-breadcrumbs" aria-label="Breadcrumb">
								<Link to="/">Home</Link>
								<ChevronRight size={13} strokeWidth={2.4} />
								<Link to="/shop">Shop</Link>
								{category ? (
									<>
										<ChevronRight size={13} strokeWidth={2.4} />
										<Link to={`/category/${category.slug}`}>{category.name}</Link>
									</>
								) : null}
								<ChevronRight size={13} strokeWidth={2.4} />
								<span>{product.title}</span>
							</nav>

							<div className="saw-product__grid">
								<div className="saw-product__gallery">
									<button
										type="button"
										className="saw-product__main-image"
										onClick={() => setLightboxOpen(true)}
										aria-label="Enlarge image"
									>
										<img src={images[activeImage] || images[0]} alt={product.title} />
										<span className="saw-product__zoom-hint"><ZoomIn size={16} strokeWidth={2.4} /></span>
									</button>
									{images.length > 1 ? (
										<div className="saw-product__thumbs">
											{images.map((url, index) => (
												<button
													key={`${url}-${index}`}
													type="button"
													className={index === activeImage ? 'is-active' : ''}
													onClick={() => setActiveImage(index)}
													aria-label={`View image ${index + 1}`}
												>
													<img src={url} alt="" />
												</button>
											))}
										</div>
									) : null}
								</div>

								<div className="saw-product__info">
									{category ? <Link to={`/category/${category.slug}`} className="saw-product-card__cat">{category.name}</Link> : null}
									<h1>{product.title}</h1>
									{product.subtitle ? <p className="saw-product__subtitle">{product.subtitle}</p> : null}

									<div className="saw-product__price-row">
										{price ? <span className="saw-product__price">{price}</span> : <span className="saw-product__price saw-product__price--enquiry">Price on enquiry</span>}
										{sku ? <span className="saw-product-card__sku">SKU: {sku}</span> : null}
									</div>
									<p className="saw-product__price-note">
										Prices can change with market rates. Use <strong>Get Best Price</strong> for today's rate and availability.
									</p>

									{hasVariantChoice ? (
										<div className="saw-product__variants">
											<span className="saw-product__variants-label">
												Option{variant?.title ? <>: <strong>{variant.title}</strong></> : null}
											</span>
											<div className="saw-product__variant-chips">
												{variants.map((v) => (
													<button
														key={v.id}
														type="button"
														className={`saw-variant-chip${v.id === variant?.id ? ' is-active' : ''}`}
														onClick={() => {
															setSelectedVariantId(v.id);
															if (isInCart(v.id)) return;
														}}
														aria-pressed={v.id === variant?.id}
													>
														{v.title}
													</button>
												))}
											</div>
										</div>
									) : null}

									<div className="saw-product__qty">
										<span>Quantity</span>
										<div className="saw-qty">
											<button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={15} strokeWidth={2.6} /></button>
											<strong>{quantity}</strong>
											<button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity"><Plus size={15} strokeWidth={2.6} /></button>
										</div>
									</div>

									<div className="saw-product__actions">
										<button
											type="button"
											className="saw-btn saw-btn--red saw-btn--lg"
											onClick={handleAdd}
										>
											{inCart ? (
												<><Check size={17} strokeWidth={2.4} /> Added — Remove</>
											) : (
												<><ShoppingCart size={17} strokeWidth={2.2} /> Add to Cart</>
											)}
										</button>
										<a
											className="saw-btn saw-btn--whatsapp saw-btn--lg"
											href={buildWhatsAppLink(productEnquiryMessage({ name: enquiryName, sku, quantity }))}
											target="_blank"
											rel="noopener noreferrer"
										>
											<MessageCircle size={17} strokeWidth={2.2} /> Enquire on WhatsApp
										</a>
										<a
											className="saw-btn saw-btn--dark-outline saw-btn--lg"
											href={buildWhatsAppLink(bestPriceMessage({ name: enquiryName, sku }))}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Tag size={17} strokeWidth={2.2} /> Get Best Price
										</a>
									</div>

									{additionalInfo.length ? (
										<div className="saw-product__specs">
											<h3>Specifications</h3>
											{additionalInfo.map((info) => (
												<details key={info.id || info.title}>
													<summary>{info.title}</summary>
													<div dangerouslySetInnerHTML={{ __html: info.description || '' }} />
												</details>
											))}
										</div>
									) : null}

									{category?.specFields?.length ? (
										<div className="saw-product__spec-note">
											<h3>Available on enquiry</h3>
											<ul>
												{category.specFields.map((field) => (
													<li key={field}><Check size={14} strokeWidth={2.6} /> {field}</li>
												))}
											</ul>
										</div>
									) : null}
								</div>
							</div>

							{product.description ? (
								<div className="saw-product__description">
									<h2>Product Details</h2>
									<div dangerouslySetInnerHTML={{ __html: product.description }} />
								</div>
							) : null}
						</div>
					</section>

					{related.length ? (
						<section className="saw-section saw-section--tint">
							<div className="saw-container">
								<div className="saw-section__head">
									<div>
										<p className="saw-eyebrow">Related</p>
										<h2>You may also need</h2>
									</div>
								</div>
								<div className="saw-product-grid">
									{related.map((item) => <ProductCard key={item.id} product={item} />)}
								</div>
							</div>
						</section>
					) : null}
				</>
			) : null}

			{lightboxOpen && status === 'ready' && product ? (
				<div
					className="saw-lightbox"
					role="dialog"
					aria-modal="true"
					aria-label={`${product.title} image viewer`}
					onClick={() => setLightboxOpen(false)}
				>
					<button type="button" className="saw-lightbox__close" onClick={() => setLightboxOpen(false)} aria-label="Close">
						<X size={22} strokeWidth={2.4} />
					</button>
					{images.length > 1 ? (
						<button
							type="button"
							className="saw-lightbox__nav saw-lightbox__nav--prev"
							onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
							aria-label="Previous image"
						>
							<ChevronLeft size={26} strokeWidth={2.4} />
						</button>
					) : null}
					<img
						className="saw-lightbox__image"
						src={images[activeImage] || images[0]}
						alt={product.title}
						onClick={(e) => e.stopPropagation()}
					/>
					{images.length > 1 ? (
						<button
							type="button"
							className="saw-lightbox__nav saw-lightbox__nav--next"
							onClick={(e) => { e.stopPropagation(); showNextImage(); }}
							aria-label="Next image"
						>
							<ChevronRight size={26} strokeWidth={2.4} />
						</button>
					) : null}
					{images.length > 1 ? (
						<span className="saw-lightbox__counter">{activeImage + 1} / {images.length}</span>
					) : null}
				</div>
			) : null}

			<SiteFooter />
		</>
	);
}
