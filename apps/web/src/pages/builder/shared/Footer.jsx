import React from 'react';
import BlockLayout from '@/components/builder/layout/BlockLayout';
import LayoutElement from '@/components/builder/layout/LayoutElement';
import GridTextBox from '@/components/builder/elements/GridTextBox';
import GridSocialIcons from '@/components/builder/elements/GridSocialIcons';

export default function Footer() {
	return (
		<BlockLayout
			blockId={"footer"}
			htmlId={"footer"}
			blockClassName={"block"}
			className={"block-layout block-layout--layout"}
			style={{
				"--cols": "12",
				"--rows": 3,
				"--width": "1224px",
				"--m-rows": "1",
				"--col-gap": "24px",
				"--row-gap": "16px",
				"--row-size": "48px",
				"--column-gap": "24px",
				"--block-padding-top": "16px",
				"--block-padding": "16px 0 16px 0",
				"--block-padding-right": "0",
				"--block-padding-bottom": "16px",
				"--block-padding-left": "0",
				"--m-block-padding": "16px",
				"--m-grid-template-rows": "11.11vw auto 15.00vw auto 16.67vw auto 16.39vw auto 44px",
				"--t-grid-template-rows": "minmax(40px, auto) minmax(50px, auto) minmax(54px, auto) minmax(20px, auto) minmax(60px, auto) minmax(21px, auto) minmax(59px, auto) minmax(21px, auto) 1fr",
				"--small-desktop-grid-template-rows": "minmax(3.27vw, auto) minmax(1.14vw, auto) minmax(0.08vw, auto) minmax(1.63vw, auto) minmax(0.25vw, auto) minmax(1.47vw, auto) minmax(3.92vw, auto) minmax(1.96vw, auto) 5.31vw",
				"--grid-template-rows": "minmax(40px, auto) minmax(14px, auto) minmax(1px, auto) minmax(20px, auto) minmax(3px, auto) minmax(18px, auto) minmax(48px, auto) minmax(24px, auto) 1fr",
				"--m-grid-template-columns": "21.65% 56.71% 21.65%",
				"--grid-template-columns": "32.68% 0.98% 8.17% 16.34% 8.17% 0.98% 32.68%",
				"--m-block-min-height": "auto",
				"--t-block-min-height": "369px",
				"--small-desktop-block-min-height": "auto",
				"--block-min-height": "233px"
			}}
			background={{
				color: "#0F172A",
				current: "color",
				isTransparent: false
			}}
		>
			<LayoutElement
				elementId={"SnAIEw"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "left",
					"--m-text": "center",
					"--z-index": 1,
					"--grid-row": "2/7",
					"--grid-column": "1/2",
					"--m-grid-row": "2/3",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"SnAIEw"}
					content={"<p dir=\"auto\" style=\"color: rgb(255, 255, 255); margin-bottom: 8px\" class=\"body-small\"><a target=\"_self\" rel=\"\" href=\"/#hero\" style=\"color: rgb(255, 255, 255); text-decoration: none;\" data-page-id=\"hero\">SUPREME AC WORKS</a></p><p dir=\"auto\" style=\"color: rgb(255, 255, 255)\" class=\"body-small\"><a target=\"_self\" rel=\"\" href=\"/#hero\" style=\"color: rgb(255, 255, 255); text-decoration: none;\" data-page-id=\"hero\">HVAC Spare Parts &amp; Supplies</a></p>"}
					textAlign={"left"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"qUpHeA"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "center",
					"--z-index": 2,
					"--grid-row": "8/9",
					"--grid-column": "3/6",
					"--m-grid-row": "8/9",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"qUpHeA"}
					content={"<p dir=\"auto\" style=\"color: rgb(241, 245, 249)\" class=\"body-small\">© 2025 SUPREME AC WORKS.</p>"}
					textAlign={"center"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"pZr_CN"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--text": "right",
					"--m-text": "center",
					"--z-index": 3,
					"--grid-row": "3/6",
					"--grid-column": "7/8",
					"--m-grid-row": "6/7",
					"--m-grid-column": "1/4"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridTextBox
					id={"pZr_CN"}
					content={"<p dir=\"auto\" style=\"color: rgb(2, 132, 199)\" class=\"body-small\"><a target=\"\" href=\"mailto:hello@afterglow.studio\" style=\"color: rgb(2, 132, 199); text-decoration: none;\">sales@supremeac.in</a></p>"}
					textAlign={"right"}
					textAlignMobile={"center"}
					className={"layout-element__component layout-element__component--GridTextBox"}
				/>
			</LayoutElement>
			<LayoutElement
				elementId={"cxcofY"}
				className={"layout-element layout-element--layout transition transition--fade"}
				style={{
					"--icon-size": "20px",
					"--icon-color": "#FFFFFF",
					"--icon-spacing": "space-around",
					"--icon-direction": "row",
					"--icon-color-hover": "#FFFFFF",
					"--space-between-icons": "16px",
					"--z-index": 4,
					"--grid-row": "4/5",
					"--grid-column": "4/5",
					"--m-grid-row": "4/5",
					"--m-grid-column": "2/3"
				}}
				hasRotationFrame={false}
				hasEntranceAnimation={true}
			>
				<GridSocialIcons
					id={"cxcofY"}
					links={[
						{
							href: "https://www.facebook.com/",
							label: "facebook",
							svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M24 12.0726C24 5.44354 18.629 0.0725708 12 0.0725708C5.37097 0.0725708 0 5.44354 0 12.0726C0 18.0619 4.38823 23.0264 10.125 23.9274V15.5414H7.07661V12.0726H10.125V9.4287C10.125 6.42144 11.9153 4.76031 14.6574 4.76031C15.9706 4.76031 17.3439 4.99451 17.3439 4.99451V7.94612H15.8303C14.34 7.94612 13.875 8.87128 13.875 9.82015V12.0726H17.2031L16.6708 15.5414H13.875V23.9274C19.6118 23.0264 24 18.0619 24 12.0726Z\" fill=\"currentColor\"></path></svg>"
						},
						{
							href: "https://www.instagram.com/",
							label: "instagram",
							svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.0027 5.84808C8.59743 5.84808 5.85075 8.59477 5.85075 12C5.85075 15.4053 8.59743 18.1519 12.0027 18.1519C15.4079 18.1519 18.1546 15.4053 18.1546 12C18.1546 8.59477 15.4079 5.84808 12.0027 5.84808ZM12.0027 15.9996C9.80212 15.9996 8.00312 14.2059 8.00312 12C8.00312 9.7941 9.79677 8.00046 12.0027 8.00046C14.2086 8.00046 16.0022 9.7941 16.0022 12C16.0022 14.2059 14.2032 15.9996 12.0027 15.9996ZM19.8412 5.59644C19.8412 6.39421 19.1987 7.03135 18.4062 7.03135C17.6085 7.03135 16.9713 6.38885 16.9713 5.59644C16.9713 4.80402 17.6138 4.16153 18.4062 4.16153C19.1987 4.16153 19.8412 4.80402 19.8412 5.59644ZM23.9157 7.05277C23.8247 5.13063 23.3856 3.42801 21.9775 2.02522C20.5747 0.622429 18.8721 0.183388 16.9499 0.0870135C14.9689 -0.0254238 9.03112 -0.0254238 7.05008 0.0870135C5.1333 0.178034 3.43068 0.617075 2.02253 2.01986C0.614389 3.42265 0.180703 5.12527 0.0843279 7.04742C-0.0281093 9.02845 -0.0281093 14.9662 0.0843279 16.9472C0.175349 18.8694 0.614389 20.572 2.02253 21.9748C3.43068 23.3776 5.12794 23.8166 7.05008 23.913C9.03112 24.0254 14.9689 24.0254 16.9499 23.913C18.8721 23.822 20.5747 23.3829 21.9775 21.9748C23.3803 20.572 23.8193 18.8694 23.9157 16.9472C24.0281 14.9662 24.0281 9.03381 23.9157 7.05277ZM21.3564 19.0728C20.9388 20.1223 20.1303 20.9307 19.0755 21.3537C17.496 21.9802 13.7481 21.8356 12.0027 21.8356C10.2572 21.8356 6.50396 21.9748 4.92984 21.3537C3.88042 20.9361 3.07195 20.1276 2.64897 19.0728C2.02253 17.4934 2.16709 13.7455 2.16709 12C2.16709 10.2546 2.02789 6.50129 2.64897 4.92717C3.06659 3.87776 3.87507 3.06928 4.92984 2.6463C6.50931 2.01986 10.2572 2.16443 12.0027 2.16443C13.7481 2.16443 17.5014 2.02522 19.0755 2.6463C20.1249 3.06392 20.9334 3.8724 21.3564 4.92717C21.9828 6.50665 21.8383 10.2546 21.8383 12C21.8383 13.7455 21.9828 17.4987 21.3564 19.0728Z\" fill=\"currentColor\"></path></svg>"
						},
						{
							href: "https://www.linkedin.com/",
							label: "linkedin-in",
							svg: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.13375 14.0002H1.23125V4.6533H4.13375V14.0002ZM2.68094 3.3783C1.75281 3.3783 1 2.60955 1 1.68143C1 1.23561 1.1771 0.80806 1.49234 0.492823C1.80757 0.177587 2.23513 0.000488281 2.68094 0.000488281C3.12675 0.000488281 3.5543 0.177587 3.86954 0.492823C4.18478 0.80806 4.36188 1.23561 4.36188 1.68143C4.36188 2.60955 3.60875 3.3783 2.68094 3.3783ZM14.9969 14.0002H12.1006V9.45018C12.1006 8.3658 12.0787 6.97518 10.5916 6.97518C9.0825 6.97518 8.85125 8.1533 8.85125 9.37205V14.0002H5.95188V4.6533H8.73562V5.9283H8.77625C9.16375 5.19393 10.1103 4.41893 11.5225 4.41893C14.46 4.41893 15 6.3533 15 8.8658V14.0002H14.9969Z\" fill=\"currentColor\"></path></svg>"
						},
						{
							href: "https://www.twitter.com/",
							label: "twitter",
							svg: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z\" fill=\"currentColor\"></path></svg>"
						}
					]}
					direction={"row"}
					iconSize={"20px"}
					spaceBetweenIcons={"16px"}
					iconSpacing={"space-around"}
					iconColor={"#FFFFFF"}
					iconColorHover={"#FFFFFF"}
					preventSpacing
					fullHeight
					className={"layout-element__component layout-element__component--GridSocialIcons"}
				/>
			</LayoutElement>
		</BlockLayout>
	);
}
