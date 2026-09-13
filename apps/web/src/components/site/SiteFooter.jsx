import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CATEGORIES } from '@/data/catalogue';
import { buildWhatsAppLink, GENERIC_ENQUIRY_MESSAGE } from '@/lib/whatsapp';
import { businessPhone, businessEmail, businessAddress, businessMapLink, whatsAppDisplay } from '@/data/siteMeta';

const QUICK_LINKS = [
	{ to: '/', label: 'Home' },
	{ to: '/shop', label: 'Shop' },
	{ to: '/categories', label: 'Categories' },
	{ to: '/about', label: 'About Us' },
	{ to: '/contact', label: 'Contact' },
	{ to: '/bulk-enquiry', label: 'Bulk Enquiry' },
];

const POLICY_LINKS = [
	{ to: '/privacy-policy', label: 'Privacy Policy' },
	{ to: '/terms-and-conditions', label: 'Terms & Conditions' },
	{ to: '/shipping-policy', label: 'Shipping Policy' },
	{ to: '/return-refund-policy', label: 'Return / Refund Policy' },
];

export default function SiteFooter() {
	return (
		<footer className="saw-footer">
			<div className="saw-container saw-footer__grid">
				<div className="saw-footer__brand">
					<Link to="/" className="saw-logo saw-logo--footer" aria-label="Supreme AC Works — home">
						<img
							src="/branding/logo-full.png"
							alt="Supreme AC Works"
							className="saw-logo__image saw-logo__image--footer"
						/>
					</Link>
					<p>
						Everything you need for AC installation, service and maintenance — for
						technicians, contractors, dealers and HVAC professionals.
					</p>
					<div className="saw-footer__social">
						<a href={buildWhatsAppLink(GENERIC_ENQUIRY_MESSAGE)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
							<MessageCircle size={18} strokeWidth={2.2} />
						</a>
						<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
							<Facebook size={18} strokeWidth={2.2} />
						</a>
						<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<Instagram size={18} strokeWidth={2.2} />
						</a>
						<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<Linkedin size={18} strokeWidth={2.2} />
						</a>
					</div>
				</div>

				<div>
					<h4>Quick Links</h4>
					<ul>
						{QUICK_LINKS.map((link) => (
							<li key={link.to}><Link to={link.to}>{link.label}</Link></li>
						))}
					</ul>
				</div>

				<div>
					<h4>Categories</h4>
					<ul>
						{CATEGORIES.slice(0, 7).map((category) => (
							<li key={category.slug}>
								<Link to={`/category/${category.slug}`}>{category.name}</Link>
							</li>
						))}
						<li><Link to="/categories">All Categories</Link></li>
					</ul>
				</div>

				<div>
					<h4>Contact</h4>
					<ul className="saw-footer__contact">
						<li><Phone size={15} strokeWidth={2.2} /> {businessPhone || '[I WILL ADD]'}</li>
						<li><MessageCircle size={15} strokeWidth={2.2} /> WhatsApp: {whatsAppDisplay}</li>
						<li><Mail size={15} strokeWidth={2.2} /> {businessEmail || '[I WILL ADD]'}</li>
						<li><MapPin size={15} strokeWidth={2.2} /> <a href={businessMapLink} target="_blank" rel="noopener noreferrer">{businessAddress || '[I WILL ADD]'}</a></li>
					</ul>
					<h4 className="saw-footer__policies-title">Policies</h4>
					<ul>
						{POLICY_LINKS.map((link) => (
							<li key={link.to}><Link to={link.to}>{link.label}</Link></li>
						))}
					</ul>
				</div>
			</div>
			<div className="saw-footer__bottom">
				<div className="saw-container">
					<p>© {new Date().getFullYear()} SUPREME AC WORKS. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
