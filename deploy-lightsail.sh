#!/bin/bash

# Amazon Lightsail Deployment Script for React Portfolio

echo "🚀 Deploying to Amazon Lightsail..."

# Build the React app
echo "📦 Building React app..."
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
cd build
tar -czf ../portfolio-build.tar.gz .
cd ..

echo "✅ Build package created: portfolio-build.tar.gz"
echo ""
echo "📋 Next Steps:"
echo "1. Create Lightsail instance (Ubuntu 20.04 LTS)"
echo "2. Install Nginx on the instance"
echo "3. Upload portfolio-build.tar.gz to the instance"
echo "4. Extract and configure Nginx"
echo ""
echo "💡 Run: ./lightsail-setup.sh on your Lightsail instance"