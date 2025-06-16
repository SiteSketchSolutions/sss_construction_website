import Image from 'next/image';
import Link from 'next/link';
import './blog.css';
import { getAllBlogPostsAsync } from './data';

export const metadata = {
    title: 'Blog | SiteSketchSolutions',
    description: 'Explore our latest articles on construction, architecture, and sustainable building practices.',
};

export default async function BlogPage() {
    const posts = await getAllBlogPostsAsync();

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <h1>Our Blog</h1>
                    <p>Insights, trends, and updates from the construction industry</p>
                    <div className="category-buttons">
                        <button className="category-button active">All</button>
                        <button className="category-button">Sustainability</button>
                        <button className="category-button">Technology</button>
                        <button className="category-button">Design</button>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="featured-post">
                <div className="container">
                    {posts.length > 0 && (
                        <div className="featured-post-content">
                            <div className="featured-image">
                                <Image
                                    src={posts[0].image}
                                    alt={posts[0].title}
                                    width={800}
                                    height={400}
                                    priority
                                />
                            </div>
                            <div className="featured-details">
                                <span className="category">{posts[0].category}</span>
                                <h2>{posts[0].title}</h2>
                                <p>{posts[0].excerpt}</p>
                                <div className="post-meta">
                                    <span className="author">{posts[0].author}</span>
                                    <span className="date">{posts[0].date}</span>
                                    <span className="read-time">{posts[0].readTime}</span>
                                </div>
                                <Link href={`/blog/${posts[0].slug}`} className="read-more">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid">
                <div className="container">
                    <div className="grid">
                        {posts.slice(1).map((post) => (
                            <article key={post.id} className="blog-card">
                                <div className="card-image">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                    />
                                </div>
                                <div className="card-content">
                                    <span className="category">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-meta">
                                        <span className="author">{post.author}</span>
                                        <span className="date">{post.date}</span>
                                        <span className="read-time">{post.readTime}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className="read-more">
                                        Read More
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter">
                <div className="container">
                    <div className="newsletter-content">
                        <h2>Subscribe to Our Newsletter</h2>
                        <p>Get the latest updates and insights delivered to your inbox</p>
                        <form className="newsletter-form" action="/api/newsletter" method="POST">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
} 