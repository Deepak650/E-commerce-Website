# E-commerce Website - Static Site

This is a simple static e-commerce website built with HTML, CSS, and JavaScript. The project is containerized using Docker and can be easily deployed on any platform using Kubernetes.

## Features

- **Product Listings**: Displays products dynamically with JavaScript.
- **Cart**: Allows users to view and manage their shopping cart (front-end only).
- **Responsive Design**: Optimized for both mobile and desktop views.
- **Dockerized**: The project is packaged in a Docker container.
- **Kubernetes Deployment**: The website can be deployed on Kubernetes for easy scaling and management.
- **Multi-page Navigation**: Includes pages for Home, Products, Cart, Checkout, Contact, Login, Register, and About.

## Table of Contents

1. [Technologies](#technologies)
2. [Project Setup](#project-setup)
3. [Docker Setup](#docker-setup)
4. [Kubernetes Deployment](#kubernetes-deployment)
5. [File Structure](#file-structure)
6. [Credits](#credits)

## Technologies

- **HTML5**: Used for the structure and content of the pages.
- **CSS3**: For styling and responsive layout.
- **JavaScript**: Dynamic functionality such as managing products and cart.
- **Docker**: Containerization of the web app for easy deployment.
- **Nginx**: Web server to serve the static files in Docker.
- **Kubernetes**: For managing containerized applications at scale.
- **Optional**: Ingress controllers for routing traffic in Kubernetes.

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/ecommerce-website.git
   cd ecommerce-website
