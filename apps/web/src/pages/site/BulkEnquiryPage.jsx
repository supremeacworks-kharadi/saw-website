import React from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle, Package, Truck, IndianRupee } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import EnquiryForm from '@/components/site/EnquiryForm';
import { buildWhatsAppLink, BULK_ENQUIRY_MESSAGE } from '@/lib/whatsapp';

const BULK_POINTS = [
	{ icon: Package, title: 'Contractor Supplies', text: 'Regular material supply for AC installation and service teams.' },
	{ icon: Truck, title: 'Dealer & Wholesale', text: 'Bulk quantities of refrigerants, copper, insulation and spares.' },
	{ icon: IndianRupee, title: 'Best Bulk Pricing', text: 'Quantity-based pricing confirmed directly on enquiry.' },
];

export default function BulkEnquiryPage() {
	return (
		<>
			<Helmet>
				<title>Bulk & Wholesale Enquiry — AC Spare Parts & HVAC Materials | Supreme AC Works</title>
				<meta name="description" content="Request a bulk quote from Supreme AC Works for refrigerant gases, copper pipes, AC spare parts and HVAC installation materials. Contractor supplies and wholesale enquiries welcome." />
			</Helmet>
			<SiteHeader />

			<section className="saw-page-head saw-page-head--red">
				<div className="saw-container">
					<p className="saw-eyebrow saw-eyebrow--light">Bulk &amp; Wholesale Enquiry</p>
					<h1>Need material in bulk?</h1>
					<p>Contact Supreme AC Works for bulk requirements, contractor supplies and wholesale enquiries.</p>
				</div>
			</section>

			<section className="saw-section saw-section--flush-top">
				<div className="saw-container saw-contact-grid">
					<div>
						<div className="saw-contact-cards">
							{BULK_POINTS.map((point) => {
								const Icon = point.icon;
								return (
									<div key={point.title} className="saw-contact-card">
										<span className="saw-contact-card__icon"><Icon size={19} strokeWidth={2.2} /></span>
										<div>
											<strong>{point.title}</strong>
											<p>{point.text}</p>
										</div>
									</div>
								);
							})}
						</div>
						<p className="saw-bulk-note">
							Prefer WhatsApp? Send your requirement list directly — include product
							names, sizes and quantities for the fastest quote.
						</p>
						<a
							className="saw-btn saw-btn--whatsapp saw-btn--lg"
							href={buildWhatsAppLink(BULK_ENQUIRY_MESSAGE)}
							target="_blank"
							rel="noopener noreferrer"
						>
							<MessageCircle size={17} strokeWidth={2.2} /> Bulk Enquiry on WhatsApp
						</a>
					</div>

					<div className="saw-panel">
						<EnquiryForm
							type="bulk"
							title="Request Bulk Quote"
							subtitle="Tell us what you need — we will respond with pricing and availability."
						/>
					</div>
				</div>
			</section>

			<SiteFooter />
		</>
	);
}
