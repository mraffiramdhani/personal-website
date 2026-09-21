import { collection, config, fields } from '@keystatic/core';

const repoOwner =
	import.meta.env.PUBLIC_GITHUB_REPO_OWNER ?? 'mraffiramdhani';
const repoName =
	import.meta.env.PUBLIC_GITHUB_REPO_NAME ?? 'personal-website';

// Opt in with PUBLIC_KEYSTATIC_STORAGE=github (and/or the GitHub App slug)
// so the admin UI and API routes agree. The slug alone is enough after the
// first-run GitHub App wizard writes .env.
const useGitHubStorage =
	import.meta.env.PUBLIC_KEYSTATIC_STORAGE === 'github' ||
	Boolean(import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG);

export default config({
	storage: useGitHubStorage
		? {
				kind: 'github',
				repo: { owner: repoOwner, name: repoName },
			}
		: {
				kind: 'local',
			},
	collections: {
		blog: collection({
			label: 'Blog posts',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			entryLayout: 'content',
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				summary: fields.text({
					label: 'Summary',
					description: 'Short description shown on the blog index and in SEO tags.',
					multiline: true,
					validation: { isRequired: true },
				}),
				publishedAt: fields.date({
					label: 'Published date',
					defaultValue: { kind: 'today' },
					validation: { isRequired: true },
				}),
				updatedAt: fields.date({
					label: 'Updated date',
					validation: { isRequired: false },
				}),
				draft: fields.checkbox({
					label: 'Draft',
					description: 'Hidden from the public blog, RSS, and sitemap until unchecked.',
					defaultValue: true,
				}),
				author: fields.text({
					label: 'Author',
					defaultValue: 'Mochhamad Raffi Ramdhani',
					validation: { isRequired: false },
				}),
				image: fields.image({
					label: 'Cover image',
					directory: 'public/images/blog',
					publicPath: '/images/blog/',
					validation: { isRequired: false },
				}),
				content: fields.mdx({
					label: 'Content',
					options: {
						image: {
							directory: 'public/images/blog',
							publicPath: '/images/blog/',
						},
					},
				}),
			},
		}),
	},
});
