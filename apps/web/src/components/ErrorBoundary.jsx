import React from 'react';

/**
 * Catches render-time errors anywhere in the app and shows a friendly fallback
 * instead of a blank white page. Without this, a single thrown error (e.g. a
 * missing context method) unmounts the whole React tree.
 */
export default class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error('[ErrorBoundary] render error', error, info);
	}

	handleReload = () => {
		this.setState({ hasError: false });
		if (typeof window !== 'undefined') window.location.reload();
	};

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', textAlign: 'center' }}>
					<div style={{ maxWidth: 420 }}>
						<h1 style={{ fontSize: 22, marginBottom: 10 }}>Something went wrong</h1>
						<p style={{ color: '#666', marginBottom: 18 }}>
							Please reload the page. If it keeps happening, contact us on WhatsApp and we&apos;ll help right away.
						</p>
						<button
							type="button"
							onClick={this.handleReload}
							style={{ background: '#e11d2a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 18px', fontWeight: 600, cursor: 'pointer' }}
						>
							Reload page
						</button>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

