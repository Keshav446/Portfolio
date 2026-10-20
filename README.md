# Keshav Maheshwari — Personal Portfolio

A responsive personal portfolio built using the MERN stack to showcase my profile, skills, projects, education, certifications, and resume.

## Live Deployment

- **Frontend:** https://my-portfolio-beige-kappa-55.vercel.app
- **Backend:** https://my-portfolio-backend-qld1.onrender.com
- **Health Check:** https://my-portfolio-backend-qld1.onrender.com/api/health

## Features

- Responsive design for desktop and mobile.
- About, skills, projects, education, and certifications sections.
- Resume download functionality.
- Contact form with MongoDB storage.
- Optional email notifications using Nodemailer.
- Dark and light themes.

## Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Email:** Nodemailer
- **Deployment:** Vercel and Render

## Local Setup

### Prerequisites

- Node.js and npm
- MongoDB connection URI
- SMTP credentials (optional, for email notifications)

### 1. Clone the Repository

```bash
git clone https://github.com/Keshav446/Portfolio.git
cd Portfolio
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `backend/.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_uri
CLIENT_URL=http://localhost:5173

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_RECEIVER_EMAIL=your_email_address
```

SMTP variables are optional if email notifications are not required. Replace placeholders with your own values.

Start the backend:

```bash
npm start
```

### 3. Set Up the Frontend

Open a new terminal from the repository root:

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The frontend will usually run at `http://localhost:5173`.

### 4. Verify the Backend

Open the following URL:

http://localhost:5000/api/health

The expected response is:

```json
{
  "success": true,
  "message": "Portfolio backend is running!"
}
```

## Environment Variables

Keep environment variables private. Never commit `.env` files containing credentials to a public repository.
