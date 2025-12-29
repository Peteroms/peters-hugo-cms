import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Peter Omondi</h1>
          <p>Cloud & DevOps Engineer</p>
          <p>Building scalable, secure, and reliable cloud solutions that drive innovation and operational efficiency</p>
          <a href="/contact" className="btn">Get In Touch</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: '#333'}}>What I Do</h2>
          <div className="grid">
            <div className="card">
              <h3>AWS Cloud Infrastructure</h3>
              <p>Deep expertise in AWS services including EC2, S3, RDS, Lambda, VPC, and IAM. I design scalable, secure, and cost-effective cloud architectures using Infrastructure as Code with Terraform and CloudFormation.</p>
            </div>
            <div className="card">
              <h3>DevOps & CI/CD</h3>
              <p>Building robust CI/CD pipelines using Jenkins, GitHub Actions, and AWS CodePipeline. I automate deployment processes and ensure continuous integration and delivery with configuration management tools.</p>
            </div>
            <div className="card">
              <h3>Container Orchestration</h3>
              <p>Expert in Docker containerization and Kubernetes orchestration. Experience with Amazon ECS, EKS, and implementing microservices architecture with container security best practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333'}}>Why Choose Me?</h2>
          <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: '#666'}}>
              I value accountability, transparency, and ethical practice, ensuring systems are built and operated according to best standards. 
              I respect collaboration, continuous improvement, and service excellence, believing that trust, consistency, and professionalism 
              are essential to delivering dependable cloud and DevOps solutions.
            </p>
            <a href="/skillset" className="btn" style={{marginTop: '30px'}}>View My Skills</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;