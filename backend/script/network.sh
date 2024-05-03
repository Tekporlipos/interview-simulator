#!/bin/bash

# Update package index
sudo apt update

# Install NGINX
sudo apt install nginx -y

# Copy nginx.conf to appropriate directory
sudo cp nginx.conf /etc/nginx/sites-available/api.interviewsimulator.org

# Create a symbolic link to enable the site
sudo ln -s /etc/nginx/sites-available/api.interviewsimulator.org /etc/nginx/sites-enabled/

# Test NGINX configuration syntax
sudo nginx -t

# If NGINX configuration is valid, reload NGINX to apply changes
if [ $? -eq 0 ]; then
    sudo systemctl reload nginx
else
    echo "NGINX configuration syntax is invalid. Please check nginx.conf."
    exit 1
fi

# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Allow HTTPS traffic through the firewall
sudo ufw allow 'Nginx Full'

# Reload firewall rules
sudo ufw reload

# Obtain SSL certificate using Certbot
sudo certbot --nginx -d api.interviewsimulator.org --email dzikunujohn36@gmail.com --agree-tos -n

# Check if SSL certificate installation is successful
if [ $? -ne 0 ]; then
    echo "SSL certificate installation failed."
    exit 1
else
    echo "SSL certificate installed successfully."
fi

# Check NGINX status
sudo systemctl status nginx
