# Phonebook Backend

## Overview

Phonebook Backend is a RESTful API built with Node.js and Express.js for managing contacts. It provides endpoints to create, read, update, and delete contacts. MongoDB is used as the database, and Swagger is integrated for API documentation.

## Features

- Create, Read, Update, and Delete (CRUD) operations for contacts.
- MongoDB database integration.
- Swagger for interactive API documentation.
- Deployed backend accessible online.

## API Documentation

The API documentation is available via Swagger at the following URL:
[https://contacts-app-0d22.onrender.com/api-docs]

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

4. Set up environment variables: Create a `bash .env ` file in the root directory and add the following:

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

The application uses the following environment variables:

- PORT: Port number for the server (default: 5000).
- MONGO_URI: MongoDB connection string.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Swagger (for API documentation)
