import React, { useState, useEffect } from 'react';
import { fetchBlogPosts, urlFor } from '../lib/sanity';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback static data
  const staticPosts = [
    {
      title: "Building Scalable AWS Infrastructure with Terraform",
      publishedAt: "2024-01-15",
      excerpt: "Learn how to design and deploy a robust, scalable AWS infrastructure using Infrastructure as Code principles with Terraform. This guide covers best practices for security, networking, and automation.",
      readTime: "8 min read"
    },
    {
      title: "Deploying Microservices on Amazon EKS",
      publishedAt: "2024-02-10",
      excerpt: "A comprehensive guide to deploying and managing microservices on Amazon EKS using Helm charts, service mesh, and GitOps workflows for production-ready Kubernetes applications.",
      readTime: "12 min read"
    },
    {
      title: "DevOps Best Practices for Modern Software Delivery",
      publishedAt: "2024-03-05",
      excerpt: "Essential DevOps practices that every organization should implement to achieve faster, more reliable software delivery while maintaining security and quality standards.",
      readTime: "10 min read"
    }
  ];

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const sanityPosts = await fetchBlogPosts();
        if (sanityPosts && sanityPosts.length > 0) {
          setPosts(sanityPosts);
        } else {
          setPosts(staticPosts);
        }
      } catch (error) {
        console.log('Using static data:', error.message);
        setPosts(staticPosts);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <div>Loading blog posts...</div>
      </div>
    );
  }

  return (
    <div>
      <section className="hero" style={{padding: '80px 0'}}>
        <div className="container">
          <h1>Blog</h1>
          <p>Insights and tutorials on DevOps, cloud infrastructure, and modern software delivery</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            {posts.map((post, index) => (
              <article key={post._id || index} className="card" style={{marginBottom: '30px'}}>
                {post.image && (
                  <img 
                    src={urlFor(post.image).width(800).height(400).url()} 
                    alt={post.title}
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px', marginBottom: '20px'}}
                  />
                )}
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <div>
                    <span style={{color: '#667eea', fontSize: '0.9rem'}}>
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.readTime && (
                      <>
                        <span style={{color: '#999', margin: '0 10px'}}>•</span>
                        <span style={{color: '#999', fontSize: '0.9rem'}}>{post.readTime}</span>
                      </>
                    )}
                  </div>
                </div>
                <h2 style={{color: '#333', marginBottom: '15px', fontSize: '1.8rem'}}>{post.title}</h2>
                <p style={{color: '#666', lineHeight: '1.6', marginBottom: '20px'}}>
                  {post.excerpt || post.content?.substring(0, 200) + '...'}
                </p>
                <a 
                  href={post.slug ? `/blog/${post.slug.current}` : '#'} 
                  style={{
                    color: '#667eea',
                    textDecoration: 'none',
                    fontWeight: '600',
                    borderBottom: '2px solid transparent',
                    transition: 'border-color 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.borderColor = '#667eea'}
                  onMouseOut={(e) => e.target.style.borderColor = 'transparent'}
                >
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div style={{textAlign: 'center', maxWidth: '600px', margin: '0 auto'}}>
            <h2 style={{marginBottom: '20px', fontSize: '2.5rem', color: '#333'}}>Stay Updated</h2>
            <p style={{marginBottom: '30px', color: '#666', fontSize: '1.1rem'}}>
              Get the latest insights on DevOps practices, cloud technologies, and infrastructure automation delivered to your inbox.
            </p>
            <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  padding: '12px 20px',
                  border: '2px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '1rem',
                  minWidth: '250px',
                  outline: 'none'
                }}
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;