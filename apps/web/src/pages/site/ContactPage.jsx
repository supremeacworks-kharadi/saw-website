import React from 'react';
import { Helmet } from 'react-helmet';
import { Phone, MessageCircle, Mail, MapPin, Clock, User } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import EnquiryForm from '@/components/site/EnquiryForm';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';
import {
	businessLocations,
	businessPhone,
	businessPhoneNumbers,
	businessEmail,
	businessAddress,
	businessMapLink,
	businessHours,
	whatsAppDisplay,
} from '@/data/siteMeta';

const CONTACT_ROWS = [
	{ icon: Phone, label: 'Phone', phoneNumbers: businessPhoneNumbers },
	{ icon: MessageCircle, label: 'WhatsApp', value: whatsAppDisplay },
	{ icon: Mail, label: 'Email', value: businessEmail || 'Not available' },
	{ icon: MapPin, label: 'Address', value: businessAddress || 'Not available', href: businessMapLink },
	{ icon: Clock, label: 'Business hours', value: businessHours || 'Not available' },
];

const hasMultipleLocations = businessLocations.length > 1;

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
											<p>
												{row.phoneNumbers?.length ? (
													<span className="saw-contact-phone-links">
														{row.phoneNumbers.map((phone) => (
															<a key={phone.value} href={`tel:${phone.value}`}>{phone.display}</a>
														))}
													</span>
												) : row.href && row.value !== 'Not available' ? (
													<a href={row.href} target="_blank" rel="noopener noreferrer">{row.value}</a>
												) : row.value}
											</p>
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

						{hasMultipleLocations ? (
							<div className="saw-locations-list">
								<h2>All shop locations</h2>
								<div className="saw-locations-list__grid">
									{businessLocations.map((location) => (
										<div key={location.id || location.name} className="saw-location-card">
											<div className="saw-location-card__head">
												<strong>{location.name || 'Shop'}</strong>
												{location.isPrimary ? <span>Primary</span> : null}
											</div>
											<ul>
												{location.contactPerson ? (
													<li><User size={15} strokeWidth={2.2} /> {location.contactPerson}</li>
												) : null}
												<li>
													<Phone size={15} strokeWidth={2.2} />
													{location.phoneNumbers?.length ? (
														<span className="saw-contact-phone-links">
															{location.phoneNumbers.map((phone) => (
																<a key={phone.value} href={`tel:${phone.value}`}>{phone.display}</a>
															))}
														</span>
													) : 'Not available'}
												</li>
												<li><Mail size={15} strokeWidth={2.2} /> {location.email || 'Not available'}</li>
												<li>
													<MapPin size={15} strokeWidth={2.2} />
													{location.address && location.mapLink ? (
														<a href={location.mapLink} target="_blank" rel="noopener noreferrer">{location.address}</a>
													) : location.address || 'Not available'}
												</li>
												<li><Clock size={15} strokeWidth={2.2} /> {location.hours || 'Not available'}</li>
											</ul>
										</div>
									))}
								</div>
							</div>
						) : null}
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
