// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Backend API
});

export default api;
