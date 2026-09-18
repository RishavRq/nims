import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.m4a': 'audio/mp4',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.aac': 'audio/aac',
  '.flac': 'audio/flac',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.apk': 'application/vnd.android.package-archive',
  '.webmanifest': 'application/manifest+json',
  '.manifest': 'application/manifest+json',
  '.xml': 'application/xml'
};

/**
 * Resolves requested URL to an existing local file or the SPA index.html fallback.
 */
function resolveFilePath(reqUrl) {
  if (!reqUrl) reqUrl = '/';

  let reqPath = reqUrl.split('?')[0];

  try {
    reqPath = decodeURIComponent(reqPath);
  } catch {
    // Keep unencoded if malformed
  }

  // Handle repository base-path prefixes if deployed under a subpath (e.g. GitHub Pages or subfolder proxies)
  reqPath = reqPath.replace(/^\/(?:the-archive-landing|the-archive|bday2landing)(?=\/|$)/, '');
  if (!reqPath || reqPath === '') reqPath = '/';

  // Normalize path and eliminate any parent-directory traversal
  let safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');
  if (safePath.startsWith('/') || safePath.startsWith('\\')) {
    safePath = safePath.slice(1);
  }

  // Root requests directly map to index.html
  if (safePath === '' || safePath === '.' || safePath === 'index.html') {
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) return indexPath;
  }

  // Extract clean relative path without redundant 'public/' prefix
  const unPrefixed = safePath.replace(/^public[\/\\]/, '');

  // Ordered candidate list for static assets
  const candidates = [
    // 1. Direct path in repository root
    path.join(__dirname, safePath),
    // 2. Under public/ directory
    path.join(__dirname, 'public', unPrefixed),
    path.join(__dirname, 'public', safePath),
    // 3. Under dist/ if production build was run
    path.join(__dirname, 'dist', safePath),
    path.join(__dirname, 'dist', unPrefixed),
    // 4. Fallback in Reusable code/public
    path.join(__dirname, 'Reusable code', 'public', unPrefixed),
    path.join(__dirname, 'Reusable code', 'public', safePath),
    // 5. Fallback in Reusable code/ root
    path.join(__dirname, 'Reusable code', safePath),
    path.join(__dirname, 'Reusable code', unPrefixed)
  ];

  for (const candidate of candidates) {
    try {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return candidate;
      }
    } catch {
      // Ignore file check errors and proceed to next candidate
    }
  }

  // Check if this request represents a client-side route (SPA route)
  const ext = path.extname(safePath).toLowerCase();
  if (!ext) {
    // Path has no extension -> SPA fallback to index.html
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
      return indexPath;
    }
  }

  return null;
}

const server = http.createServer((req, res) => {
  // Common security and CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Range');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const filePath = resolveFilePath(req.url);

  if (!filePath) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found — THE ARCHIVE');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  const baseHeaders = {
    'Content-Type': contentType,
    'Accept-Ranges': 'bytes',
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
  };

  // Specific header for Android APK download
  if (ext === '.apk') {
    const filename = path.basename(filePath);
    baseHeaders['Content-Disposition'] = `attachment; filename="${filename}"`;
  }

  // Handle Range requests for audio, video, and APK resume
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (isNaN(start) || start >= fileSize) {
      res.writeHead(416, {
        'Content-Range': `bytes */${fileSize}`,
        'Content-Type': 'text/plain'
      });
      res.end('Requested range not satisfiable');
      return;
    }

    const chunksize = (end - start) + 1;

    res.writeHead(206, {
      ...baseHeaders,
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Content-Length': chunksize
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = fs.createReadStream(filePath, { start, end });
    stream.pipe(res);
  } else {
    res.writeHead(200, {
      ...baseHeaders,
      'Content-Length': fileSize
    });

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n==================================================`);
  console.log(`  THE ARCHIVE — Production Server Running`);
  console.log(`  Access the archive at: http://0.0.0.0:${PORT}`);
  console.log(`==================================================\n`);
});
