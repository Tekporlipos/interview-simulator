#!/bin/bash

# Update package index
sudo apt update

# Install NGINX
sudo apt install nginx -y

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

# Check NGINX configuration syntax
sudo nginx -t

# Reload NGINX to apply changes
sudo systemctl reload nginx

# Check NGINX status
sudo systemctl status nginx
