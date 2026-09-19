import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, MessageCircle } from 'lucide-react';
import { useEcommerceCart } from '@/components/builder/blocks/EcommerceCart.jsx';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';

export const NAV_LINKS = [
	{ to: '/', label: 'Home' },
	{ to: '/shop', label: 'Shop' },
	{ to: '/categories', label: 'Categories' },
	{ to: '/category/refrigerant-gases', label: 'Refrigerants' },
	{ to: '/category/copper-pipes-coils', label: 'Copper & Installation' },
	{ to: '/category/ac-compressors', label: 'AC Spares' },
	{ to: '/bulk-enquiry', label: 'Bulk Enquiry' },
	{ to: '/about', label: 'About Us' },
	{ to: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const { toggleCart, itemCount } = useEcommerceCart();

	const submitSearch = (event) => {
		event.preventDefault();
		const q = query.trim();
		if (!q) return;
		setIsMenuOpen(false);
		setIsSearchOpen(false);
		navigate(`/shop?q=${encodeURIComponent(q)}`);
	};

	return (
		<header className="saw-header">
			<div className="saw-topbar">
				<div className="saw-container saw-topbar__inner">
					<p className="saw-topbar__tagline">Complete AC Spare Parts &amp; Refrigerant Solutions</p>
					<div className="saw-topbar__links">
						<a href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer">
							<MessageCircle size={14} strokeWidth={2.2} /> WhatsApp
						</a>
						<Link to="/bulk-enquiry">Bulk &amp; Wholesale</Link>
					</div>
				</div>
			</div>

			<div className="saw-container saw-header__inner">
				<Link to="/" className="saw-logo" aria-label="Supreme AC Works — home">
					<img
						src="/branding/logo-full.png"
						alt="Supreme AC Works"
						className="saw-logo__image saw-logo__image--header"
					/>
				</Link>

				<nav className="saw-nav" aria-label="Main navigation">
					{NAV_LINKS.map((link) => (
						<NavLink
							key={link.to}
							to={link.to}
							end={link.to === '/'}
							className={({ isActive }) => (isActive ? 'is-active' : '')}
						>
							{link.label}
						</NavLink>
					))}
				</nav>

				<div className="saw-header__actions">
					<button
						type="button"
						className="saw-icon-btn"
						aria-label="Search products"
						onClick={() => setIsSearchOpen((open) => !open)}
					>
						<Search size={20} strokeWidth={2.2} />
					</button>
					<button
						type="button"
						className="saw-icon-btn saw-icon-btn--cart"
						aria-label="Open cart"
						onClick={toggleCart}
					>
						<ShoppingCart size={20} strokeWidth={2.2} />
						{itemCount > 0 ? <span className="saw-cart-count">{itemCount}</span> : null}
					</button>
					<a
						className="saw-icon-btn saw-icon-btn--whatsapp"
						href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Chat on WhatsApp"
					>
						<MessageCircle size={20} strokeWidth={2.2} />
					</a>
					<button
						type="button"
						className="saw-icon-btn saw-burger"
						aria-label="Open menu"
						onClick={() => setIsMenuOpen(true)}
					>
						<Menu size={22} strokeWidth={2.2} />
					</button>
				</div>
			</div>

			{isSearchOpen ? (
				<div className="saw-header__search">
					<form className="saw-container saw-search" onSubmit={submitSearch}>
						<Search size={18} strokeWidth={2.2} />
						<input
							autoFocus
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Search R32, copper pipe, compressor, capacitor, AC stand…"
							aria-label="Search products"
						/>
						<button type="submit" className="saw-btn saw-btn--red saw-btn--sm">Search</button>
					</form>
				</div>
			) : null}

			{isMenuOpen ? (
				<div className="saw-mobile-menu" role="dialog" aria-label="Menu">
					<div className="saw-mobile-menu__head">
						<img
							src="/branding/logo-icon.png"
							alt="Supreme AC Works"
							className="saw-logo__image saw-logo__image--mobile"
						/>
						<button type="button" className="saw-icon-btn" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
							<X size={22} strokeWidth={2.2} />
						</button>
					</div>
					<form className="saw-search saw-search--mobile" onSubmit={submitSearch}>
						<Search size={18} strokeWidth={2.2} />
						<input
							type="search"
							value={query}
							onChange={(event) => setQuery(event.target.value)}
							placeholder="Search products…"
							aria-label="Search products"
						/>
					</form>
					<nav className="saw-mobile-menu__nav" aria-label="Mobile navigation">
						{NAV_LINKS.map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								end={link.to === '/'}
								onClick={() => setIsMenuOpen(false)}
								className={({ isActive }) => (isActive ? 'is-active' : '')}
							>
								{link.label}
							</NavLink>
						))}
					</nav>
					<a
						className="saw-btn saw-btn--whatsapp"
						href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)}
						target="_blank"
						rel="noopener noreferrer"
					>
						<MessageCircle size={18} strokeWidth={2.2} /> Chat on WhatsApp
					</a>
				</div>
			) : null}
		</header>
	);
}
