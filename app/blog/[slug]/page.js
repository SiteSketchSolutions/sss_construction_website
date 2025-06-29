import { getBlogPostAsync, getAllBlogPostsAsync } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import './blog-post.css';

// Generate static params for all blog posts
export async function generateStaticParams() {
    try {
        const { blogs: posts } = await getAllBlogPostsAsync();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    try {
        const { slug } = await params;

        const post = await getBlogPostAsync(slug);

        if (!post) {
            return {
                title: 'Blog Post Not Found',
                description: 'The requested blog post could not be found.',
            };
        }

        return {
            title: `${post.title} | SiteSketchSolutions Blog`,
            description: post.excerpt,
            openGraph: {
                title: post.title,
                description: post.excerpt,
                images: [post.image],
                type: 'article',
                publishedTime: post.date,
                authors: [post.author],
            },
            twitter: {
                card: 'summary_large_image',
                title: post.title,
                description: post.excerpt,
                images: [post.image],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Error | SiteSketchSolutions Blog',
            description: 'An error occurred while loading the blog post.',
        };
    }
}

export default async function BlogPost({ params }) {
    try {
        const { slug } = await params;
        const post = await getBlogPostAsync(slug);

        if (!post) {
            notFound();
        }

        return (
            <article className="blog-post">
                {/* Hero Section */}
                <div className="post-hero">
                    <div className="hero-overlay"></div>
                    <div className="container">
                        <div className="post-header">
                            <div className="category-tag">{post.category}</div>
                            <h1>{post.title}</h1>
                            <div className="post-meta">
                                <div className="author-info">
                                    <div className="author-avatar">
                                        <Image
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=random&format=png`}
                                            alt={post.author}
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div>
                                        <p className="author-name">{post.author}</p>
                                        <p className="author-position">{post.authorPosition}</p>
                                    </div>
                                </div>
                                <div className="post-info">
                                    <span className="post-date">{post.date}</span>
                                    <span className="post-read-time">{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="post-featured-image">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={1200}
                        height={500}
                        priority
                    />
                </div>

                {/* Content */}
                <div className="post-content">
                    <div className="container">
                        <div className="content-wrapper">
                            <div className="main-content">
                                <div
                                    className="post-body"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />
                            </div>

                            {/* Sidebar */}
                            <aside className="post-sidebar">
                                <div className="sidebar-section">
                                    <h3>Tags</h3>
                                    <div className="tags-list">
                                        {post.tagsData && post.tagsData.length > 0 ? (
                                            post.tagsData.map((tag) => (
                                                <span
                                                    key={tag.id}
                                                    className="tag-link"
                                                >
                                                    {tag.name}
                                                </span>
                                            ))
                                        ) : (
                                            <p>No tags available</p>
                                        )}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                {/* <section className="related-posts">
                    <div className="container">
                        <h2>Related Articles</h2>
                        <div className="related-posts-grid">
                        </div>
                    </div>
                </section> */}
            </article>
        );
    } catch (error) {
        console.error('Error loading blog post:', error);
        return (
            <div className="error-container">
                <h1>Error Loading Blog Post</h1>
                <p>Sorry, there was an error loading this blog post. Please try again later.</p>
                <Link href="/blog" className="home-link">
                    Return to Blog
                </Link>
            </div>
        );
    }
} 