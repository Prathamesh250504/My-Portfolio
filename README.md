# Prathamesh Pabe — Portfolio

A production-ready personal portfolio website with a full-stack contact form backed by MongoDB Atlas and Gmail email notifications.

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide React

**Backend** (`/server`)
- Node.js + Express
- MongoDB Atlas
- Nodemailer (Gmail SMTP)

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas account
- Gmail account with App Password

### Frontend

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

### Backend

```sh
cd server
npm install
node index.js
```

### Environment Variables

**Frontend** — create `.env` in root:
```
VITE_API_URL=http://localhost:5000
```

**Backend** — create `server/.env`:
```
MONGO_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/
PORT=5000
ALLOWED_ORIGIN=http://localhost:8080
GMAIL_USER=your_gmail@gmail.com
GMAIL_APP_PASSWORD=your_16_char_app_password
```

## Features

- Responsive, animated portfolio sections (Hero, About, Skills, Experience, Projects, Certifications, Contact)
- Contact form — stores messages in MongoDB Atlas
- Email notification on new message via Gmail SMTP
- Download Resume button
- Project showcase with live demo and GitHub links
- Experience timeline with certificate links

## Deployment

See `render.yaml` for deploying both frontend (static site) and backend (web service) on [Render](https://render.com).

Set the following env vars in the Render dashboard:
- Backend: `MONGO_URI`, `ALLOWED_ORIGIN`
- Frontend: `VITE_API_URL`
