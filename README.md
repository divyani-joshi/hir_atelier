# Hir Atelier

A modern full-stack web application for showcasing and booking creative services including Mehendi, Fashion Design, and Craft Work.

## Overview

Hir Atelier is a portfolio and service booking platform that allows users to explore creative collections, view services, read blogs, browse galleries, and submit booking inquiries. The platform also includes an admin dashboard for managing content efficiently.

## Features

### User Features

* Browse service categories
* View detailed service information
* Explore gallery collections
* Read blogs and updates
* Submit booking requests
* Online payment integration
* Contact and feedback forms
* User accounts and profiles
* Responsive design for mobile and desktop

### Admin Features

* Secure authentication
* Manage categories
* Manage services
* Manage gallery images
* Manage blogs
* View and manage bookings
* View customer feedback

## Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap / CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

## Project Structure

Frontend:

```text
src/
├── assets/      
├── common/      # Reusable components
├── pages/       # Application pages
├── utility/     # Axios configuration and utilities
├── App.jsx
└── main.jsx
```

Backend:

```text
apis/
├── common/     # Authentication APIs
├── user/       # User-facing APIs
└── admin/      # Admin management APIs

db/
└── dbconnect.js

uploads/
└── Uploaded images

middleware/
└── Authentication middleware
```

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd hir-atelier
```

### Backend Setup

```bash
cd hir_backend
npm install
npm start
```

### Frontend Setup

```bash
cd user
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Future Improvements

* Email notifications
* Booking status tracking
* AI-powered service recommendations

## Author

Divyani Joshi

Full Stack Developer

## License

This project is licensed under the MIT License.
