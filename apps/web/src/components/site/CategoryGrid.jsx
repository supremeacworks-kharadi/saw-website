import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '@/data/catalogue';

export default function CategoryGrid({ limit }) {
	const categories = limit ? CATEGORIES.slice(0, limit) : CATEGORIES;

	return (
		<div className="saw-cat-grid">
			{categories.map((category) => (
				<Link key={category.slug} to={`/category/${category.slug}`} className="saw-cat-card">
					<div className="saw-cat-card__media">
						<img src={category.image} alt={category.name} loading="lazy" />
					</div>
					<div className="saw-cat-card__body">
						<h3>{category.name}</h3>
						<span className="saw-cat-card__link">
							View products <ArrowRight size={14} strokeWidth={2.4} />
						</span>
					</div>
				</Link>
			))}
		</div>
	);
}
