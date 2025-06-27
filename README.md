# Historical Artifacts Tracker

A full-stack web application that allows users to **browse, add, like, and manage historical artifacts** such as the Rosetta Stone or Antikythera Mechanism. Built with React, Node.js, MongoDB, and Firebase, the platform offers a secure, responsive, and interactive user experience.

---

## 🌐 Live Site & Repositories

- 🔗 Live Website: [https://historical-artifacts-tra-b9b41.web.app/](https://historical-artifacts-tra-b9b41.web.app/)
- 🧠 Client Repo: [GitHub-Client](https://github.com/tariqul25/Historical-Artifacts-Client)
- 🧪 Server Repo: [GitHub-Server](https://github.com/tariqul25/Historical-Artifacts-Server)

---

## 🚀 Key Features

- 🔐 Firebase Authentication (Email/Password & Google)
- 🛡️ JWT-secured Private Routes
- 🧾 Add, Update, Delete, and Like Artifacts
- 🔍 Search by Artifact Name
- 💙 Toggle Like & Dislike
- 📜 View My Artifacts & Liked Artifacts
- 🖼️ Image-based Card Display with Detail Page
- 🧑 Conditional Navbar with Profile Dropdown
- 🎯 Dynamic Route Titles
- 🌀 Loading Spinners & Toast Alerts
- 📱 Responsive Design

---

## 🛠️ Technologies Used

### Frontend:
- React.js
- React Router DOM
- Tailwind CSS + Flowbite
- React Hook Form
- Axios
- Firebase
- SweetAlert2 

### Backend:
- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- CORS, Dotenv, Body-Parser

---

## 📦 Dependencies

### Client Side
```json
{
  "dependencies": {
    "@chakra-ui/react": "^2.8.0",
    "@tailwindcss/vite": "^0.0.1",
    "axios": "^1.4.0",
    "firebase": "^10.1.0",
    "firebase-admin": "^11.8.0",
    "lottie-react": "^2.4.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.9.0",
    "react-router": "^6.14.1",
    "sweetalert2": "^11.7.12",
    "swiper": "^10.0.4",
    "tailwindcss": "^3.3.3"
  }
}


{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "mongodb": "^5.7.0",
    "jsonwebtoken": "^9.0.1",
    "firebase-admin": "^11.8.0",
    "nodemon": "^3.0.1"
  }
}
