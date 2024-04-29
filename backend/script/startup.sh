#!/bin/bash

# Install Docker prerequisites
sudo apt update
sudo apt install apt-transport-https curl gnupg-agent ca-certificates software-properties-common -y

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add Docker repository for Ubuntu 20.04 (focal)
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

# Install Docker
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io -y

# Add the current user to the docker group
sudo usermod -aG docker $USER

# Check if the Docker daemon is running
if ! sudo systemctl is-active --quiet docker; then
    echo "Docker daemon is not running. Starting Docker..."
    sudo systemctl start docker
fi

# Check the ownership and permissions of the Docker socket
DOCKER_SOCKET="/var/run/docker.sock"
if [ -S "$DOCKER_SOCKET" ]; then
    DOCKER_SOCKET_OWNER=$(stat -c "%U" "$DOCKER_SOCKET")
    if [ "$DOCKER_SOCKET_OWNER" != "root" ]; then
        echo "Docker socket is not owned by root. Fixing permissions..."
        sudo chown root:docker "$DOCKER_SOCKET"
    fi

    if [ "$(stat -c "%a" "$DOCKER_SOCKET")" != "660" ]; then
        echo "Docker socket permissions are incorrect. Fixing permissions..."
        sudo chmod 660 "$DOCKER_SOCKET"
    fi
else
    echo "Docker socket not found."
    exit 1
fi

# Install Docker Compose
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose
chmod +x ~/.docker/cli-plugins/docker-compose

# Display Docker and Docker Compose versions
docker version
docker compose version
