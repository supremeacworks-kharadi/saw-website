import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import {
	Search, MessageCircle, ArrowRight, ShieldCheck, IndianRupee, Layers,
	Headset, Truck, Zap, Package, Wrench, Snowflake, Cog, CircuitBoard, Cable,
} from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import CategoryGrid from '@/components/site/CategoryGrid';
import ProductCard from '@/components/site/ProductCard';
import Reveal from '@/components/Reveal';
import { IMAGES, COPPER_SIZES, REFRIGERANT_TYPES, WHY_POINTS, INSTALLATION_KIT_ITEMS } from '@/data/catalogue';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE, BULK_ENQUIRY_MESSAGE } from '@/lib/whatsapp';

const WHY_ICONS = [Layers, IndianRupee, Headset, Package, MessageCircle, Zap];

const SPARES_TILES = [
	{ name: 'AC Compressors', text: 'Rotary & scroll compressors by capacity and brand.', image: IMAGES.compressors, to: '/category/ac-compressors', icon: Cog },
	{ name: 'AC Motors', text: 'Indoor, outdoor, condenser and blower motors.', image: IMAGES.motors, to: '/category/ac-motors', icon: Wrench },
	{ name: 'PCB & Electronics', text: 'Control boards, sensors, receivers and displays.', image: IMAGES.pcb, to: '/category/pcb-electronics', icon: CircuitBoard },
	{ name: 'Wires & Electrical', text: 'Flexible wires, capacitors, contactors and relays.', image: IMAGES.electrical, to: '/category/electrical-materials', icon: Cable },
];

function FeaturedProducts() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			try {
				const api = await import('@/api/EcommerceApi.js');
				const result = await api.getProducts({ limit: 8, exclude_types: 'subscription' });
				const list = (Array.isArray(result) ? result : result?.products) || [];
				if (!cancelled) setProducts(list);
			} catch (err) {
				console.warn('[HomePage] failed to load featured products', err);
			} finally {
				if (!cancelled) setIsLoading(false);
			}
		})();
		return () => { cancelled = true; };
	}, []);

	if (isLoading) {
		return (
			<div className="saw-product-grid">
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="saw-product-card saw-product-card--skeleton" />
				))}
			</div>
		);
	}

	if (!products.length) {
		return <p className="saw-empty">Products are being added. Send your requirement on WhatsApp for price and availability.</p>;
	}

	return (
		<div className="saw-product-grid">
			{products.map((product) => <ProductCard key={product.id} product={product} />)}
		</div>
	);
}

