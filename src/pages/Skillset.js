import React from 'react';

const Skillset = () => {
  const skills = [
    {
      title: "Cloud Infrastructure (AWS)",
      description: "Deep expertise in AWS services including EC2, S3, RDS, Lambda, VPC, IAM, and CloudFormation. Experienced in designing scalable, secure, and cost-effective cloud architectures. Proficient in Infrastructure as Code (IaC) using Terraform and AWS CloudFormation."
    },
    {
      title: "DevOps & CI/CD",
      description: "Building robust CI/CD pipelines using Jenkins, GitHub Actions, AWS CodePipeline, and GitLab CI. Automating deployment processes and ensuring continuous integration and delivery. Experience with configuration management tools like Ansible and Puppet."
    },
    {
      title: "Containerization & Orchestration",
      description: "Expert in Docker containerization and Kubernetes orchestration. Experience with Amazon ECS, EKS, and container registry management. Implementing microservices architecture and container security best practices."
    },
    {
      title: "Monitoring & Observability",
      description: "Implementing comprehensive monitoring solutions using CloudWatch, Prometheus, Grafana, and ELK stack. Setting up alerting systems and creating dashboards for system visibility. Performance optimization and troubleshooting distributed systems."
    },
    {
      title: "Security & Compliance",
      description: "Implementing security best practices in cloud environments. Experience with AWS security services, IAM policies, and compliance frameworks. Vulnerability assessment and security automation in CI/CD pipelines."
    }
  ];

  return (
    <div>
      <section className="hero" style={{padding: '80px 0'}}>
        <div className="container">
          <h1>My Skillset</h1>
          <p>Technical expertise in cloud infrastructure, DevOps practices, and modern software delivery</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {skills.map((skill, index) => (
              <div key={index} className="card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333'}}>Technologies & Tools</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center'}}>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>Cloud Platforms</h4>
              <p>AWS, Azure, GCP</p>
            </div>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>Infrastructure</h4>
              <p>Terraform, CloudFormation, Ansible</p>
            </div>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>Containers</h4>
              <p>Docker, Kubernetes, ECS, EKS</p>
            </div>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>CI/CD</h4>
              <p>Jenkins, GitHub Actions, GitLab CI</p>
            </div>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>Monitoring</h4>
              <p>Prometheus, Grafana, CloudWatch</p>
            </div>
            <div>
              <h4 style={{color: '#667eea', marginBottom: '10px'}}>Languages</h4>
              <p>Python, Bash, YAML, JSON</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skillset;