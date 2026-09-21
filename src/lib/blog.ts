import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

function byNewest(a: BlogPost, b: BlogPost) {
	return (
		new Date(b.data.publishedAt).getTime() -
		new Date(a.data.publishedAt).getTime()
	);
}

/** Published posts only, newest first. Drafts stay in the repo but off the public site. */
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
	const posts = await getCollection('blog', ({ data }) => data.draft !== true);
	return posts.sort(byNewest);
}
