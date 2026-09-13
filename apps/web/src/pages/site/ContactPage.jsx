import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import EnquiryForm from '@/components/site/EnquiryForm';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';
import { businessPhone, businessEmail, businessAddress, businessMapLink, businessHours, whatsAppDisplay } from '@/data/siteMeta';

const CONTACT_ROWS = [
	{ icon: Phone, label: 'Phone', value: businessPhone || '[I WILL ADD]' },
	{ icon: MessageCircle, label: 'WhatsApp', value: whatsAppDisplay },
	{ icon: Mail, label: 'Email', value: businessEmail || '[I WILL ADD]' },
	{ icon: MapPin, label: 'Address', value: businessAddress || '[I WILL ADD]', href: businessMapLink },
	{ icon: Clock, label: 'Business hours', value: businessHours || '[I WILL ADD]' },
];

export default function ContactPage() {
	return (
		<>
			<Helmet>
				<title>Contact Supreme AC Works — AC Spare Parts & HVAC Materials Enquiry</title>
				<meta name="description" content="Contact Supreme AC Works for AC spare parts, refrigerant gases, copper pipes and HVAC materials. Call, WhatsApp or send an enquiry for price and availability." />
			</Helmet>
			<SiteHeader />

			<section className="saw-page-head">
				<div className="saw-container">
					<p className="saw-eyebrow">Contact</p>
					<h1>Contact Supreme AC Works</h1>
					<p>Send your requirement — product name, size or model number — and get price and availability.</p>
				</div>
			</section>

			<section className="saw-section saw-section--flush-top">
				<div className="saw-container saw-contact-grid">
					<div>
						<div className="saw-contact-cards">
							{CONTACT_ROWS.map((row) => {
								const Icon = row.icon;
								return (
									<div key={row.label} className="saw-contact-card">
										<span className="saw-contact-card__icon"><Icon size={19} strokeWidth={2.2} /></span>
										<div>
											<strong>{row.label}</strong>
											<p>{row.href ? <a href={row.href} target="_blank" rel="noopener noreferrer">{row.value}</a> : row.value}</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className="saw-contact-actions">
							<a className="saw-btn saw-btn--whatsapp" href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer">
								<MessageCircle size={16} strokeWidth={2.2} /> WhatsApp
							</a>
							<a className="saw-btn saw-btn--dark-outline" href={businessPhone ? `tel:${businessPhone}` : '#'} aria-disabled={!businessPhone}>
								<Phone size={16} strokeWidth={2.2} /> Call
							</a>
							<a className="saw-btn saw-btn--dark-outline" href={businessEmail ? `mailto:${businessEmail}` : '#'} aria-disabled={!businessEmail}>
								<Mail size={16} strokeWidth={2.2} /> Email
							</a>
						</div>
						<a className="saw-map-placeholder" href={businessMapLink} target="_blank" rel="noopener noreferrer">
							<MapPin size={22} strokeWidth={2} />
							<p>View this address on Google Maps</p>
						</a>
					</div>

					<div className="saw-panel">
						<EnquiryForm
							type="contact"
							title="Send an Enquiry"
							subtitle="Fill in your details and requirement — we will respond with price and availability."
						/>
					</div>
				</div>
			</section>

			<SiteFooter />
		</>
	);
}
