# User Management System

A web-based **User Management System** that allows users to register, log in, and manage user information. The application uses a **FastAPI backend**, **HTML/CSS/JavaScript frontend**, **Nginx**, and **MongoDB**.

## How the Application Works

```text
Browser
   ↓
Frontend (Nginx)
   ↓ /api/
Backend (FastAPI)
   ↓
MongoDB
```

* **Frontend:** Provides the user interface.
* **Backend:** Handles user registration, login, and user management operations.
* **MongoDB:** Stores user data.
* **Nginx:** Serves the frontend and forwards API requests to the backend.
* **Docker Compose:** Runs and connects the frontend and backend containers.

---

# How to Use

There are **two ways** to run this application.

## Option 1 — Clone the GitHub Repository

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_REPOSITORY_NAME
```

Create:

```text
backend/.env
```

Add your MongoDB details:

```env
MONGODB_URL=your_mongodb_connection_string
DATABASE_NAME=your_database_name
```

Then run:

```bash
docker compose up
```

Docker Compose builds/runs the application using the configuration in the repository.

Open:

```text
http://localhost
```

---

## Option 2 — Use Docker Hub Images

You can use the published Docker images **without downloading the application source code**.

### Backend Image

```text
YOUR_DOCKERHUB_USERNAME/user-management-backend:latest
```

### Frontend Image

```text
YOUR_DOCKERHUB_USERNAME/user-management-frontend:latest
```

Create a `docker-compose.yml` using these images and create:

```text
backend/.env
```

with your own MongoDB configuration:

```env
MONGODB_URL=your_mongodb_connection_string
DATABASE_NAME=your_database_name
```

Then simply run:

```bash
docker compose up
```

Docker Compose will automatically pull the images from Docker Hub, create the containers, connect them through a Docker network, and start the application.

Open:

```text
http://localhost
```

### Important

The Docker images **do not contain MongoDB credentials**. Each user must provide their own `MONGODB_URL` and `DATABASE_NAME` at runtime.

You only need **Docker** to use the published images.
