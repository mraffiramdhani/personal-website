import sharp from "sharp";
import { writeFileSync } from "node:fs";

const ogSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#101820"/>
      <stop offset="100%" stop-color="#16313a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1080" cy="-40" r="280" fill="#1b6f78" opacity="0.28"/>
  <circle cx="80" cy="680" r="220" fill="#2a9aa3" opacity="0.18"/>
  <rect x="72" y="72" width="72" height="72" rx="18" fill="#1b6f78"/>
  <text x="108" y="118" text-anchor="middle" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="28" font-weight="700" fill="#f4fbfb">RR</text>
  <text x="72" y="230" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="28" font-weight="500" fill="#7ed4d4">Software Engineer · Jakarta</text>
  <text x="72" y="320" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="64" font-weight="700" fill="#f4f8fa">Raffi Ramdhani</text>
  <text x="72" y="390" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="26" fill="#c5d4d8">JavaScript and TypeScript · React · React Native · NestJS</text>
  <text x="72" y="540" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="24" fill="#8fb8bc">mraffiramdhani.dev</text>
</svg>`;

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="8" fill="#1b6f78"/>
  <text x="16" y="21.5" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-size="13" font-weight="700" fill="#f4fbfb" text-anchor="middle">RR</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).png().toFile("public/og_image.png");
await sharp(Buffer.from(iconSvg)).resize(180, 180).png().toFile("public/apple-touch-icon.png");
await sharp(Buffer.from(iconSvg)).resize(32, 32).toFile("public/favicon.ico");

writeFileSync("/tmp/og-generated", "ok");
console.log("generated og_image.png, apple-touch-icon.png, favicon.ico");
