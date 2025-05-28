// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProductManager from "../components/ProductManager.vue";
import ProductList from "@/components/ProductList.vue";
import EditProduct from "../components/EditProduct.vue";

const routes = [{ path: "/", component: ProductList }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
