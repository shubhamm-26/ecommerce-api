Ecommerce API with Node.js

This project implements an Ecommerce API to support various e-commerce operations such as product and category listing, product details, cart management, order processing, user authentication, and more.
Table of Contents

    Getting Started
        Prerequisites
        Installation
        Configuration
    API Endpoints
    Authentication
    Error Handling
    Documentation
    Rate Limiting
    License

Getting Started
Prerequisites

    Node.js (v12 or higher)
    MongoDB (or another suitable database)

Installation

    Clone this repository to your local machine:

    bash

git clone https://github.com/yourusername/ecommerce-api.git

Navigate to the project directory:

bash

cd ecommerce-api

Install the required dependencies:

bash

    npm install

Configuration

    Configuration settings for the API are typically managed using environment variables. While this assignment doesn't require an .env file, you can still provide placeholders for the configuration settings:
        Database: Configure the database connection details.
        JWT Secret: Set a secret key for JWT token generation and verification.

    To configure the API, locate the configuration files in the project and update the necessary placeholders as indicated.

API Endpoints

    ... (List the API endpoints as previously described)

Authentication

The API uses JSON Web Tokens (JWT) for user authentication. Users can register, log in, and obtain a token to authenticate API requests.
Error Handling

The API includes appropriate error handling mechanisms to provide meaningful error messages and status codes in response to different scenarios.
Documentation

The API documentation is available through Swagger. You can access the Swagger documentation by navigating to http://localhost:3000/api-docs after starting the server.
Rate Limiting

Rate limiting is implemented to prevent abuse and maintain server stability. Requests to sensitive endpoints are limited to a certain number per time window.
