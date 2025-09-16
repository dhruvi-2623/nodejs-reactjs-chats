# React + Node Realtime Chat

A simple, secure, and responsive 1:1 chat application built with **React**, **Node.js/Express**, **MongoDB**, **Socket.IO**, **JWT (httpOnly cookies)**, and **Cloudinary** for image/file uploads. Deployed on **Render** using GitHub integration.

> **Live Demo:** (https://nodejs-reactjs-chats.onrender.com)
> **Repository:** (https://github.com/dhruvi-2623/nodejs-reactjs-chats)

---

## 🧭 Overview (For Everyone)

This app lets two people chat in real time—like WhatsApp, but much simpler:

* Create an account → log in → add contacts → start chatting.
* Messages appear instantly without refreshing the page.
* You can upload profile pictures and send images.
* Chats are private; each user maintains their **own contacts list**.

**What’s new:**

* ✅ **Private contact lists** – you only see people **you** added.
* ✅ **Login required after signup** – after creating an account, you must log in to enter the app.

---

## ✨ Features

* Authentication: sign up, log in, log out (JWT + bcrypt).
* Protected routes: only logged-in users can access chats.
* Realtime messaging with Socket.IO.
* Private contacts (not visible to others).
* Optional image uploads via Cloudinary.
* Responsive UI (desktop + mobile).

---

## 🗺️ How It Works

**Client (React/Vite)** ⇄ **API (Express)** ⇄ **Database (MongoDB Atlas)**
WebSockets keep messages live with **Socket.IO**.
Cloudinary stores profile pictures and message images.

**Auth flow:** Sign up → **log in** → cookie set → enter chat.

---

## 📂 Project Structure

```
project-root/
├─ backend/        # Express server
│  ├─ controllers/ # auth, user, message
│  ├─ models/      # User, Message
│  ├─ routes/      # auth, users, messages
│  └─ lib/         # db, cloudinary, utils
└─ frontend/       # React client
   ├─ components/  # Chat UI
   ├─ pages/       # Login, Signup, Home
   ├─ store/       # Zustand/Context state
```

---

## ⚙️ Tech Stack

* **Frontend**: React (Vite), Zustand/Context, Tailwind (optional)
* **Backend**: Node.js, Express, Mongoose
* **Realtime**: Socket.IO
* **Auth**: JWT (httpOnly cookies), bcrypt
* **Storage**: Cloudinary (images)
* **Deploy**: Render (GitHub auto-deploy)

---

## 🚀 Quick Start (Local Development)

### 1. Backend

```bash
cd backend
npm install
```

Create `.env`:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
CLIENT_ORIGIN=http://localhost:5173
```

Run:

```bash
npm run dev
```

### 2. Frontend

```bash
cd ../frontend
npm install
```

Create `.env`:

```
VITE_API_URL=http://localhost:5000
```

Run:

```bash
npm run dev
```

Visit → `http://localhost:5173`

---

## 🔐 Authentication

* **Signup** → creates account, redirects to login.
* **Login** → sets secure cookie.
* **Logout** → clears cookie.
* **Protected routes** → only work with valid JWT cookie.

---

## 👥 Contacts

* `GET /api/users/contacts` → your contacts list.
* `POST /api/users/contacts/:id` → add someone to your list.
* Sidebar shows **your contacts only**, not all users.

---

## 📡 Messaging

* `GET /api/messages/:id` → fetch conversation.
* `POST /api/messages/send/:id` → send text/image.
* Sockets push `newMessage` events live.

---

## ☁️ Deployment on Render

* **Backend**: Web Service (set env vars).
* **Frontend**: Static Site (`npm run build`, publish `dist/`).
* Set `VITE_API_URL` in frontend to backend’s URL.
* Enable CORS + credentials in backend.

---

## 🛣️ Roadmap

* Group chats
* Typing indicators + read receipts
* Push notifications
* Search & pagination
