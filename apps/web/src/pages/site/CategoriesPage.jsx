import React from 'react';
import { Helmet } from 'react-helmet';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import CategoryGrid from '@/components/site/CategoryGrid';

export default function CategoriesPage() {
	return (
		<>
			<Helmet>
				<title>Product Categories — AC Spare Parts, Refrigerants, Copper & HVAC Materials | Supreme AC Works</title>
				<meta name="description" content="Browse all Supreme AC Works categories: refrigerant gases, copper pipes, AC compressors, AC motors, insulation, electrical materials, AC stands, PCB & electronics, installation material and HVAC tools." />
			</Helmet>
			<SiteHeader />
			<section className="saw-page-head">
				<div className="saw-container">
					<p className="saw-eyebrow">Catalogue</p>
					<h1>All Product Categories</h1>
					<p>Everything you need for AC installation, service and maintenance — organised for fast ordering.</p>
				</div>
			</section>
			<section className="saw-section saw-section--flush-top">
				<div className="saw-container">
					<CategoryGrid />
				</div>
			</section>
			<SiteFooter />
		</>
	);
}
