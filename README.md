# Task-manager-mern-application


```markdown
# MERN Task Manager

A full-stack task management application built with MongoDB, Express, React, and Node.js.

## Features
- User authentication (Register/Login)
- Create, Read, Update, Delete tasks
- Mark tasks as complete
- Responsive design
- JWT authentication

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mern-task-manager
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

4. Create .env file in server folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_jwt_secret_key_here
```

5. Start MongoDB (if running locally)

6. Run the application:

Terminal 1 (Server):
```bash
cd server
npm run dev
```

Terminal 2 (Client):
```bash
cd client
npm start
```

7. Open http://localhost:3000

## Tech Stack
- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT

## API Endpoints
- POST /api/auth/register - Register user
- POST /api/auth/login - Login user
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
```

