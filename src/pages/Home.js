import React from 'react';
import passportPhoto from '../assets/images/image1.jpeg';
import serverImage from '../assets/images/server.jpg';
import backgroundImage from '../assets/images/background1.jpg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';

const Home = () => {
  return (
    <div>
      <section className="hero" style={{backgroundImage: `linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url(${serverImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap'}}>
            <img 
              src={passportPhoto} 
              alt="Peter Omondi" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            />
            <div style={{textAlign: 'center'}}>
              <h1>Peter Omondi</h1>
              <p>Cloud & DevOps Engineer</p>
              <p>Building scalable, secure, and reliable cloud solutions that drive innovation and operational efficiency</p>
              <a href="/contact" className="btn">Get In Touch</a>
            </div>
          </div>
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

      <section className="section" style={{background: '#f8f9fa', position: 'relative', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(248, 249, 250, 0.9)', zIndex: 1}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333'}}>Why Choose Me?</h2>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '40px', marginBottom: '30px', flexWrap: 'wrap'}}>
            <img 
              src={image2} 
              alt="Professional work" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 3
              }}
            />
            <img 
              src={image3} 
              alt="Technical expertise" 
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '10px',
                objectFit: 'cover',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                zIndex: 3
              }}
            />
          </div>
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