import { collection, config, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		blog: collection({
			label: 'Blog',
			slugField: 'title',
			path: 'src/content/blog/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				publishedAt: fields.date({ label: 'Published date' }),
				updatedAt: fields.date({
					label: 'Updated date',
					validation: { isRequired: false },
				}),
				author: fields.text({
					label: 'Author',
					validation: { isRequired: false },
				}),
				summary: fields.text({ label: 'Summary', multiline: true }),
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
