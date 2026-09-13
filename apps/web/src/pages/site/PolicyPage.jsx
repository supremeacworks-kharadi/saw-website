import React from 'react';
import { Helmet } from 'react-helmet';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';

const POLICIES = {
	'privacy-policy': {
		title: 'Privacy Policy',
		intro: 'This policy explains how Supreme AC Works handles information shared with us through this website, enquiry forms and WhatsApp.',
		sections: [
			{ heading: 'Information we collect', body: 'When you submit an enquiry or contact us, we collect the details you provide — such as your name, company, mobile number, WhatsApp number, location and product requirements — only to respond to your enquiry and fulfil orders.' },
			{ heading: 'How we use it', body: 'Your information is used to respond to enquiries, confirm prices and availability, process orders and arrange delivery. We do not sell your personal information to third parties.' },
			{ heading: 'Third-party services', body: 'Enquiries sent via WhatsApp are handled by WhatsApp under its own privacy policy. Online payments, when enabled, are processed by the payment gateway under its own terms.' },
			{ heading: 'Contact', body: 'For any privacy-related questions, contact Supreme AC Works through the Contact page.' },
		],
	},
	'terms-and-conditions': {
		title: 'Terms & Conditions',
		intro: 'These terms govern the use of the Supreme AC Works website and purchases made through it.',
		sections: [
			{ heading: 'Product information', body: 'Product images, specifications and descriptions are provided for reference. Specifications such as brand, model, size and compatibility are confirmed at the time of enquiry or order.' },
			{ heading: 'Pricing', body: 'Many HVAC product prices change with market rates. Prices shown on the website are indicative; the final price is confirmed when you enquire or place an order. "Get Best Price" enquiries receive the current rate directly.' },
			{ heading: 'Orders & availability', body: 'Orders are confirmed only after price and stock availability are confirmed by Supreme AC Works. We may decline or cancel an order if a product is unavailable.' },
			{ heading: 'Payments', body: 'Payment instructions (including UPI, where applicable) are shared at the time of order confirmation. Online payment gateway integration may be added in the future.' },
		],
	},
	'shipping-policy': {
		title: 'Shipping Policy',
		intro: 'How Supreme AC Works handles dispatch and delivery of AC spare parts and HVAC materials.',
		sections: [
			{ heading: 'Dispatch', body: 'Orders are dispatched after confirmation of price, availability and payment. Dispatch timelines depend on the products ordered and are confirmed at the time of order.' },
			{ heading: 'Delivery', body: 'Delivery options and charges depend on your location and order size. Bulk and contractor orders may be delivered separately by arrangement.' },
			{ heading: 'Damages in transit', body: 'Please check your delivery on receipt and report any transit damage immediately with photos so we can resolve it.' },
		],
	},
	'return-refund-policy': {
		title: 'Return / Refund Policy',
		intro: 'Our approach to returns and refunds for AC spare parts and HVAC materials.',
		sections: [
			{ heading: 'Returns', body: 'Returns are accepted for incorrect or defective items reported promptly after delivery, subject to verification. Products must be unused and in original packaging. Refrigerant cylinders and cut-to-size materials (such as copper pipe sold per meter) may not be returnable once opened or cut.' },
			{ heading: 'Refunds', body: 'Approved refunds are processed through the original payment method or by arrangement, after the returned item is received and inspected.' },
			{ heading: 'How to request', body: 'Contact Supreme AC Works on WhatsApp or through the Contact page with your order details and photos of the issue.' },
		],
	},
};

export default function PolicyPage({ policyKey }) {
	const policy = POLICIES[policyKey] || POLICIES['privacy-policy'];

	return (
		<>
			<Helmet>
				<title>{policy.title} — Supreme AC Works</title>
				<meta name="description" content={`${policy.title} of Supreme AC Works — AC spare parts, refrigerants and HVAC materials supplier.`} />
			</Helmet>
			<SiteHeader />
			<section className="saw-page-head">
				<div className="saw-container">
					<p className="saw-eyebrow">Supreme AC Works</p>
					<h1>{policy.title}</h1>
					<p>{policy.intro}</p>
				</div>
			</section>
			<section className="saw-section saw-section--flush-top">
				<div className="saw-container saw-policy">
					{policy.sections.map((section) => (
						<div key={section.heading}>
							<h2>{section.heading}</h2>
							<p>{section.body}</p>
						</div>
					))}
				</div>
			</section>
			<SiteFooter />
		</>
	);
}
