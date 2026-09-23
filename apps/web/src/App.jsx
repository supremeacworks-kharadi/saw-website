import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import ErrorBoundary from '@/components/ErrorBoundary';
import CustomSiteCode from '@/components/builder/CustomSiteCode';
import CookieConsent from '@/components/builder/CookieConsent';
import WhatsAppBubble from '@/components/builder/WhatsAppBubble';
import { EcommerceCartProvider } from '@/components/builder/blocks/EcommerceCart';
import EcommerceCheckoutSuccess from '@/components/builder/blocks/EcommerceCheckoutSuccess';
// Routes are code-split so each page ships its own chunk — visitors only download
// the code for the page they land on, shrinking the initial JS payload.
const HomePage = lazy(() => import('@/pages/builder/home/HomePage'));
const ShopPage = lazy(() => import('@/pages/site/ShopPage'));
const CategoriesPage = lazy(() => import('@/pages/site/CategoriesPage'));
const CategoryPage = lazy(() => import('@/pages/site/CategoryPage'));
const ProductPage = lazy(() => import('@/pages/site/ProductPage'));
const AboutPage = lazy(() => import('@/pages/site/AboutPage'));
const ContactPage = lazy(() => import('@/pages/site/ContactPage'));
const BulkEnquiryPage = lazy(() => import('@/pages/site/BulkEnquiryPage'));
const PolicyPage = lazy(() => import('@/pages/site/PolicyPage'));
const NotFoundPage = lazy(() => import('@/pages/site/NotFoundPage'));
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
					<ErrorBoundary>
						<Suspense fallback={null}>
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
								<Route path="*" element={<NotFoundPage />} />
							</Routes>
						</Suspense>
					</ErrorBoundary>
				</Router>
			</EcommerceCartProvider>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;
