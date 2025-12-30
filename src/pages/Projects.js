import React, { useState, useEffect } from 'react';
import { fetchProjects, urlFor } from '../lib/sanity';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fallback static data
  const staticProjects = [
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

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const sanityProjects = await fetchProjects();
        if (sanityProjects && sanityProjects.length > 0) {
          setProjects(sanityProjects);
        } else {
          setProjects(staticProjects);
        }
      } catch (error) {
        console.log('Using static data:', error.message);
        setProjects(staticProjects);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh'}}>
        <div>Loading projects...</div>
      </div>
    );
  }

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
              <div key={project._id || index} className="card">
                {project.image && (
                  <img 
                    src={urlFor(project.image).width(400).height(200).url()} 
                    alt={project.title}
                    style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px', marginBottom: '20px'}}
                  />
                )}
                <h3>{project.title}</h3>
                <p style={{marginBottom: '20px'}}>{project.description}</p>
                {project.technologies && (
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
                )}
                {(project.projectUrl || project.githubUrl) && (
                  <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
                    {project.projectUrl && (
                      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '0.9rem', padding: '8px 16px'}}>
                        View Project
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn" style={{fontSize: '0.9rem', padding: '8px 16px', background: '#333'}}>
                        GitHub
                      </a>
                    )}
                  </div>
                )}
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