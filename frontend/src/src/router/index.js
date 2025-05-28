// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProductManager from "../components/ProductManager.vue";
import EditProduct from "../components/EditProduct.vue";

const routes = [
  { path: "/", component: ProductManager },
  { path: "/edit/:id", component: EditProduct, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
