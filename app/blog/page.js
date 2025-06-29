import './blog.css';
import { getAllBlogPostsAsync, getAllTagsAsync } from './data';
import BlogClient from './BlogClient';

export const metadata = {
    title: 'Blog | SiteSketchSolutions',
    description: 'Explore our latest articles on construction, architecture, and sustainable building practices.',
};

export default async function BlogPage() {
    // Fetch initial data
    let initialData, initialTags;

    try {
        [initialData, initialTags] = await Promise.all([
            getAllBlogPostsAsync(1, 5),
            getAllTagsAsync().catch(() => []) // Fallback to empty array if tags API fails
        ]);
    } catch (error) {
        console.error('Error fetching initial blog data:', error);
        // Fallback data
        initialData = {
            blogs: [],
            pagination: {
                total: 0,
                page: 1,
                limit: 5,
                totalPages: 0
            }
        };
        initialTags = [];
    }

    return (
        <BlogClient
            initialPosts={initialData.blogs}
            initialPagination={initialData.pagination}
            initialTags={initialTags}
        />
    );
} 