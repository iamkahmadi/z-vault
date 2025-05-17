# Z Vault - Password Management App

**Z Vault** is a password management application that allows users to securely store, manage, and retrieve passwords. It features user authentication, password CRUD operations, and utilizes MongoDB for data storage. This project consists of two main parts:

1. **Frontend**: An Angular application for interacting with the user interface.
2. **Backend**: A NestJS application that provides the API for user authentication and password management, with MongoDB as the database.

## Features

* **User Authentication**: Register and log in to securely access your vault.
* **Password Management**: Create, Read, Update, and Delete (CRUD) passwords.
* **MongoDB**: All data is stored securely in MongoDB.

---

## Table of Contents

* [Frontend Setup](#frontend-setup)
* [Backend Setup](#backend-setup)
* [Docker Configuration](#docker-configuration)
* [Technologies Used](#technologies-used)

---

## Frontend Setup

The frontend is built using Angular. It communicates with the backend API to handle user login, registration, and password management.

### Steps to Run the Frontend

1. Navigate to the `password-manager` folder:

   ```bash
   cd password-manager
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the Angular development server:

   ```bash
   ng serve
   ```

4. The application will be accessible at [http://localhost:4200](http://localhost:4200).

---

## Backend Setup

The backend is built using NestJS. It is configured to run in a Docker container, along with MongoDB, for secure data storage and API access.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Docker](https://www.docker.com/) (latest version)
* [Docker Compose](https://docs.docker.com/compose/) (latest version)

### Steps to Run the Backend

1. Navigate to the `password-manager-backend` folder:

   ```bash
   cd password-manager-backend
   ```

2. Start the backend API and MongoDB using Docker Compose:

   ```bash
   docker-compose up -d
   ```

3. The backend API will be running on [http://localhost:3000](http://localhost:3000).

---

## Docker Configuration

The backend and MongoDB are containerized using Docker. The `docker-compose.yml` file in the `password-manager-backend` folder sets up the following services:

* **mongo**: MongoDB container to store data.
* **backend**: The NestJS backend API.

### Docker Compose Steps

1. **Build and Start Services**:
   To build and run the services in the background, use the following command:

   ```bash
   docker-compose up -d
   ```

2. **Stop Services**:
   To stop the services, run:

   ```bash
   docker-compose down
   ```

---

## Technologies Used

* **Frontend**: Angular, Tailwind CSS,TypeScript
* **Backend**: NestJS, TypeScript
* **Database**: MongoDB
* **Containerization**: Docker, Docker Compose

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

