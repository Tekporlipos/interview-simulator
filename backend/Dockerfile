# Use Python 3.9.18 slim image as the base
FROM python:3.9.18-slim

# Add author label
LABEL authors="tekporlipos"

# Set working directory in the container
WORKDIR /app

# Copy requirements.txt to the container
COPY requirements.txt .

# Install wheel
RUN pip3 install wheel

# Install dependencies
RUN pip3 install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Expose port 5000
EXPOSE 5000

# Command to run the Flask application
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
