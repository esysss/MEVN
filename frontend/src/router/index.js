// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProductManager from "../components/ProductManager.vue";
import EditProduct from "../components/EditProduct.vue";
import AddProduct from "../components/AddProduct.vue";

const routes = [
  { path: "/", component: ProductManager },
  { path: "/products/add", component: AddProduct },
  {
    path: "/products/edit/:id",
    name: "EditProduct",
    component: EditProduct,
    props: true,
  },
  { path: "/", redirect: "/products" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
