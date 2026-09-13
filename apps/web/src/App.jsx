import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import CustomSiteCode from '@/components/builder/CustomSiteCode';
import CookieConsent from '@/components/builder/CookieConsent';
import WhatsAppBubble from '@/components/builder/WhatsAppBubble';
import { EcommerceCartProvider } from '@/components/builder/blocks/EcommerceCart';
import EcommerceCheckoutSuccess from '@/components/builder/blocks/EcommerceCheckoutSuccess';
import HomePage from '@/pages/builder/home/HomePage';
import ShopPage from '@/pages/site/ShopPage';
import CategoriesPage from '@/pages/site/CategoriesPage';
import CategoryPage from '@/pages/site/CategoryPage';
import ProductPage from '@/pages/site/ProductPage';
import AboutPage from '@/pages/site/AboutPage';
import ContactPage from '@/pages/site/ContactPage';
import BulkEnquiryPage from '@/pages/site/BulkEnquiryPage';
import PolicyPage from '@/pages/site/PolicyPage';
import '@/components/builder/styles/global.css';
import '@/styles/site.css';

function App() {
	return (
		<TooltipProvider>
			<EcommerceCartProvider>
				<Router>
					<ScrollToTop />
					<CustomSiteCode />
					<CookieConsent />
					<WhatsAppBubble />
					<EcommerceCheckoutSuccess />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/shop" element={<ShopPage />} />
						<Route path="/products" element={<ShopPage />} />
						<Route path="/categories" element={<CategoriesPage />} />
						<Route path="/category/:slug" element={<CategoryPage />} />
						<Route path="/product/:slug" element={<ProductPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/contact" element={<ContactPage />} />
						<Route path="/bulk-enquiry" element={<BulkEnquiryPage />} />
						<Route path="/privacy-policy" element={<PolicyPage policyKey="privacy-policy" />} />
						<Route path="/terms-and-conditions" element={<PolicyPage policyKey="terms-and-conditions" />} />
						<Route path="/shipping-policy" element={<PolicyPage policyKey="shipping-policy" />} />
						<Route path="/return-refund-policy" element={<PolicyPage policyKey="return-refund-policy" />} />
						<Route path="*" element={<ShopPage />} />
					</Routes>
				</Router>
			</EcommerceCartProvider>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;
