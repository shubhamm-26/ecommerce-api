# Ecommerce API with Node.js

This project implements an Ecommerce API to support various e-commerce operations such as product and category listing, product details, cart management, order processing, user authentication, and more.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Documentation](#documentation)
- [Rate Limiting](#rate-limiting)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- MongoDB (or another suitable database)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/ecommerce-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Configuration settings for the API are typically managed using environment variables. While this assignment doesn't require an `.env` file, you can still provide placeholders for the configuration settings:

   - **Database:** Configure the database connection details.
   - **JWT Secret:** Set a secret key for JWT token generation and verification.

2. To configure the API, locate the configuration files in the project and update the necessary placeholders as indicated.

## API Endpoints

### User

- **Register User:**
  - **Endpoint:** `POST /auth/register`
  - **Body:**
    ```json
    {
        "name": "shubham",
        "email": "shubham@gmail.com",
        "password": "shubham123"
    }
    ```

- **Login User:**
  - **Endpoint:** `POST /auth/login`
  - **Body:**
    ```json
    {
        "email": "shubham@gmail.com",
        "password": "shubham123"
    }
    ```

### Product

- **Create Product:**
  - **Endpoint:** `POST /products/`
  - **Request Headers:** Authorization Bearer Token
  - **Body:**
    ```json
    {
        "name": "charger",
        "description": "c-type",
        "price": 1000,
        "category":"Electronics",
        "available":true
    }
    ```

- **Get All Products:**
  - **Endpoint:** `GET /products/`

- **Get Products by Category:**
  - **Endpoint:** `GET /products/category/:categoryId`

- **Update Product:**
  - **Endpoint:** `PUT /products/update/64e0a7c5b4beafcfbad383a9`
  - **Request Headers:** Authorization Bearer Token
  - **Body:**
    ```json
    {
        "name": "charger",
        "description": "c-type",
        "price": 1500,
        "category": "64dfab95c279be34f2b8a07e",
        "available": true
    }
    ```

- **Delete Product:**
  - **Endpoint:** `DELETE /products/delete/64e0a7c5b4beafcfbad383a9`
  - **Request Headers:** Authorization Bearer Token

### Cart

- **Add to Cart:**
  - **Endpoint:** `POST /cart/`
  - **Request Headers:** Authorization Bearer Token
  - **Body:**
    ```json
    {
        "productId":"64dfab65c279be34f2b8a07a",
        "quantity":2
    }
    ```

- **Get Cart:**
  - **Endpoint:** `GET /cart/`
  - **Request Headers:** Authorization Bearer Token

- **Delete from Cart:**
  - **Endpoint:** `DELETE /cart/`
  - **Request Headers:** Authorization Bearer Token
  - **Body:**
    ```json
    {
        "productId":"64dfab65c279be34f2b8a07a"
    }
    ```

### Order

- **Place Order:**
  - **Endpoint:** `POST /orders/`
  - **Request Headers:** Authorization Bearer Token

- **Get Order:**
  - **Endpoint:** `GET /orders/`
  - **Request Headers:** Authorization Bearer Token

### Category

- **Get All Categories:**
  - **Endpoint:** `GET /category`

- **Get Category by Name:**
  - **Endpoint:** `GET /category/name/stationery`


**Note**: Only users with an admin role can add and delete product listings.

## Authentication

The API uses JSON Web Tokens (JWT) for user authentication. Users can register, log in, and obtain a token to authenticate API requests.

## Error Handling

The API includes appropriate error handling mechanisms to provide meaningful error messages and status codes in response to different scenarios.

## Documentation

The API documentation is available through Swagger. You can access the Swagger documentation by navigating to `http://localhost:3000/api-docs` after starting the server.

## Rate Limiting

Rate limiting is implemented to prevent abuse and maintain server stability. Requests to sensitive endpoints are limited to a certain number per time window.

## License

This project is licensed under the [MIT License](LICENSE).
