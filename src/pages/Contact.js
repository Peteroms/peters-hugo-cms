import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <section className="hero" style={{padding: '80px 0'}}>
        <div className="container">
          <h1>Contact Me</h1>
          <p>Ready to transform your infrastructure? Let's discuss your project</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px'}}>
            
            <div>
              <h2 style={{marginBottom: '30px', color: '#333'}}>Get In Touch</h2>
              <p style={{marginBottom: '30px', color: '#666', lineHeight: '1.6'}}>
                Ready to transform your infrastructure and accelerate your software delivery? I'm here to help you navigate your cloud and DevOps journey. Whether you need consultation on AWS architecture, CI/CD pipeline implementation, or Kubernetes deployment strategies, let's discuss how we can work together to achieve your goals.
              </p>
              
              <div className="card">
                <div style={{marginBottom: '20px'}}>
                  <h4 style={{color: '#667eea', marginBottom: '5px'}}>Email</h4>
                  <p>omondipeter934@gmail.com</p>
                </div>
                <div style={{marginBottom: '20px'}}>
                  <h4 style={{color: '#667eea', marginBottom: '5px'}}>Phone</h4>
                  <p>+254728617735</p>
                </div>
                <div style={{marginBottom: '20px'}}>
                  <h4 style={{color: '#667eea', marginBottom: '5px'}}>Location</h4>
                  <p>Nairobi, Kenya</p>
                </div>
                <div>
                  <h4 style={{color: '#667eea', marginBottom: '10px'}}>Connect</h4>
                  <div style={{display: 'flex', gap: '15px'}}>
                    <a href="#" style={{color: '#667eea', textDecoration: 'none'}}>LinkedIn</a>
                    <a href="#" style={{color: '#667eea', textDecoration: 'none'}}>GitHub</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 style={{marginBottom: '30px', color: '#333'}}>Send a Message</h2>
              <form onSubmit={handleSubmit} className="card">
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '5px', fontWeight: '600'}}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '5px', fontWeight: '600'}}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '5px', fontWeight: '600'}}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
                
                <div style={{marginBottom: '30px'}}>
                  <label style={{display: 'block', marginBottom: '5px', fontWeight: '600'}}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <button type="submit" className="btn" style={{width: '100%'}}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;