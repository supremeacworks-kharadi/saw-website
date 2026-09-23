import { useEffect, useState } from 'react';

// Storefront pages only ever want the sellable catalogue, so the exclusion is
// centralised here rather than repeated at every call site.
const CATALOGUE_PARAMS = { exclude_types: 'subscription' };

// The full catalogue is identical for every page, so fetch it once and share the
// in-flight/resolved promise across all consumers for the rest of the session.
// This stops each navigation (and every product page, which needs related items)
// from re-downloading all products. A failed load clears the cache so the next
// consumer retries instead of caching the error.
let cataloguePromise = null;

function loadCatalogue() {
	if (!cataloguePromise) {
		cataloguePromise = import('@/api/EcommerceApi.js')
			.then((api) => api.getAllProducts(CATALOGUE_PARAMS))
			.then((result) => result.products)
			.catch((err) => {
				cataloguePromise = null;
				throw err;
			});
	}
	return cataloguePromise;
}

/**
 * Loads the full product catalogue (all paginated pages) once per session.
 * Centralises the dynamic import, loading/error state and effect cleanup that
 * would otherwise be copy-pasted into every catalogue page.
 *
 * @returns {{ products: object[], isLoading: boolean, error: Error|null }}
 */
export function useProducts() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let cancelled = false;
		setIsLoading(true);
		loadCatalogue()
			.then((list) => {
				if (cancelled) return;
				setProducts(list);
				setError(null);
			})
			.catch((err) => {
				console.warn('[useProducts] failed to load products', err);
				if (!cancelled) setError(err);
			})
			.finally(() => {
				if (!cancelled) setIsLoading(false);
			});
		return () => { cancelled = true; };
	}, []);

	return { products, isLoading, error };
}

/**
 * Loads a single product by slug, falling back to a catalogue lookup when the
 * URL used a product id (or the slug endpoint is unavailable).
 *
 * @param {string} slug - Product slug or id from the route
 * @returns {{ product: object|null, status: 'loading'|'ready'|'notfound'|'error' }}
 */
export function useProduct(slug) {
	const [product, setProduct] = useState(null);
	const [status, setStatus] = useState('loading');

	useEffect(() => {
		let cancelled = false;
		setStatus('loading');
		setProduct(null);
		(async () => {
			try {
				const api = await import('@/api/EcommerceApi.js');
				let result;
				try {
					result = await api.getProductBySlug(slug);
				} catch {
					// Slug lookup failed (e.g. the URL used a product id) — fall back to the
					// cached catalogue instead of a fresh full fetch.
					result = null;
				}
				if (!result) {
					const products = await loadCatalogue();
					result = products.find((item) => item.slug === slug || item.id === slug) || null;
				}
				if (!cancelled) {
					setProduct(result);
					setStatus(result ? 'ready' : 'notfound');
				}
			} catch (err) {
				console.warn('[useProduct] failed to load product', err);
				if (!cancelled) setStatus('error');
			}
		})();
		return () => { cancelled = true; };
	}, [slug]);

	return { product, status };
}



