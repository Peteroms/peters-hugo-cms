const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'veupdktb',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need to get this from Sanity
  apiVersion: '2023-05-03',
})

// Existing content data
const projects = [
  {
    _type: 'project',
    title: 'Multi-tier AWS Infrastructure',
    description: 'Designed and deployed a scalable 3-tier architecture using Terraform, featuring auto-scaling groups, load balancers, RDS databases, and VPC networking. Implemented security best practices with IAM roles and security groups.',
    technologies: ['AWS', 'Terraform', 'VPC', 'RDS', 'Auto Scaling'],
    publishedAt: '2024-01-01T00:00:00Z'
  },
  {
    _type: 'project',
    title: 'CI/CD Pipeline Automation',
    description: 'Built comprehensive CI/CD pipelines using Jenkins and AWS CodePipeline for automated testing, building, and deployment. Integrated with GitHub webhooks and implemented blue-green deployment strategies.',
    technologies: ['Jenkins', 'AWS CodePipeline', 'GitHub', 'Docker', 'Blue-Green Deployment'],
    publishedAt: '2024-01-02T00:00:00Z'
  },
  {
    _type: 'project',
    title: 'Kubernetes Microservices Platform',
    description: 'Deployed and managed a microservices architecture on Amazon EKS with service mesh, monitoring, and logging. Implemented Helm charts for application deployment and ArgoCD for GitOps workflows.',
    technologies: ['Kubernetes', 'EKS', 'Helm', 'ArgoCD', 'Istio'],
    publishedAt: '2024-01-03T00:00:00Z'
  },
  {
    _type: 'project',
    title: 'Infrastructure Monitoring Stack',
    description: 'Set up comprehensive monitoring using Prometheus, Grafana, and ELK stack. Created custom dashboards, alerting rules, and automated incident response workflows for 24/7 system visibility.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'AlertManager', 'Kibana'],
    publishedAt: '2024-01-04T00:00:00Z'
  }
]

const posts = [
  {
    _type: 'post',
    title: 'Building Scalable AWS Infrastructure with Terraform',
    slug: { _type: 'slug', current: 'aws-infrastructure-terraform' },
    excerpt: 'Learn how to design and deploy a robust, scalable AWS infrastructure using Infrastructure as Code principles with Terraform. This guide covers best practices for security, networking, and automation.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Building cloud infrastructure that scales efficiently while maintaining security and cost-effectiveness is crucial for modern applications. In this post, I\'ll walk you through designing a production-ready AWS infrastructure using Terraform.'
          }
        ]
      }
    ],
    readTime: '8 min read',
    publishedAt: '2024-01-15T15:04:10Z'
  },
  {
    _type: 'post',
    title: 'Deploying Microservices on Amazon EKS',
    slug: { _type: 'slug', current: 'microservices-amazon-eks' },
    excerpt: 'A comprehensive guide to deploying and managing microservices on Amazon EKS using Helm charts, service mesh, and GitOps workflows for production-ready Kubernetes applications.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Kubernetes has become the de facto standard for container orchestration, and Amazon EKS provides a managed Kubernetes service that simplifies cluster management.'
          }
        ]
      }
    ],
    readTime: '12 min read',
    publishedAt: '2024-02-10T14:04:10Z'
  },
  {
    _type: 'post',
    title: 'DevOps Best Practices for Modern Software Delivery',
    slug: { _type: 'slug', current: 'devops-best-practices' },
    excerpt: 'Essential DevOps practices that every organization should implement to achieve faster, more reliable software delivery while maintaining security and quality standards.',
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'DevOps has transformed how we build, deploy, and maintain software systems. After years of implementing DevOps practices across various organizations, I\'ve identified key principles that consistently deliver results.'
          }
        ]
      }
    ],
    readTime: '10 min read',
    publishedAt: '2024-03-05T16:04:10Z'
  }
]

const skills = [
  {
    _type: 'skill',
    title: 'Cloud Infrastructure (AWS)',
    description: 'Deep expertise in AWS services including EC2, S3, RDS, Lambda, VPC, IAM, and CloudFormation. Experienced in designing scalable, secure, and cost-effective cloud architectures. Proficient in Infrastructure as Code (IaC) using Terraform and AWS CloudFormation.',
    category: 'cloud',
    technologies: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'VPC', 'IAM', 'CloudFormation', 'Terraform'],
    order: 1
  },
  {
    _type: 'skill',
    title: 'DevOps & CI/CD',
    description: 'Building robust CI/CD pipelines using Jenkins, GitHub Actions, AWS CodePipeline, and GitLab CI. Automating deployment processes and ensuring continuous integration and delivery. Experience with configuration management tools like Ansible and Puppet.',
    category: 'devops',
    technologies: ['Jenkins', 'GitHub Actions', 'AWS CodePipeline', 'GitLab CI', 'Ansible', 'Puppet'],
    order: 2
  },
  {
    _type: 'skill',
    title: 'Containerization & Orchestration',
    description: 'Expert in Docker containerization and Kubernetes orchestration. Experience with Amazon ECS, EKS, and container registry management. Implementing microservices architecture and container security best practices.',
    category: 'containers',
    technologies: ['Docker', 'Kubernetes', 'ECS', 'EKS', 'Container Registry'],
    order: 3
  },
  {
    _type: 'skill',
    title: 'Monitoring & Observability',
    description: 'Implementing comprehensive monitoring solutions using CloudWatch, Prometheus, Grafana, and ELK stack. Setting up alerting systems and creating dashboards for system visibility. Performance optimization and troubleshooting distributed systems.',
    category: 'monitoring',
    technologies: ['CloudWatch', 'Prometheus', 'Grafana', 'ELK Stack', 'AlertManager'],
    order: 4
  },
  {
    _type: 'skill',
    title: 'Security & Compliance',
    description: 'Implementing security best practices in cloud environments. Experience with AWS security services, IAM policies, and compliance frameworks. Vulnerability assessment and security automation in CI/CD pipelines.',
    category: 'security',
    technologies: ['AWS Security', 'IAM', 'Compliance Frameworks', 'Vulnerability Assessment'],
    order: 5
  }
]

async function importData() {
  try {
    console.log('Importing projects...')
    for (const project of projects) {
      await client.create(project)
      console.log(`✅ Created project: ${project.title}`)
    }

    console.log('Importing blog posts...')
    for (const post of posts) {
      await client.create(post)
      console.log(`✅ Created post: ${post.title}`)
    }

    console.log('Importing skills...')
    for (const skill of skills) {
      await client.create(skill)
      console.log(`✅ Created skill: ${skill.title}`)
    }

    console.log('🎉 All content imported successfully!')
  } catch (error) {
    console.error('❌ Error importing data:', error)
  }
}

importData()