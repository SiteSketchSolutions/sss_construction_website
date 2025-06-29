'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPostsAsync, getAllTagsAsync } from './data';

export default function BlogClient({ initialPosts, initialPagination, initialTags }) {
    const [posts, setPosts] = useState(initialPosts || []);
    const [pagination, setPagination] = useState(initialPagination || {});
    const [tags, setTags] = useState(initialTags || []);
    const [selectedTagId, setSelectedTagId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    // Load tags on component mount
    useEffect(() => {
        const loadTags = async () => {
            try {
                const tagsData = await getAllTagsAsync();
                setTags(tagsData);
            } catch (error) {
                console.error('Error loading tags:', error);
            }
        };

        if (!initialTags || initialTags.length === 0) {
            loadTags();
        }
    }, [initialTags]);

    // Load more posts
    const loadMorePosts = async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        try {
            const nextPage = pagination.page + 1;
            const { blogs: newPosts, pagination: newPagination } = await getAllBlogPostsAsync(
                nextPage,
                5,
                selectedTagId
            );

            setPosts(prev => [...prev, ...newPosts]);
            setPagination(newPagination);
            setHasMore(newPagination.page < newPagination.totalPages);
        } catch (error) {
            console.error('Error loading more posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Filter by tag
    const filterByTag = async (tagId) => {
        setIsLoading(true);
        setSelectedTagId(tagId);

        try {
            const { blogs: filteredPosts, pagination: newPagination } = await getAllBlogPostsAsync(
                1,
                5,
                tagId
            );

            setPosts(filteredPosts);
            setPagination(newPagination);
            setHasMore(newPagination.page < newPagination.totalPages);
        } catch (error) {
            console.error('Error filtering posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Clear filter
    const clearFilter = async () => {
        setIsLoading(true);
        setSelectedTagId(null);

        try {
            const { blogs: allPosts, pagination: newPagination } = await getAllBlogPostsAsync(1, 5);
            setPosts(allPosts);
            setPagination(newPagination);
            setHasMore(newPagination.page < newPagination.totalPages);
        } catch (error) {
            console.error('Error clearing filter:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <h1>Our Blog</h1>
                    <p>Insights, trends, and updates from the construction industry</p>
                    <div className="category-buttons">
                        <button
                            className={`category-button ${!selectedTagId ? 'active' : ''}`}
                            onClick={clearFilter}
                            disabled={isLoading}
                        >
                            All
                        </button>
                        {tags.map((tag) => (
                            <button
                                key={tag.id}
                                className={`category-button ${selectedTagId === tag.id ? 'active' : ''}`}
                                onClick={() => filterByTag(tag.id)}
                                disabled={isLoading}
                            >
                                {tag.name}
                            </button>
                        ))}
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

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="load-more-container">
                            <button
                                onClick={loadMorePosts}
                                disabled={isLoading}
                                className="load-more-button"
                            >
                                {isLoading ? 'Loading...' : 'Load More Posts'}
                            </button>
                        </div>
                    )}

                    {/* No posts message */}
                    {posts.length === 0 && !isLoading && (
                        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                            <p>No blog posts found.</p>
                        </div>
                    )}
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