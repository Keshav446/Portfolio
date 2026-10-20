# Keshav Maheshwari — Personal Portfolio
A professional, responsive personal portfolio built with the MERN stack. It showcases my profile, technical skills, projects, education, achievements, and resume, and provides a contact form connected to an Express API and MongoDB.
Live Deployment
- Frontend: https://my-portfolio-beige-kappa-55.vercel.app
- Backend API: https://my-portfolio-backend-qld1.onrender.com
- Health Check: https://my-portfolio-backend-qld1.onrender.com/api/health

Features
- Responsive portfolio UI for desktop, tablet, and mobile.
- Hero/landing section with professional introduction and calls to action.
- About section with profile information.
- Skills grouped by technology/category.
- Project showcase with project details and technology stack.
- Education and experience timeline.
- Certifications and achievements section.
- Resume downloads through Express backend routes (PDF and Word documents, if configured in the deployed backend).
- Contact form connected to the Express API.
- Contact submissions stored in MongoDB using Mongoose.
- Optional email notifications through Nodemailer.
- Dark/light mode and animations, where implemented in the UI.


Tech Stack
Frontend
- React
- Vite
- React Router (if enabled in the current frontend)
- CSS

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Nodemailer (contact email notifications)

Deployment
- Vercel (frontend)
- Render (backend)

Local Setup

Prerequisites
- Node.js and npm installed
- MongoDB connection URI (local MongoDB or MongoDB Atlas)
- SMTP credentials only if you want email notifications

1. Clone the repository
git clone <YOUR_PUBLIC_GITHUB_REPOSITORY_URL>
cd <YOUR_REPOSITORY_FOLDER>

2. Install frontend dependencies
cd client
npm install

Create client/.env for local development: VITE_API_URL=http://localhost:5001

Use the port your backend actually listens on. If your local backend uses port 5000, set VITE_API_URL=http://localhost:5000 instead.
Start the frontend in a terminal: npm run dev
Vite usually serves the frontend at http://localhost:5173

3. Install backend dependencies
Open a second terminal from the repository root:
cd backend
npm install

Create backend/.env locally:
PORT=5001
MONGO_URI=your_mongodb_connection_uri
CLIENT_URL=http://localhost:5173

# Optional: configure these only if using Nodemailer
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_RECEIVER_EMAIL=your_email_address
# Optional:
# SMTP_FROM="Portfolio Contact Form <your_smtp_username>"

Start the backend:
npm run dev

4. Verify the backend
Open: http://localhost:5001/api/health
Expected response:
{
  "success": true,
  "message": "Portfolio backend is running!"
}





