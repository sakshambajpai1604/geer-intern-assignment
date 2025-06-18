# 🛍️ geer-intern-assignment

A full-stack e-commerce product listing website inspired by [geer.in](https://geer.in). This assignment demonstrates responsive UI using **Next.js + Tailwind CSS** on the frontend and a simple **Node.js + Express API** backend.

---

## 📁 Folder Structure

```
geer-intern-assignment/
├── frontend/     → Next.js + Tailwind CSS app
└── backend/      → Node.js + Express API server
```

---

## 🚀 How to Run the Project

### 🔧 Prerequisites
- Node.js v16+
- npm (or yarn)

---

### 📦 1. Clone the Repository
```bash
git clone https://github.com/yourusername/geer-intern-assignment.git
cd geer-intern-assignment
```

---

### 🖥️ 2. Run the Backend (Express API)
```bash
cd backend
npm install
npm start
```

> This starts the server at `http://localhost:4000`  
> API Endpoints:
> - `GET /api/products` – List all products  
> - `POST /api/products` – Add a new product  
> - `DELETE /api/products/:id` – Delete a product

---

### 🌐 3. Run the Frontend (Next.js App)
```bash
cd ../frontend
npm install
npm run dev
```

> App will be available at `http://localhost:3000`  
> Main Routes:
> - `/` – Homepage
> - `/products` – Product listing page
> - `/products/[id]` – Single product detail page

---

## 💻 Tech Stack Used

### 🧩 Frontend
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Hooks (useState, useEffect)

### ⚙️ Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- In-memory product storage (`products.json` file)

---

## 📎 Notes & Assumptions

- Backend uses a local `products.json` file as a mock database.
- Product images use URLs; no file uploads implemented.
- API and frontend are both running locally — no CORS issues.
- Designed for demo and learning purposes — not production-ready.
- No database integration; persistence will reset on backend restart.

---

## 📬 Contact

Feel free to reach out if you have questions or need improvements!
