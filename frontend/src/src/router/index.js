// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProductManager from "../components/ProductManager.vue";
import ProductList from "@/components/ProductList.vue";
import EditProduct from "../components/EditProduct.vue";

const routes = [
  { path: "/", component: ProductManager },
  { path: "/products", component: ProductsPage },
  { path: "/products/add", component: AddProduct },
  { path: "/products/edit/:id", component: EditProduct, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
