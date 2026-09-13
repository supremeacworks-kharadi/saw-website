import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const inputClass = 'saw-input';

/**
 * Bulk / contact enquiry form. Submissions are stored in the PocketBase
 * `enquiries` collection and can also be continued on WhatsApp.
 */
export default function EnquiryForm({ type = 'bulk', title, subtitle }) {
	const isBulk = type === 'bulk';
	const [form, setForm] = useState({
		name: '',
		company: '',
		mobile: '',
		whatsapp: '',
		product: '',
		quantity: '',
		location: '',
		message: '',
	});
	const [status, setStatus] = useState('idle');
	const [error, setError] = useState('');

	const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

	const validate = () => {
		if (!form.name.trim()) return 'Please enter your name.';
		if (!form.mobile.trim()) return 'Please enter your mobile number.';
		if (form.mobile.replace(/\D/g, '').length < 10) return 'Please enter a valid 10-digit mobile number.';
		if (isBulk && !form.product.trim()) return 'Please tell us which product or material you need.';
		return '';
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const validationError = validate();
		if (validationError) {
			setError(validationError);
			return;
		}
		setError('');
		setStatus('saving');
		try {
			await pb.collection('enquiries').create({
				type,
				name: form.name.trim(),
				company: form.company.trim(),
				mobile: form.mobile.trim(),
				whatsapp: form.whatsapp.trim(),
				product: form.product.trim(),
				quantity: form.quantity.trim(),
				location: form.location.trim(),
				message: form.message.trim(),
			});
			setStatus('success');
		} catch (err) {
			console.warn('[EnquiryForm] submit failed', err);
			setStatus('error');
		}
	};

	const whatsAppText = [
		`Hello Supreme AC Works, ${isBulk ? 'I have a bulk / wholesale requirement.' : 'I have an enquiry.'}`,
		form.name ? `Name: ${form.name}.` : '',
		form.company ? `Company: ${form.company}.` : '',
		form.product ? `Product required: ${form.product}.` : '',
		form.quantity ? `Quantity: ${form.quantity}.` : '',
		form.location ? `Location: ${form.location}.` : '',
		form.message ? `Message: ${form.message}.` : '',
		'Please share your best price and availability.',
	].filter(Boolean).join(' ');

	if (status === 'success') {
		return (
			<div className="saw-form-success">
				<CheckCircle2 size={40} strokeWidth={1.8} />
				<h3>Enquiry submitted</h3>
				<p>Thank you, {form.name.split(' ')[0]}. Supreme AC Works will respond to your enquiry shortly.</p>
				<a
					className="saw-btn saw-btn--whatsapp"
					href={buildWhatsAppLink(whatsAppText)}
					target="_blank"
					rel="noopener noreferrer"
				>
					<MessageCircle size={17} strokeWidth={2.2} /> Also send on WhatsApp
				</a>
			</div>
		);
	}

	return (
		<form className="saw-form" onSubmit={handleSubmit} noValidate>
			{title ? <h3 className="saw-form__title">{title}</h3> : null}
			{subtitle ? <p className="saw-form__subtitle">{subtitle}</p> : null}

			<div className="saw-form__grid">
				<label className="saw-field">
					<span>Name *</span>
					<input className={inputClass} value={form.name} onChange={update('name')} placeholder="Your full name" />
				</label>
				{isBulk ? (
					<label className="saw-field">
						<span>Company</span>
						<input className={inputClass} value={form.company} onChange={update('company')} placeholder="Company / firm name" />
					</label>
				) : null}
				<label className="saw-field">
					<span>Mobile number *</span>
					<input className={inputClass} type="tel" value={form.mobile} onChange={update('mobile')} placeholder="10-digit mobile number" />
				</label>
				<label className="saw-field">
					<span>WhatsApp number</span>
					<input className={inputClass} type="tel" value={form.whatsapp} onChange={update('whatsapp')} placeholder="If different from mobile" />
				</label>
				<label className="saw-field">
					<span>{isBulk ? 'Product required *' : 'Product / material'}</span>
					<input className={inputClass} value={form.product} onChange={update('product')} placeholder="e.g. R32 gas, 5/8&quot; copper pipe, 1.5 ton compressor" />
				</label>
				{isBulk ? (
					<label className="saw-field">
						<span>Quantity</span>
						<input className={inputClass} value={form.quantity} onChange={update('quantity')} placeholder="e.g. 10 cylinders, 5 coils" />
					</label>
				) : null}
				{isBulk ? (
					<label className="saw-field">
						<span>Location</span>
						<input className={inputClass} value={form.location} onChange={update('location')} placeholder="City / delivery location" />
					</label>
				) : null}
				<label className="saw-field saw-field--full">
					<span>Message</span>
					<textarea className={inputClass} rows={4} value={form.message} onChange={update('message')} placeholder="Sizes, brands, model numbers or any other details" />
				</label>
			</div>

			{error ? (
				<p className="saw-form__error"><AlertCircle size={15} strokeWidth={2.2} /> {error}</p>
			) : null}
			{status === 'error' ? (
				<p className="saw-form__error"><AlertCircle size={15} strokeWidth={2.2} /> Could not submit right now. Please try again or send your enquiry on WhatsApp.</p>
			) : null}

			<div className="saw-form__actions">
				<button type="submit" className="saw-btn saw-btn--red" disabled={status === 'saving'}>
					<Send size={16} strokeWidth={2.2} />
					{status === 'saving' ? 'Submitting…' : isBulk ? 'Request Bulk Quote' : 'Submit Enquiry'}
				</button>
				<a
					className="saw-btn saw-btn--whatsapp-outline"
					href={buildWhatsAppLink(whatsAppText)}
					target="_blank"
					rel="noopener noreferrer"
				>
					<MessageCircle size={16} strokeWidth={2.2} /> Send on WhatsApp
				</a>
			</div>
		</form>
	);
}
