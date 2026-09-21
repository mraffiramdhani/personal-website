/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_KEYSTATIC_STORAGE?: string;
	readonly PUBLIC_KEYSTATIC_GITHUB_APP_SLUG?: string;
	readonly PUBLIC_GITHUB_REPO_OWNER?: string;
	readonly PUBLIC_GITHUB_REPO_NAME?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
