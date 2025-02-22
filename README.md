# Contacts-app Backend

## Overview

Phonebook Backend is a RESTful API built with Node.js and Express.js for managing contacts. It provides endpoints to create, read, update, and delete contacts. MongoDB is used as the database, and Swagger is integrated for API documentation.

## Features

- Create, Read, Update, and Delete (CRUD) operations for contacts.
- MongoDB database integration.
- Swagger for interactive API documentation.
- Deployed backend accessible online.

## API Documentation

The API documentation is available via Swagger at the following URL:
https://contacts-app-0d22.onrender.com/api-docs

## Installation and Setup

### Prerequisites

- Node.js installed on your machine.
- MongoDB connection string.

## Steps

1. Clone the repository:

```bash
   git clone https://github.com/your-username/phonebook-backend.git
```

2. Navigate to the project directory:

```bash
    cd phonebook-backend
```

3. Install dependencies:

```bash
    npm install
```

4. Set up environment variables: Create a `.env ` file in the root directory and add the following:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

5. Start the server:

```bash
 npm start
```

6. Access the API: The server will run on http://localhost:5000 (or the deployed URL if hosted).

## Environment Variables

The application requires the following environment variables to run properly:

### Server Configuration

- `PORT`: The port number for the server to listen on (default: 5000).

### Database Configuration

- `MONGODB_USER`: Username for accessing the MongoDB database.
- `MONGODB_PASSWORD`: Password for the database user.
- `MONGODB_URL`: MongoDB connection URL (excluding database name).
- `MONGODB_DB`: The name of the database to connect to.

### Email (SMTP) Configuration

Used for sending emails (e.g., for notifications or password resets).

- `SMTP_HOST`: Hostname of the SMTP server.
- `SMTP_PORT`: Port number for the SMTP server (e.g., 587 for TLS).
- `SMTP_USER`: Username for the SMTP server.
- `SMTP_PASSWORD`: Password for the SMTP user.
- `SMTP_FROM`: The email address used as the sender.

### Application Settings

- `APP_DOMAIN`: The domain where the application is hosted (e.g., https://yourapp.com).
- `JWT_SECRET`: Secret key for signing and verifying JSON Web Tokens (JWT).

### Cloudinary Configuration

If Cloudinary is enabled for media storage, provide the following:

- `CLOUD_NAME`: Your Cloudinary cloud name.
- `API_KEY`: Cloudinary API key.
- `API_SECRET`: Cloudinary API secret.
- `ENABLE_CLOUDINARY`: Set to true to enable Cloudinary integration.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Swagger (for API documentation)

## How to Contribute

1. Fork the repository.
2. Create a new branch:

```bash
   git checkout -b feature-name
```

3. Make your changes and commit them:

```bash
git commit -m "Add feature-name"
```

3. Push to your branch:

```bash
git push origin feature-name
```

5. Open a pull request.
