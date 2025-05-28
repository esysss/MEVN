# 🛍️ Product Management App

A simple full-stack CRUD (Create, Read, Update, Delete) application for managing products using **Vue.js**, **Express.js**, and **MongoDB**.

## 📁 Project Structure

```
product-manager-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── Products.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddProduct.vue
│   │   │   ├── EditProduct.vue
│   │   │   ├── ProductItem.vue
│   │   │   ├── ProductList.vue
│   │   │   └── ProductManager.vue
│   │   ├── App.vue
│   │   └── main.js
│   └── package.json
└── README.md
```

## 🚀 Features

- Add a new product with name, price, and description
- View a list of all products
- Edit existing product details
- Delete products
- Responsive and user-friendly UI

## 🛠️ Tech Stack

**Frontend**:
- [Vue.js 3](https://vuejs.org/)
- Composition & Options API
- Axios for HTTP requests

**Backend**:
- [Express.js](https://expressjs.com/)
- MongoDB via [Mongoose](https://mongoosejs.com/)

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/product-manager-app.git
cd product-manager-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Make sure your frontend app is running on port **5173** and connects to the backend via `http://localhost:5000/api`.

## 📬 API Endpoints

- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a product by ID
- `POST /api/products` - Add a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/5e431a2b-eb0a-4843-9f6d-a4cc668550d4)
![image](https://github.com/user-attachments/assets/2e125771-fa9f-468e-8ee1-bd69a4a7551c)



## 🙌 Credits

Built as part of the **Advanced Topics for Web Development** course. Created with ❤️ by **Ehsan (Ethan) Baratnezhad**.

## 📃 License

This project is licensed under the MIT License.
