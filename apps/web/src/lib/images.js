// Product images come from the store's Cloudflare-backed CDN (cdn.zyrosite.com)
// as full-resolution originals — often 1–2 MB PNGs. Loading a grid of those is
// slow. That same zone exposes Cloudflare's image-resizing endpoint
// (`/cdn-cgi/image/…`), so we can request right-sized, auto-format (WebP/AVIF)
// derivatives on the fly instead of shipping the originals.
//
// These helpers wrap CDN URLs transparently; any non-CDN URL (local placeholder,
// data URI, other host) is returned untouched, so callers can pass anything.

const ZYRO_CDN_HOST = 'cdn.zyrosite.com';
const RESIZE_PREFIX = `https://${ZYRO_CDN_HOST}/cdn-cgi/image/`;

// Default responsive widths (CSS px). Covers card thumbnails through full
// product images on high-DPI (2x) screens.
const DEFAULT_WIDTHS = [200, 400, 600, 800, 1200];

function isTransformableCdnUrl(url) {
	if (typeof url !== 'string' || !url) return false;
	// Already transformed — don't wrap twice.
	if (url.includes('/cdn-cgi/image/')) return false;
	try {
		return new URL(url).host === ZYRO_CDN_HOST;
	} catch {
		return false;
	}
}

/**
 * Return a resized, auto-format variant of a store CDN image.
 * `fit=scale-down` never upscales past the original, preserving sharpness.
 *
 * @param {string} url - Original image URL
 * @param {number} width - Target width in CSS pixels
 * @returns {string} Transformed URL, or the original if it isn't a CDN image
 */
export function cdnImage(url, width) {
	if (!isTransformableCdnUrl(url) || !width) return url;
	return `${RESIZE_PREFIX}width=${width},format=auto,fit=scale-down/${url}`;
}

/**
 * Build a responsive `srcset` so the browser fetches the smallest image that
 * fits the slot and the device's pixel density.
 *
 * @param {string} url - Original image URL
 * @param {number[]} [widths] - Candidate widths
 * @returns {string|undefined} A srcset string, or undefined for non-CDN images
 */
export function cdnImageSrcSet(url, widths = DEFAULT_WIDTHS) {
	if (!isTransformableCdnUrl(url)) return undefined;
	return widths.map((w) => `${cdnImage(url, w)} ${w}w`).join(', ');
}

