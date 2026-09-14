import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import QuantityPicker from './QuantityPicker.jsx';
import { productPlaceholderImage } from '@/data/ecommerce';
import { buildWhatsAppLink, enquiryListMessage } from '@/lib/whatsapp';

const EcommerceCartContext = createContext(null);
const STORAGE_KEY = 'enquiry-list-items';
const STORAGE_TTL_MS = 24 * 60 * 60 * 1000;

function readStoredItems() {
	if (typeof window === 'undefined') {
		return [];
	}

	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) {
			return [];
		}
		const parsed = JSON.parse(raw);
		if (!parsed?.savedAt || Date.now() - parsed.savedAt > STORAGE_TTL_MS) {
			window.localStorage.removeItem(STORAGE_KEY);
			return [];
		}
		return Array.isArray(parsed.items) ? parsed.items : [];
	} catch {
		return [];
	}
}

function persistItems(items) {
	if (typeof window === 'undefined') {
		return;
	}

	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
			savedAt: Date.now(),
			items,
		}));
	} catch {
		// Ignore quota / private mode failures.
	}
}

export function EcommerceCartProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);
	const [items, setItems] = useState(() => readStoredItems());

	useEffect(() => {
		persistItems(items);
	}, [items]);

	const api = useMemo(() => {
		const itemCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

		return {
			isOpen,
			items,
			itemCount,
			openCart: () => setIsOpen(true),
			closeCart: () => setIsOpen(false),
			toggleCart: () => setIsOpen((current) => !current),
			setItems,
			addItem: (item) => {
				setItems((current) => {
					const key = item?.variant_id || item?.id;
					const existing = current.find((entry) => (entry.variant_id || entry.id) === key);
					if (existing) {
						return current.map((entry) => (
							(entry.variant_id || entry.id) === key
								? {
									...entry,
									quantity: (entry.quantity || 1) + (item.quantity || 1),
								}
								: entry
						));
					}
					return [...current, {
						...item,
						quantity: item.quantity || 1,
					}];
				});
				setIsOpen(true);
			},
			removeItem: (itemId) => {
				setItems((current) => current.filter((entry) => (entry.variant_id || entry.id) !== itemId));
			},
			setItemQuantity: (itemId, quantity) => {
				setItems((current) => (quantity > 0
					? current.map((entry) => ((entry.variant_id || entry.id) === itemId
						? {
							...entry,
							quantity,
						}
						: entry))
					: current.filter((entry) => (entry.variant_id || entry.id) !== itemId)));
			},
			clearCart: () => setItems([]),
			sendEnquiry: (customer = {}) => {
				if (!items.length || typeof window === 'undefined') {
					return;
				}
				const link = buildWhatsAppLink(enquiryListMessage(items, customer));
				window.open(link, '_blank', 'noopener,noreferrer');
			},
		};
	}, [isOpen, items]);

	return (
		<EcommerceCartContext.Provider value={api}>
			{children}
			<EcommerceCart
				isOpen={api.isOpen}
				items={api.items}
				onClose={api.closeCart}
				onRemove={api.removeItem}
				onQuantityChange={api.setItemQuantity}
				onSendEnquiry={api.sendEnquiry}
			/>
		</EcommerceCartContext.Provider>
	);
}

export function useEcommerceCart() {
	const context = useContext(EcommerceCartContext);
	if (!context) {
		return {
			isOpen: false,
			items: [],
			itemCount: 0,
			openCart: () => {},
			closeCart: () => {},
			toggleCart: () => {},
			setItems: () => {},
			addItem: () => {},
			removeItem: () => {},
			setItemQuantity: () => {},
			clearCart: () => {},
			sendEnquiry: () => {},
		};
	}
	return context;
}

