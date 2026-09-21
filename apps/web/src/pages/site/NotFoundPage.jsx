import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import { buildWhatsAppLink } from '@/lib/whatsapp';

// Catch-all route. Rendering a dedicated, noindex "not found" page (instead of
// silently showing the shop) avoids Google "Soft 404" reports for unknown URLs.
export default function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>Page not found — Supreme AC Works</title>
				<meta name="description" content="The page you are looking for could not be found. Browse our AC spare parts and HVAC materials or enquire on WhatsApp." />
				<meta name="robots" content="noindex,follow" />
			</Helmet>
			<SiteHeader />
			<section className="saw-section">
				<div className="saw-container saw-empty">
					<h1>Page not found</h1>
					<p>The page you are looking for does not exist or may have moved.</p>
					<Link to="/shop" className="saw-btn saw-btn--red">Browse the shop</Link>
					<a
						className="saw-btn saw-btn--whatsapp"
						href={buildWhatsAppLink('Hello Supreme AC Works, I could not find what I was looking for on your website. Please help with AC spare parts / materials.')}
						target="_blank"
						rel="noopener noreferrer"
					>
						<MessageCircle size={16} strokeWidth={2.2} /> Ask on WhatsApp
					</a>
					<Link to="/" className="saw-link-arrow">Back to home</Link>
				</div>
			</section>
			<SiteFooter />
		</>
	);
}

