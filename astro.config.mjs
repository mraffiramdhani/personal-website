// @ts-check
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, sessionDrivers } from 'astro/config';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { CONFIG } from './src/data/config.ts';
import { remarkCodeMeta } from './src/lib/remark-code-meta.ts';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: {
		light: 'github-light',
		dark: 'github-dark',
	},
	keepBackground: false,
};

// https://astro.build/config
export default defineConfig({
	site: CONFIG.site.url,
	output: 'static',
	adapter: cloudflare({
		imageService: 'compile',
	}),
	session: {
		driver: sessionDrivers.lruCache(),
	},

	vite: {
		plugins: [tailwindcss()],
	},

	integrations: [
		react(),
		// Keystatic admin is dev-only; static builds stay adapter-free.
		...(process.env.NODE_ENV !== 'production' ? [keystatic()] : []),
		mdx({
			remarkPlugins: [remarkGfm, remarkCodeMeta],
			rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
			syntaxHighlight: false,
		}),
		sitemap(),
	],

	markdown: {
		syntaxHighlight: false,
		remarkPlugins: [remarkGfm, remarkCodeMeta],
		rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
	},
});