/** Prices travel as minor units, the same as the store API reports them. */
export default function EcommerceCart({
	isOpen = false,
	items = [],
	onClose,
	onRemove,
	onQuantityChange,
	onSendEnquiry,
}) {
	const [showForm, setShowForm] = useState(false);
	const [customerName, setCustomerName] = useState('');
	const [customerMobile, setCustomerMobile] = useState('');
	const [formError, setFormError] = useState('');

	const handleSubmitEnquiry = (event) => {
		event.preventDefault();
		const name = customerName.trim();
		const mobile = customerMobile.trim();
		if (!name) {
			setFormError('Please enter your name.');
			return;
		}
		if (mobile.replace(/\D/g, '').length < 10) {
			setFormError('Please enter a valid 10-digit contact number.');
			return;
		}
		setFormError('');
		if (onSendEnquiry) {
			onSendEnquiry({ name, mobile });
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<aside
			className="ecommerce-cart cart-drawer"
			role="dialog"
			aria-label="Enquiry list"
		>
			<header className="ecommerce-cart__header">
				<strong>Enquiry List</strong>
				{onClose ? (
					<button type="button" className="ecommerce-cart__close" onClick={onClose}>
						Close
					</button>
				) : null}
			</header>
			{items.length ? (
				<ul className="ecommerce-cart__list">
					{items.map((item) => {
						const key = item.variant_id || item.id;
						const price = item.price_formatted || item.price || '';
						const thumbnail = item.image || productPlaceholderImage;
						return (
							<li key={key} className="ecommerce-cart__item">
								<div className="ecommerce-cart__item-main">
									{thumbnail ? (
										<img src={thumbnail} alt="" className="ecommerce-cart__thumb" />
									) : null}
									<div>
										<div>{item.title || item.name || 'Item'}</div>
										{item.variant_title ? (
											<div className="ecommerce-cart__variant">{item.variant_title}</div>
										) : null}
										{item.sku ? (
											<div className="ecommerce-cart__variant">SKU: {item.sku}</div>
										) : null}
										{(item.custom_fields || []).map((field) => (
											<div key={field.title} className="ecommerce-cart__custom-field">
												{`${field.title}: ${field.value}`}
											</div>
										))}
										{price ? (
											<div className="ecommerce-cart__meta">
												{price}
											</div>
										) : null}
										{onQuantityChange ? (
											<QuantityPicker
												quantity={item.quantity || 1}
												size={32}
												fontSize={14}
												onChange={(next) => onQuantityChange(key, next)}
											/>
										) : (
											<div className="ecommerce-cart__meta">
												{item.quantity != null ? `× ${item.quantity}` : ''}
											</div>
										)}
									</div>
								</div>
								{onRemove ? (
									<button type="button" onClick={() => onRemove(key)}>
										Remove
									</button>
								) : null}
							</li>
						);
					})}
				</ul>
			) : (
				<p className="ecommerce-cart__empty">Your enquiry list is empty</p>
			)}
			<div className="ecommerce-cart__footer">
				{showForm ? (
					<form className="ecommerce-cart__form" onSubmit={handleSubmitEnquiry} noValidate>
						<p className="ecommerce-cart__enquiry-note">
							Enter your details — we will send your product list to Supreme AC Works on WhatsApp.
						</p>
						<label className="ecommerce-cart__field">
							<span>Name *</span>
							<input
								className="saw-input"
								value={customerName}
								onChange={(event) => setCustomerName(event.target.value)}
								placeholder="Your full name"
							/>
						</label>
						<label className="ecommerce-cart__field">
							<span>Contact number *</span>
							<input
								className="saw-input"
								type="tel"
								value={customerMobile}
								onChange={(event) => setCustomerMobile(event.target.value)}
								placeholder="10-digit mobile number"
							/>
						</label>
						{formError ? (
							<p className="ecommerce-cart__form-error">{formError}</p>
						) : null}
						<button
							type="submit"
							className="ecommerce-cart__checkout"
							disabled={!items.length}
						>
							Send Enquiry on WhatsApp
						</button>
						<button
							type="button"
							className="ecommerce-cart__form-back"
							onClick={() => {
								setShowForm(false);
								setFormError('');
							}}
						>
							Back to list
						</button>
					</form>
				) : (
					<>
						<p className="ecommerce-cart__enquiry-note">
							Send your selected products to us on WhatsApp for price and availability.
						</p>
						<button
							type="button"
							className="ecommerce-cart__checkout"
							disabled={!items.length}
							onClick={() => {
								setFormError('');
								setShowForm(true);
							}}
						>
							Send Enquiry on WhatsApp
						</button>
					</>
				)}
			</div>
		</aside>
	);
}
