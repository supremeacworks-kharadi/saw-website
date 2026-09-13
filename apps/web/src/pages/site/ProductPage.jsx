import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Tag, Minus, Plus, Check, ChevronRight } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import ProductCard, { getProductHref } from '@/components/site/ProductCard';
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
import { buildWhatsAppLink, productEnquiryMessage, bestPriceMessage } from '@/lib/whatsapp';

export default function ProductPage() {
	const { slug } = useParams();
	const { addItem } = useEcommerceCart();
	const [product, setProduct] = useState(null);
	const [allProducts, setAllProducts] = useState([]);
	const [status, setStatus] = useState('loading');
	const [quantity, setQuantity] = useState(1);
	const [activeImage, setActiveImage] = useState(0);

	useEffect(() => {
		let cancelled = false;
		setStatus('loading');
		setProduct(null);
		setActiveImage(0);
		setQuantity(1);
		(async () => {
			try {
				const api = await import('@/api/EcommerceApi.js');
				let result = null;
				if (api.getProductBySlug) {
					result = await api.getProductBySlug(slug);
				}
				if (!result && api.getProducts) {
					const list = await api.getProducts({ limit: 100, exclude_types: 'subscription' });
					const items = (Array.isArray(list) ? list : list?.products) || [];
					if (!cancelled) setAllProducts(items);
					result = items.find((item) => item.slug === slug || item.id === slug) || null;
				}
				if (!cancelled) {
					setProduct(result);
					setStatus(result ? 'ready' : 'notfound');
				}
			} catch (err) {
				console.warn('[ProductPage] failed to load product', err);
				if (!cancelled) setStatus('error');
			}
		})();
		return () => { cancelled = true; };
	}, [slug]);

	const variant = (product?.variants || [])[0];
	const price = variant?.sale_price_formatted || variant?.price_formatted || product?.price_formatted || '';
	const sku = variant?.sku || product?.sku || '';
	const images = useMemo(() => {
		const list = getProductImages(product);
		return list.length ? list : [productPlaceholderImage].filter(Boolean);
	}, [product]);
	const category = product ? matchCategory(product) : null;
	const additionalInfo = [...(product?.additional_info || [])].sort((a, b) => (a.order || 0) - (b.order || 0));

	const related = useMemo(() => {
		if (!product || !category) return [];
		return allProducts
			.filter((item) => item.id !== product.id && matchCategory(item)?.slug === category.slug)
			.slice(0, 4);
	}, [allProducts, product, category]);

	const handleAdd = () => {
		if (!product) return;
		addItem({
			id: product.id,
			variant_id: variant?.id || product.id,
			variant_title: variant?.title || '',
			title: product.title,
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
			</Helmet>
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
									<div className="saw-product__main-image">
										<img src={images[activeImage] || images[0]} alt={product.title} />
									</div>
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

									<div className="saw-product__qty">
										<span>Quantity</span>
										<div className="saw-qty">
											<button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={15} strokeWidth={2.6} /></button>
											<strong>{quantity}</strong>
											<button type="button" onClick={() => setQuantity((q) => q + 1)} aria-label="Increase quantity"><Plus size={15} strokeWidth={2.6} /></button>
										</div>
									</div>

									<div className="saw-product__actions">
										<button type="button" className="saw-btn saw-btn--red saw-btn--lg" onClick={handleAdd}>
											<ShoppingCart size={17} strokeWidth={2.2} /> Add to Cart
										</button>
										<a
											className="saw-btn saw-btn--whatsapp saw-btn--lg"
											href={buildWhatsAppLink(productEnquiryMessage({ name: product.title, sku, quantity }))}
											target="_blank"
											rel="noopener noreferrer"
										>
											<MessageCircle size={17} strokeWidth={2.2} /> Enquire on WhatsApp
										</a>
										<a
											className="saw-btn saw-btn--dark-outline saw-btn--lg"
											href={buildWhatsAppLink(bestPriceMessage({ name: product.title, sku }))}
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

			<SiteFooter />
		</>
	);
}
