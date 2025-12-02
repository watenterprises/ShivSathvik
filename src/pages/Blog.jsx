import React from 'react';
import './Blog.css';

const BLOG_POSTS = [
    {
        id: 1,
        title: "Top 5 Emerging Locations in Bangalore for 2024",
        date: "November 15, 2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Discover the neighborhoods that are set to witness the highest appreciation in property value over the next year."
    },
    {
        id: 2,
        title: "A Guide to Buying Your First Home",
        date: "November 10, 2024",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Everything you need to know about down payments, home loans, and legal documentation before making the big purchase."
    },
    {
        id: 3,
        title: "Interior Design Trends for Modern Apartments",
        date: "November 5, 2024",
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        excerpt: "Transform your living space with these trending interior design ideas that blend functionality with aesthetics."
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <div className="container">
                <h2 className="section-title">Latest Insights</h2>
                <p className="section-subtitle">Stay updated with the latest trends and news from the real estate world.</p>

                <div className="blog-grid">
                    {BLOG_POSTS.map(post => (
                        <article key={post.id} className="blog-card">
                            <img src={post.image} alt={post.title} className="blog-image" />
                            <div className="blog-content">
                                <div className="blog-date">{post.date}</div>
                                <h3 className="blog-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="read-more">Read More →</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
