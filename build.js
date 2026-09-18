import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');

console.log('[THE ARCHIVE] Starting production build...');

// Ensure dist directory exists
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy essential files and folders
const entriesToCopy = [
  'index.html',
  '404.html',
  'src',
  'public'
];

for (const entry of entriesToCopy) {
  const srcPath = path.join(__dirname, entry);
  const destPath = path.join(distDir, entry);

  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`  ✓ Copied ${entry} -> dist/${entry}`);
  }
}

console.log('[THE ARCHIVE] Build completed successfully. Production output ready in dist/');
