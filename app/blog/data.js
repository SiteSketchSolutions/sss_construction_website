// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

// Helper function to handle API responses
async function handleApiResponse(response) {
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.status || data.statusCode !== 200) {
        throw new Error(data.msg || 'API request failed');
    }

    return data.data;
}

// Transform API blog data to match the expected format
function transformBlogData(apiBlog) {
    return {
        id: apiBlog.id,
        slug: apiBlog.slug,
        title: apiBlog.title,
        excerpt: apiBlog.excerpt,
        content: apiBlog.content || '',
        category: apiBlog.category?.name || 'Uncategorized',
        categoryId: apiBlog.categoryId,
        date: apiBlog.formattedDate || new Date(apiBlog.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        image: apiBlog.image,
        author: apiBlog.author,
        authorPosition: apiBlog.authorPosition,
        readTime: apiBlog.readTime,
        status: apiBlog.status,
        viewCount: apiBlog.viewCount,
        tags: apiBlog.tags?.map(tag => tag.name) || [],
        categoryData: apiBlog.category,
        tagsData: apiBlog.tags || []
    };
}

// Get all blog posts with pagination and filters
export async function getAllBlogPostsAsync(page = 1, limit = 5, tagId = null) {
    try {
        // Build query parameters
        const params = new URLSearchParams({
            status: 'published',
            page: page.toString(),
            limit: limit.toString()
        });

        // Add tag filter if provided
        if (tagId) {
            params.append('tagId', tagId.toString());
        }

        const response = await fetch(
            `${API_BASE_URL}/v1/blog/list?${params.toString()}`,
            {
                headers: {
                    'accept': 'application/json',
                },
                next: { revalidate: 300 } // Cache for 5 minutes
            }
        );

        const data = await handleApiResponse(response);

        // Transform the blogs array
        const transformedBlogs = data.blogs.map(transformBlogData);

        return {
            blogs: transformedBlogs,
            pagination: data.pagination
        };
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        // Return empty data on error
        return {
            blogs: [],
            pagination: {
                total: 0,
                page: 1,
                limit: 5,
                totalPages: 0
            }
        };
    }
}

// Get all available tags for category filtering
export async function getAllTagsAsync() {
    try {
        const response = await fetch(
            `${API_BASE_URL}/v1/blog/tags`,
            {
                headers: {
                    'accept': 'application/json',
                },
                next: { revalidate: 600 } // Cache for 10 minutes
            }
        );

        const data = await handleApiResponse(response);
        return data || [];
    } catch (error) {
        console.error('Error fetching tags:', error);
        // Return empty array if tags API is not available
        return [];
    }
}

// Get a single blog post by slug
export async function getBlogPostAsync(slug) {
    try {
        const response = await fetch(
            `${API_BASE_URL}/v1/blog?slug=${encodeURIComponent(slug)}`,
            {
                headers: {
                    'accept': 'application/json',
                },
                next: { revalidate: 300 } // Cache for 5 minutes
            }
        );

        const data = await handleApiResponse(response);
        return transformBlogData(data);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

// Legacy functions for backward compatibility
export function getBlogPost(slug) {
    // This is now deprecated, use getBlogPostAsync instead
    console.warn('getBlogPost is deprecated, use getBlogPostAsync instead');
    return null;
}

export function getAllBlogPosts() {
    // This is now deprecated, use getAllBlogPostsAsync instead
    console.warn('getAllBlogPosts is deprecated, use getAllBlogPostsAsync instead');
    return [];
}

// Export the static data for fallback (keeping for reference)
export const blogPosts = []; 