import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, MessageCircle, Layers } from 'lucide-react';
import { useEcommerceCart } from '@/components/builder/blocks/EcommerceCart.jsx';
import {
	getProductImage,
	getVariantPriceAmount,
	getVariantCurrency,
	getVariantCurrencyInfo,
} from '@/components/builder/blocks/ecommerceHelpers.js';
import { productPlaceholderImage } from '@/data/ecommerce';
import { buildWhatsAppLink, productEnquiryMessage } from '@/lib/whatsapp';
import { getVariantSelectLabel, getVariantCountLabel } from '@/lib/variants';
import { cdnImage, cdnImageSrcSet } from '@/lib/images';
import { matchCategory } from '@/data/catalogue';

// Card image display widths (CSS px); doubled options cover 2x displays.
const CARD_IMAGE_WIDTHS = [200, 300, 400, 600];

export function getProductHref(product) {
	return `/product/${product?.slug || product?.id}`;
}

export function getProductSku(product, variant) {
	return variant?.sku || product?.sku || '';
}

export function getProductPrice(product, variant) {
	return variant?.sale_price_formatted
		|| variant?.price_formatted
		|| product?.price_formatted
		|| '';
}

export default function ProductCard({ product, priority = false }) {
	const { addItem } = useEcommerceCart();
	const variants = product?.variants || [];
	const variant = variants[0];
	// Products with more than one variant need an explicit option choice (size,
	// colour, length…) — we route to the product page instead of silently adding
	// the first variant. The option name is read from the store, never hardcoded.
	const hasVariantChoice = variants.length > 1;
	const price = getProductPrice(product, variant);
	const sku = getProductSku(product, variant);
	const image = getProductImage(product) || productPlaceholderImage;
	const category = matchCategory(product);
	const isPurchasable = product?.purchasable !== false;

	const handleAdd = () => {
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
			quantity: 1,
		});
	};

	return (
		<article className="saw-product-card">
			<Link to={getProductHref(product)} className="saw-product-card__media">
				<img
					src={cdnImage(image, 400)}
					srcSet={cdnImageSrcSet(image, CARD_IMAGE_WIDTHS)}
					sizes="(max-width: 600px) 45vw, 280px"
					alt={product?.title || 'Product'}
					loading={priority ? 'eager' : 'lazy'}
					fetchPriority={priority ? 'high' : 'auto'}
					decoding="async"
				/>
			</Link>
			<div className="saw-product-card__body">
				{category ? (
					<Link to={`/category/${category.slug}`} className="saw-product-card__cat">
						{category.name}
					</Link>
				) : null}
				<h3>
					<Link to={getProductHref(product)}>{product?.title}</Link>
				</h3>
				<div className="saw-product-card__price-row">
					{price ? (
						<span className="saw-product-card__price">{price}</span>
					) : (
						<span className="saw-product-card__price saw-product-card__price--enquiry">Price on enquiry</span>
					)}
					{hasVariantChoice ? (
						<span className="saw-product-card__variant-hint">{getVariantCountLabel(product)}</span>
					) : sku ? (
						<span className="saw-product-card__sku">SKU: {sku}</span>
					) : null}
				</div>
				<div className="saw-product-card__actions">
					{isPurchasable ? (
						hasVariantChoice ? (
							<Link
								to={getProductHref(product)}
								className="saw-btn saw-btn--red saw-btn--sm"
								aria-label={`${getVariantSelectLabel(product)} for ${product?.title}`}
							>
								<Layers size={15} strokeWidth={2.4} /> {getVariantSelectLabel(product)}
							</Link>
						) : (
							<button type="button" className="saw-btn saw-btn--red saw-btn--sm" onClick={handleAdd}>
								<ShoppingCart size={15} strokeWidth={2.4} /> Add to Cart
							</button>
						)
					) : null}
					<a
						className="saw-btn saw-btn--whatsapp-outline saw-btn--sm"
						href={buildWhatsAppLink(productEnquiryMessage({ name: product?.title, sku, quantity: 1 }))}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Enquire about ${product?.title} on WhatsApp`}
					>
						<MessageCircle size={15} strokeWidth={2.4} /> Enquire
					</a>
				</div>
			</div>
		</article>
	);
}
