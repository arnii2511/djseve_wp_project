# College Event Management System

A full-stack web application for managing college events, built with React (frontend) and Express.js (backend).

## 📁 Project Structure

```
├── frontend/          # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Express.js backend API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
└── package.json       # Root package configuration
```

## 🚀 Features

- User authentication and role-based access (Admin, Committee, User)
- Event listing, filtering, and detailed views
- Event registration system
- Event request/creation by committees
- User profile management
- Admin dashboard for managing events and users
- Image uploads with cloud storage integration

## 📋 Prerequisites

- Node.js 14+ and npm
- MongoDB database (cloud: MongoDB Atlas)
- Optional: Cloud storage credentials (for image uploads)

## 🏃 Local Development

### Backend Setup
1. Navigate to `backend/` folder
2. Copy `.env.example` to `.env` and fill in your values
3. Install dependencies: `npm install`
4. Start dev server: `npm run dev`

### Frontend Setup
1. Navigate to `frontend/` folder
2. Install dependencies: `npm install`
3. Create `.env` with `REACT_APP_API_URL=http://localhost:5000/api`
4. Start dev server: `npm start`

## 🌐 Deployment

### Backend on Render
- See [backend/README.md](backend/README.md) for detailed instructions
- Key environment variables: `MONGO_URI`, `JWT_SECRET`, `PORT`
- Start command: `npm start`

### Frontend on Vercel
- See [frontend/README.md](frontend/README.md) for detailed instructions
- Key environment variable: `REACT_APP_API_URL` (your deployed backend URL)
- Build command: `npm run build`

## 📚 API Documentation

The backend provides the following API endpoints:
- `/api/auth` - Authentication (register, login)
- `/api/events` - Event management and event requests
- `/api/registrations` - Event registrations
- `/api/users` - User management (admin)

## 🔐 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
PORT=5000
CLOUD_STORAGE_KEY=optional
CLOUD_STORAGE_SECRET=optional
ADMIN_CODE=change_this
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api (dev) or deployed URL (prod)
```

## 📝 License

This project is for educational purposes.
