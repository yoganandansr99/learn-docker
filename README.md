# User Management System

A full-stack application for managing user data with MongoDB, FastAPI backend, and HTML/CSS/JavaScript frontend.

## Project Structure

```
├── backend/
│   ├── config/
│   │   └── database.py       # MongoDB configuration
│   ├── models/
│   │   └── user.py           # User data models
│   ├── routes/
│   │   └── user_routes.py    # API endpoints
│   ├── main.py               # FastAPI application entry point
│   ├── requirements.txt      # Python dependencies
│   └── .env                  # Environment variables
├── frontend/
│   ├── index.html            # Main HTML file
│   ├── styles/
│   │   └── style.css         # Styling
│   └── js/
│       ├── api.js            # API communication
│       └── app.js            # Application logic
└── README.md
```

## Prerequisites

- Python 3.8+
- MongoDB (running locally on port 27017)

## Setup Instructions

### 1. Install MongoDB

Make sure MongoDB is installed and running on your system.

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py
```

The backend will run on `http://localhost:8000`

### 3. Frontend Setup

Simply open `frontend/index.html` in a web browser, or use a local server:

```bash
# Using Python
cd frontend
python -m http.server 8080

# Or using Node.js http-server
npx http-server -p 8080
```

Then open `http://localhost:8080` in your browser.

## API Endpoints

- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/{user_id}` - Get a specific user
- `DELETE /api/users/{user_id}` - Delete a user

## Environment Variables

Create a `.env` file in the backend directory with:

```
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=userdb
```

## Features

- Add new users with name, education, college, and location
- View all registered users
- Delete users
- Responsive design
- Real-time notifications
