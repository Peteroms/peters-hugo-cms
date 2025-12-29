import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable AWS Infrastructure with Terraform",
      date: "January 15, 2024",
      excerpt: "Learn how to design and deploy a robust, scalable AWS infrastructure using Infrastructure as Code principles with Terraform. This guide covers best practices for security, networking, and automation.",
      readTime: "8 min read"
    },
    {
      title: "Deploying Microservices on Amazon EKS",
      date: "February 10, 2024",
      excerpt: "A comprehensive guide to deploying and managing microservices on Amazon EKS using Helm charts, service mesh, and GitOps workflows for production-ready Kubernetes applications.",
      readTime: "12 min read"
    },
    {
      title: "DevOps Best Practices for Modern Software Delivery",
      date: "March 5, 2024",
      excerpt: "Essential DevOps practices that every organization should implement to achieve faster, more reliable software delivery while maintaining security and quality standards.",
      readTime: "10 min read"
    }
  ];

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
            {blogPosts.map((post, index) => (
              <article key={index} className="card" style={{marginBottom: '30px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <div>
                    <span style={{color: '#667eea', fontSize: '0.9rem'}}>{post.date}</span>
                    <span style={{color: '#999', margin: '0 10px'}}>•</span>
                    <span style={{color: '#999', fontSize: '0.9rem'}}>{post.readTime}</span>
                  </div>
                </div>
                <h2 style={{color: '#333', marginBottom: '15px', fontSize: '1.8rem'}}>{post.title}</h2>
                <p style={{color: '#666', lineHeight: '1.6', marginBottom: '20px'}}>{post.excerpt}</p>
                <a 
                  href="#" 
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