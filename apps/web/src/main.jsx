import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<App />
);

// Dismiss the first-load splash as soon as React has painted, rather than
// waiting for the splash script's own load/timeout fallback. Two rAFs ensures
// the app's first frame is on screen before we fade the splash out.
if (typeof window !== 'undefined') {
	requestAnimationFrame(() => {
		requestAnimationFrame(() => {
			window.__sawDismissSplash?.();
		});
	});
}

