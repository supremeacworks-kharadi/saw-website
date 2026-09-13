import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const preferredDistDir = path.resolve(__dirname, '../../dist/apps/web');
const fallbackDistDir = path.resolve(__dirname, 'dist');
const distDir = fs.existsSync(preferredDistDir) ? preferredDistDir : fallbackDistDir;

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
	console.error(`[saw-web] Could not find index.html in ${distDir}`);
	console.error('[saw-web] Run `npm run build --prefix apps/web` before starting production server.');
	process.exit(1);
}

const port = Number(process.env.PORT || 3000);

const MIME_TYPES = {
	'.css': 'text/css; charset=utf-8',
	'.gif': 'image/gif',
	'.html': 'text/html; charset=utf-8',
	'.ico': 'image/x-icon',
	'.jpeg': 'image/jpeg',
	'.jpg': 'image/jpeg',
	'.js': 'application/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.txt': 'text/plain; charset=utf-8',
	'.webp': 'image/webp',
};

function sendFile(response, filePath) {
	const extension = path.extname(filePath).toLowerCase();
	const type = MIME_TYPES[extension] || 'application/octet-stream';

	fs.readFile(filePath, (error, data) => {
		if (error) {
			response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
			response.end('Internal Server Error');
			return;
		}

		response.writeHead(200, { 'Content-Type': type });
		response.end(data);
	});
}

const server = createServer((request, response) => {
	const rawPath = request.url?.split('?')[0] || '/';
	const safePath = path.normalize(rawPath).replace(/^([.][.][/\\])+/, '');

	const targetPath = safePath === '/'
		? path.join(distDir, 'index.html')
		: path.join(distDir, safePath);

	if (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) {
		sendFile(response, targetPath);
		return;
	}

	// SPA deep-link fallback: /contact, /about, etc.
	sendFile(response, path.join(distDir, 'index.html'));
});

server.listen(port, () => {
	console.log(`[saw-web] Serving ${distDir}`);
	console.log(`[saw-web] Listening on http://localhost:${port}`);
});

