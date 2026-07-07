/**
 * Post-build script: inline the generated CSS file into dist/index.html
 * to eliminate a render-blocking stylesheet request.
 */
const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Skipping CSS inlining.');
  process.exit(0);
}

let html = fs.readFileSync(indexPath, 'utf-8');

const cssLinkMatch = html.match(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']\/assets\/index-[^"']+\.css["'][^>]*>/i);
if (!cssLinkMatch) {
  console.log('No render-blocking CSS link found in dist/index.html.');
  process.exit(0);
}

const cssLink = cssLinkMatch[0];
const cssHrefMatch = cssLink.match(/href=["']([^"']+)["']/i);
const cssHref = cssHrefMatch ? cssHrefMatch[1] : null;

if (!cssHref) {
  console.error('Could not parse CSS href.');
  process.exit(1);
}

const cssPath = path.join(distDir, cssHref.replace(/^\//, ''));
if (!fs.existsSync(cssPath)) {
  console.error(`CSS file not found: ${cssPath}`);
  process.exit(1);
}

const css = fs.readFileSync(cssPath, 'utf-8');

const styleTag = `<style>${css.replace(/<\/style>/gi, '<\\/style>')}</style>`;
html = html.replace(cssLink, styleTag);

fs.writeFileSync(indexPath, html, 'utf-8');
console.log(`Inlined ${cssHref} (${(Buffer.byteLength(css, 'utf-8') / 1024).toFixed(2)} KiB) into dist/index.html`);
