import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/catalogue';

export default function CategoryGrid({ limit }) {
	const categories = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;

	return (
		<div className="saw-cat-grid">
			{categories.map((category) => {
				const subs = category.subcategories || [];
				return (
					<div key={category.slug} className="saw-cat-card">
						<Link to={`/category/${category.slug}`} className="saw-cat-card__main">
							<div className="saw-cat-card__media">
								<img src={category.image} alt={category.name} loading="lazy" decoding="async" />
							</div>
							<div className="saw-cat-card__body">
								<h3>{category.name}</h3>
								<span className="saw-cat-card__link">
									View products <ArrowRight size={14} strokeWidth={2.4} />
								</span>
							</div>
						</Link>

						{/* Hover flyout — subcategories (desktop/pointer only, see CSS @media hover) */}
						{subs.length ? (
							<div className="saw-cat-card__flyout" role="group" aria-label={`${category.name} subcategories`}>
								<ul className="saw-cat-card__subs">
									{subs.map((sub) => (
										<li key={sub.slug}>
											<Link to={`/category/${category.slug}?sub=${sub.slug}`}>{sub.name}</Link>
										</li>
									))}
								</ul>
								<Link to={`/category/${category.slug}`} className="saw-cat-card__viewall">
									View all {category.name} <ArrowRight size={13} strokeWidth={2.6} />
								</Link>
							</div>
						) : null}
					</div>
				);
			})}
		</div>
	);
}
