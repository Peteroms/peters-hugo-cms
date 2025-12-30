# Import Existing Content to Sanity

## Step 1: Get Sanity API Token

1. Go to https://sanity.io/manage
2. Select your project "Peteroms Portfolio CMS"
3. Go to **API** tab
4. Click **Add API token**
5. Name: "Import Token"
6. Permissions: **Editor**
7. Copy the token

## Step 2: Set Environment Variable

```bash
export SANITY_TOKEN="your-token-here"
```

## Step 3: Install Dependencies and Run Import

```bash
npm install @sanity/client
node import-content.js
```

## What Will Be Imported:

✅ **4 Projects:**
- Multi-tier AWS Infrastructure
- CI/CD Pipeline Automation  
- Kubernetes Microservices Platform
- Infrastructure Monitoring Stack

✅ **3 Blog Posts:**
- Building Scalable AWS Infrastructure with Terraform
- Deploying Microservices on Amazon EKS
- DevOps Best Practices for Modern Software Delivery

✅ **5 Skills:**
- Cloud Infrastructure (AWS)
- DevOps & CI/CD
- Containerization & Orchestration
- Monitoring & Observability
- Security & Compliance

After import, your React app will display this content from Sanity instead of static data!