export default function HomePage() {
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	const submitSearch = (event) => {
		event.preventDefault();
		const q = query.trim();
		if (q) navigate(`/shop?q=${encodeURIComponent(q)}`);
	};

	return (
		<>
			<Helmet>
				<title>Supreme AC Works — AC Spare Parts, Refrigerant Gas, Copper Pipe & HVAC Materials Supplier in India</title>
				<meta name="description" content="Supreme AC Works supplies AC spare parts, R32 / R410A / R134a refrigerant gases, AC copper pipes, compressors, motors, insulation, electrical material, AC stands and HVAC tools to technicians, contractors and dealers across India. Enquire on WhatsApp for best prices." />
			</Helmet>
			<SiteHeader />

			{/* ── HERO ─────────────────────────────────────────────── */}
			<section className="saw-hero">
				<div className="saw-container saw-hero__inner">
					<div className="saw-hero__copy">
						<p className="saw-eyebrow saw-eyebrow--light">Supreme AC Works</p>
						<h1>AC Spare Parts, Refrigerants &amp; HVAC Materials — All in One Place</h1>
						<p className="saw-hero__sub">
							Quality AC materials and spare parts for technicians, contractors,
							dealers and HVAC professionals.
						</p>
						<form className="saw-hero__search" onSubmit={submitSearch}>
							<Search size={18} strokeWidth={2.2} />
							<input
								type="search"
								value={query}
								onChange={(event) => setQuery(event.target.value)}
								placeholder="Search R32, 5/8 copper pipe, compressor, capacitor…"
								aria-label="Search products"
							/>
							<button type="submit" className="saw-btn saw-btn--red">Search</button>
						</form>
						<div className="saw-hero__cta">
							<Link to="/shop" className="saw-btn saw-btn--red saw-btn--lg">Shop Products</Link>
							<a
								className="saw-btn saw-btn--whatsapp saw-btn--lg"
								href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle size={18} strokeWidth={2.2} /> Get Price on WhatsApp
							</a>
						</div>
					</div>
					<div className="saw-hero__media">
						<img src={IMAGES.hero} alt="AC spare parts, copper coils, refrigerant cylinder and HVAC tools" />
					</div>
				</div>
				<div className="saw-hero__strip">
					<div className="saw-container">
						<span>AC Spare Parts</span><span>Refrigerant Gases</span><span>Copper Pipes</span>
						<span>Installation Material</span><span>HVAC Tools</span>
					</div>
				</div>
			</section>

			{/* ── SHOP BY CATEGORY ─────────────────────────────────── */}
			<section className="saw-section" id="categories">
				<div className="saw-container">
					<Reveal>
						<div className="saw-section__head">
							<div>
								<p className="saw-eyebrow">Catalogue</p>
								<h2>Shop by Category</h2>
							</div>
							<Link to="/categories" className="saw-link-arrow">
								All categories <ArrowRight size={15} strokeWidth={2.4} />
							</Link>
						</div>
					</Reveal>
					<CategoryGrid />
				</div>
			</section>

			{/* ── FEATURED PRODUCTS ────────────────────────────────── */}
			<section className="saw-section saw-section--tint">
				<div className="saw-container">
					<Reveal>
						<div className="saw-section__head">
							<div>
								<p className="saw-eyebrow">In Stock</p>
								<h2>Featured Products</h2>
							</div>
							<Link to="/shop" className="saw-link-arrow">
								View all products <ArrowRight size={15} strokeWidth={2.4} />
							</Link>
						</div>
					</Reveal>
					<FeaturedProducts />
				</div>
			</section>

			{/* ── REFRIGERANT GASES ────────────────────────────────── */}
			<section className="saw-section saw-section--dark">
				<div className="saw-container saw-split">
					<Reveal className="saw-split__media">
						<img src={IMAGES.refrigerants} alt="R32, R410A and R134a refrigerant gas cylinders" loading="lazy" />
					</Reveal>
					<Reveal className="saw-split__copy" delay={0.1}>
						<p className="saw-eyebrow saw-eyebrow--light">Refrigerant Gases</p>
						<h2>R32, R410A, R134a &amp; Other Refrigerants</h2>
						<p>
							Sealed refrigerant cylinders from brands like Floron and Stallion, with
							cylinder size, net weight and packaging details available on enquiry.
							Refrigerant prices change with the market — ask for today's best price.
						</p>
						<div className="saw-chips">
							{REFRIGERANT_TYPES.map((type) => (
								<Link key={type} to={`/shop?q=${encodeURIComponent(type.replace(' gas', ''))}`} className="saw-chip saw-chip--dark">{type}</Link>
							))}
						</div>
						<div className="saw-split__cta">
							<Link to="/category/refrigerant-gases" className="saw-btn saw-btn--red">View Refrigerants</Link>
							<a
								className="saw-btn saw-btn--whatsapp-outline saw-btn--on-dark"
								href={buildWhatsAppLink('Hello Supreme AC Works, I want to enquire about refrigerant gas (R32 / R410A / R134a). Please share your best price and availability.')}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle size={16} strokeWidth={2.2} /> Get Best Price
							</a>
						</div>
					</Reveal>
				</div>
			</section>

			{/* ── COPPER & INSTALLATION MATERIAL ───────────────────── */}
			<section className="saw-section">
				<div className="saw-container saw-split saw-split--reverse">
					<Reveal className="saw-split__copy">
						<p className="saw-eyebrow">Copper &amp; Installation Material</p>
						<h2>Copper Pipes, Insulation, Wires &amp; Everything for Installation</h2>
						<p>
							AC copper pipe coils in all standard sizes, insulation by meter or roll,
							flexible wires, drain pipes, stands, tape and fasteners — everything you
							need for AC installation, service and maintenance.
						</p>
						<div className="saw-chips">
							{COPPER_SIZES.map((size) => (
								<Link key={size} to={`/shop?q=${encodeURIComponent(`${size} copper`)}`} className="saw-chip">{size} copper</Link>
							))}
						</div>
						<div className="saw-kit-box">
							<h3><Package size={18} strokeWidth={2.2} /> Build Your AC Installation Kit</h3>
							<p>Enquire about multiple materials together in one request:</p>
							<div className="saw-chips">
								{INSTALLATION_KIT_ITEMS.map((item) => <span key={item} className="saw-chip saw-chip--soft">{item}</span>)}
							</div>
							<Link to="/bulk-enquiry" className="saw-btn saw-btn--red">Enquire for a Kit</Link>
						</div>
					</Reveal>
					<Reveal className="saw-split__media" delay={0.1}>
						<img src={IMAGES.installation} alt="AC installation material kit — copper pipe, insulation, wire and drain pipe" loading="lazy" />
					</Reveal>
				</div>
			</section>

			{/* ── AC SPARE PARTS ───────────────────────────────────── */}
			<section className="saw-section saw-section--tint">
				<div className="saw-container">
					<Reveal>
						<div className="saw-section__head">
							<div>
								<p className="saw-eyebrow">Spare Parts</p>
								<h2>AC Spare Parts</h2>
							</div>
							<Link to="/shop" className="saw-link-arrow">
								Browse all spares <ArrowRight size={15} strokeWidth={2.4} />
							</Link>
						</div>
					</Reveal>
					<div className="saw-spares-grid">
						{SPARES_TILES.map((tile) => {
							const Icon = tile.icon;
							return (
								<Link key={tile.name} to={tile.to} className="saw-spare-tile">
									<img src={tile.image} alt={tile.name} loading="lazy" />
									<div className="saw-spare-tile__body">
										<Icon size={20} strokeWidth={2.2} />
										<h3>{tile.name}</h3>
										<p>{tile.text}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</section>

			{/* ── BULK & CONTRACTOR SUPPLY ─────────────────────────── */}
			<section className="saw-bulk">
				<div className="saw-container saw-bulk__inner">
					<div>
						<p className="saw-eyebrow saw-eyebrow--light">Bulk &amp; Contractor Supply</p>
						<h2>Need material in bulk?</h2>
						<p>
							Contact Supreme AC Works for bulk requirements, contractor supplies
							and wholesale enquiries.
						</p>
					</div>
					<div className="saw-bulk__cta">
						<Link to="/bulk-enquiry" className="saw-btn saw-btn--white saw-btn--lg">Request Bulk Quote</Link>
						<a
							className="saw-btn saw-btn--outline-white saw-btn--lg"
							href={buildWhatsAppLink(BULK_ENQUIRY_MESSAGE)}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle size={17} strokeWidth={2.2} /> Bulk Enquiry on WhatsApp
						</a>
					</div>
				</div>
			</section>

			{/* ── WHY SUPREME AC WORKS ─────────────────────────────── */}
			<section className="saw-section">
				<div className="saw-container">
					<Reveal>
						<div className="saw-section__head saw-section__head--center">
							<div>
								<p className="saw-eyebrow">Why Supreme AC Works?</p>
								<h2>Why Professionals Choose Supreme AC Works</h2>
							</div>
						</div>
					</Reveal>
					<div className="saw-why-grid">
						{WHY_POINTS.map((point, index) => {
							const Icon = WHY_ICONS[index] || ShieldCheck;
							return (
								<Reveal key={point.title} delay={index * 0.05} className="saw-why-card">
									<span className="saw-why-card__icon"><Icon size={22} strokeWidth={2} /></span>
									<h3>{point.title}</h3>
									<p>{point.text}</p>
								</Reveal>
							);
						})}
					</div>
				</div>
			</section>

			{/* ── WHATSAPP CTA ─────────────────────────────────────── */}
			<section className="saw-section saw-section--dark saw-wa-cta">
				<div className="saw-container">
					<Snowflake size={34} strokeWidth={1.6} className="saw-wa-cta__icon" />
					<h2>Looking for a specific AC spare part or material?</h2>
					<p>Send us your requirement on WhatsApp — product name, model number or a photo — and get price and availability.</p>
					<a
						className="saw-btn saw-btn--whatsapp saw-btn--lg"
						href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)}
						target="_blank"
						rel="noopener noreferrer"
					>
						<MessageCircle size={18} strokeWidth={2.2} /> Chat with Supreme AC Works
					</a>
				</div>
			</section>

			<SiteFooter />
		</>
	);
}
