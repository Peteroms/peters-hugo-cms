import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Multi-tier AWS Infrastructure",
      description: "Designed and deployed a scalable 3-tier architecture using Terraform, featuring auto-scaling groups, load balancers, RDS databases, and VPC networking. Implemented security best practices with IAM roles and security groups.",
      technologies: ["AWS", "Terraform", "VPC", "RDS", "Auto Scaling"]
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines using Jenkins and AWS CodePipeline for automated testing, building, and deployment. Integrated with GitHub webhooks and implemented blue-green deployment strategies.",
      technologies: ["Jenkins", "AWS CodePipeline", "GitHub", "Docker", "Blue-Green Deployment"]
    },
    {
      title: "Kubernetes Microservices Platform",
      description: "Deployed and managed a microservices architecture on Amazon EKS with service mesh, monitoring, and logging. Implemented Helm charts for application deployment and ArgoCD for GitOps workflows.",
      technologies: ["Kubernetes", "EKS", "Helm", "ArgoCD", "Istio"]
    },
    {
      title: "Infrastructure Monitoring Stack",
      description: "Set up comprehensive monitoring using Prometheus, Grafana, and ELK stack. Created custom dashboards, alerting rules, and automated incident response workflows for 24/7 system visibility.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "AlertManager", "Kibana"]
    }
  ];

  return (
    <div>
      <section className="hero" style={{padding: '80px 0'}}>
        <div className="container">
          <h1>My Projects</h1>
          <p>Showcasing real-world DevOps and cloud infrastructure solutions</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <h3>{project.title}</h3>
                <p style={{marginBottom: '20px'}}>{project.description}</p>
                <div>
                  <strong style={{color: '#667eea'}}>Technologies:</strong>
                  <div style={{marginTop: '10px'}}>
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        style={{
                          display: 'inline-block',
                          background: '#f1f3f4',
                          padding: '4px 8px',
                          margin: '2px',
                          borderRadius: '4px',
                          fontSize: '0.9rem',
                          color: '#333'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '30px', fontSize: '2.5rem', color: '#333'}}>Service Offerings</h2>
          <div className="grid">
            <div className="card">
              <h3>Cloud Architecture Consulting</h3>
              <p>Assessment and design of scalable cloud infrastructure tailored to your business needs. Migration strategies and cost optimization recommendations.</p>
            </div>
            <div className="card">
              <h3>DevOps Implementation</h3>
              <p>End-to-end CI/CD pipeline setup, automation of deployment processes, and implementation of DevOps best practices for faster, reliable software delivery.</p>
            </div>
            <div className="card">
              <h3>Infrastructure Monitoring</h3>
              <p>Comprehensive monitoring and alerting solutions to ensure system reliability, performance optimization, and proactive incident management.</p>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <a href="/contact" className="btn">Discuss Your Project</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;