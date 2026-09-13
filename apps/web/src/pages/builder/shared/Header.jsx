import React from 'react';
import BlockNavigation from '@/components/builder/blocks/BlockNavigation';
import HeaderCartButton from '@/components/builder/blocks/HeaderCartButton';

export default function Header() {
	return (
		<BlockNavigation
			logoSrc={"https://horizons-cdn.hostinger.com/17e902c9-3ba8-4620-8fac-999dfa08d374/qypo3q-rLikpqr3pcBNcto4.png?width=768&fit=scale-down"}
			logoText={"Home"}
			logoHref={"/"}
			logoHeightDesktop={33}
			logoHeightMobile={26}
			isLogoVisible
			layout={"desktop-1"}
			mobileLayout={"mobile-1"}
			mobileLinksAlignment={"right"}
			isSticky
			isTransparent
			isCartVisible
			cartIconSize={"24px"}
			style={{
				"--width": "1240px",
				"--padding-top": "30px",
				"--padding": "30px 16px 30px 16px",
				"--padding-right": "16px",
				"--padding-bottom": "30px",
				"--padding-left": "16px",
				"--m-padding-top": "24px",
				"--m-padding": "24px 16px 24px 16px",
				"--m-padding-right": "16px",
				"--m-padding-bottom": "24px",
				"--m-padding-left": "16px",
				"--logo-width": "97px",
				"--cartIconSize": "24px",
				"--link-spacing": "40px",
				"--m-logo-width": "86px",
				"--m-link-spacing": "64px",
				"--element-spacing": "64px",
				"--contrastBackgroundColor": "rgb(198, 207, 219)",
				"--nav-bg": "#0F172A",
				"--nav-link-color": "rgb(196, 196, 196)",
				"--nav-link-text-color": "rgb(196, 196, 196)",
				"--nav-link-color-hover": "rgb(255, 255, 255)",
				"--nav-link-text-color-hover": "rgb(255, 255, 255)"
			}}
			nav={[
				{
					id: "_TaUxT",
					href: "/#projects",
					text: "Projects",
					isHidden: false,
					hasDropdown: false,
					target: "_self"
				},
				{
					id: "dtwB2h",
					href: "/#about",
					text: "About",
					isHidden: false,
					hasDropdown: false,
					target: "_self"
				},
				{
					id: "mLtn3a",
					href: "/#process",
					text: "Process",
					isHidden: false,
					hasDropdown: false,
					target: "_self"
				},
				{
					id: "Iw1E4G",
					href: "/#services",
					text: "Services",
					isHidden: false,
					hasDropdown: false,
					target: "_self"
				},
				{
					id: "Symmwk",
					href: "/#cta",
					text: "Contact",
					isHidden: false,
					hasDropdown: false,
					target: "_self"
				},
				{
					id: "zjZMvj",
					href: "/products",
					text: "Products",
					isHidden: false,
					hasDropdown: false
				}
			]}
			cartButton={HeaderCartButton}
		/>
	);
}
