import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MessageCircle, Package, IndianRupee, Headset, Truck, Zap, Layers } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { IMAGES } from '@/data/catalogue';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';
import { siteName, defaultOgImage } from '@/data/siteMeta';

const FOCUS_POINTS = [
	{ icon: Package, title: 'Product Availability', text: 'A wide, practical range of AC and HVAC materials kept easy to browse and enquire about.' },
	{ icon: IndianRupee, title: 'Competitive Pricing', text: 'Fair, market-linked prices for technicians, contractors, dealers and businesses.' },
	{ icon: Headset, title: 'Professional Support', text: 'Help with sizes, model numbers and compatibility before you place an order.' },
	{ icon: Truck, title: 'Reliable Supply', text: 'Dependable sourcing for day-to-day service work and project requirements.' },
	{ icon: Zap, title: 'Easy Enquiry Process', text: 'Send your requirement on WhatsApp or through a form — get price and availability directly.' },
	{ icon: Layers, title: 'Wide AC / HVAC Range', text: 'Refrigerants, copper, compressors, motors, insulation, electricals, stands, PCBs and tools.' },
];

export default function AboutPage() {
	return (
		<>
			<Helmet>
				<title>About Supreme AC Works — AC Spare Parts & HVAC Materials Supplier</title>
				<meta name="description" content="Supreme AC Works provides AC spare parts, refrigerants and HVAC installation materials for technicians, contractors, dealers and professional customers across India." />
			</Helmet>
			<Seo
				title="About Supreme AC Works — AC Spare Parts & HVAC Materials Supplier"
				description="Supreme AC Works provides AC spare parts, refrigerants and HVAC installation materials for technicians, contractors, dealers and professional customers across India."
				siteName={siteName}
				image={defaultOgImage}
			/>
			<SiteHeader />

			<section className="saw-page-head">
				<div className="saw-container">
					<p className="saw-eyebrow">About Us</p>
					<h1>About Supreme AC Works</h1>
					<p>Complete AC Spare Parts &amp; Refrigerant Solutions.</p>
				</div>
			</section>

			<section className="saw-section saw-section--flush-top">
				<div className="saw-container saw-split">
					<Reveal className="saw-split__copy">
						<h2>Everything You Need for AC Installation, Service &amp; Maintenance</h2>
						<p>
							Supreme AC Works is an Indian supplier of AC spare parts, refrigerant
							gases and HVAC installation materials. We serve AC technicians, HVAC
							contractors, installation teams, service companies, refrigeration
							technicians, electricians, spare-parts dealers and professional buyers.
						</p>
						<p>
							Our catalogue covers refrigerant gases (R32, R410A, R134a), copper pipes
							and coils, AC compressors, AC motors, insulation, flexible wires and
							electrical materials, AC stands, PCB and electronic components, complete
							installation material and HVAC tools and accessories.
						</p>
						<p>
							Because many HVAC product prices change with the market, we keep enquiry
							simple: find your product, send it to us on WhatsApp or through an
							enquiry form, and get the best price and availability confirmed directly.
						</p>
						<div className="saw-split__cta">
							<Link to="/shop" className="saw-btn saw-btn--red">Browse Products</Link>
							<a
								className="saw-btn saw-btn--whatsapp-outline"
								href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)}
								target="_blank"
								rel="noopener noreferrer"
							>
								<MessageCircle size={16} strokeWidth={2.2} /> Enquire on WhatsApp
							</a>
						</div>
					</Reveal>
					<Reveal className="saw-split__media" delay={0.1}>
						<img src={IMAGES.hero} alt="AC spare parts and HVAC materials supplied by Supreme AC Works" loading="lazy" />
					</Reveal>
				</div>
			</section>

			<section className="saw-section saw-section--tint">
				<div className="saw-container">
					<Reveal>
						<div className="saw-section__head saw-section__head--center">
							<div>
								<p className="saw-eyebrow">What We Focus On</p>
								<h2>Built for Professional Buyers</h2>
							</div>
						</div>
					</Reveal>
					<div className="saw-why-grid">
						{FOCUS_POINTS.map((point, index) => {
							const Icon = point.icon;
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

			<SiteFooter />
		</>
	);
}
