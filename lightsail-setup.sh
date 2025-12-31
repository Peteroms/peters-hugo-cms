#!/bin/bash

# Run this script on your Amazon Lightsail Ubuntu instance

echo "🔧 Setting up Lightsail instance for React portfolio..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Nginx
echo "🌐 Installing Nginx..."
sudo apt install nginx -y

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Create web directory
echo "📁 Setting up web directory..."
sudo mkdir -p /var/www/portfolio
sudo chown -R $USER:$USER /var/www/portfolio

# Extract portfolio files (assuming portfolio-build.tar.gz is uploaded to home directory)
echo "📂 Extracting portfolio files..."
if [ -f ~/portfolio-build.tar.gz ]; then
    tar -xzf ~/portfolio-build.tar.gz -C /var/www/portfolio/
    echo "✅ Portfolio files extracted"
else
    echo "❌ portfolio-build.tar.gz not found in home directory"
    echo "Please upload the build package first"
    exit 1
fi

# Create Nginx configuration
echo "⚙️ Configuring Nginx..."
sudo tee /etc/nginx/sites-available/portfolio > /dev/null <<EOF
server {
    listen 80;
    listen [::]:80;
    
    root /var/www/portfolio;
    index index.html index.htm;
    
    server_name _;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    # Reload Nginx
    sudo systemctl reload nginx
    echo "✅ Nginx configured and reloaded successfully"
    echo ""
    echo "🎉 Deployment complete!"
    echo "Your portfolio is now live on your Lightsail instance"
    echo "Access it via your instance's public IP address"
else
    echo "❌ Nginx configuration test failed"
    exit 1
fi

# Show status
echo ""
echo "📊 Service Status:"
sudo systemctl status nginx --no-pager -l