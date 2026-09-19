import { whatsAppNumber, whatsAppMessage } from '@/data/siteMeta';

/** Digits-only WhatsApp number from siteMeta. */
export function getWhatsAppNumber() {
	return String(whatsAppNumber || '').replace(/\D/g, '');
}

/** Build a wa.me link with a prefilled message. */
export function buildWhatsAppLink(message) {
	const number = getWhatsAppNumber();
	const text = encodeURIComponent(message || whatsAppMessage);
	return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Standard product enquiry message (name + SKU + quantity). */
export function productEnquiryMessage({ name, sku, quantity } = {}) {
	const parts = [
		`Hello Supreme AC Works, I want to enquire about ${name || 'a product'}.`,
	];
	if (sku) {
		parts.push(`SKU: ${sku}.`);
	}
	parts.push(`Quantity required: ${quantity || 1}.`);
	parts.push('Please share your best price and availability.');
	return parts.join(' ');
}

/** "Get best price" message for products with frequently changing prices. */
export function bestPriceMessage({ name, sku } = {}) {
	return `Hello Supreme AC Works, I am interested in ${name || 'a product'}${sku ? ` (SKU: ${sku})` : ''}. Please share your best price and availability.`;
}

export const GENERIC_ENQUIRY_MESSAGE =
	'Hello Supreme AC Works, I am looking for a specific AC spare part / HVAC material. Please help me with price and availability.';

export const BULK_ENQUIRY_MESSAGE =
	'Hello Supreme AC Works, I have a bulk / wholesale requirement. Please contact me with your best prices.';
