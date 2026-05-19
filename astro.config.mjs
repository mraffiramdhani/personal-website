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

import markdoc from '@astrojs/markdoc';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
    theme: {
        light: 'github-light',
        dark: 'github-dark',
    },
    keepBackground: false,
};

const isProduction = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
    site: CONFIG.site.url,
    output: 'static',
    // Cloudflare Workers dev runtime breaks Keystatic (Node-only SSR routes).
    ...(isProduction && {
        adapter: cloudflare({
            imageService: 'compile',
        }),
        session: {
            driver: sessionDrivers.lruCache(),
        },
    }),

    vite: {
        plugins: [tailwindcss()],
        // Keystatic uses virtual:keystatic-config; esbuild in optimizeDeps cannot resolve it.
        optimizeDeps: {
            exclude: ['@keystatic/astro'],
        },
    },

    integrations: [
      react(),
      // Keystatic admin is dev-only; production builds use the Cloudflare adapter.
      ...(!isProduction ? [keystatic()] : []),
      mdx({
          remarkPlugins: [remarkGfm, remarkCodeMeta],
          rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          syntaxHighlight: false,
      }),
      sitemap(),
      markdoc(),
    ],

    markdown: {
        syntaxHighlight: false,
        remarkPlugins: [remarkGfm, remarkCodeMeta],
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
});