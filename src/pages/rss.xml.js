import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getPublishedBlogPosts } from '../lib/blog';

export async function GET(context) {
	const posts = await getPublishedBlogPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.summary,
			pubDate: new Date(post.data.publishedAt),
			link: `/blog/${post.id}/`,
		})),
	});
}
