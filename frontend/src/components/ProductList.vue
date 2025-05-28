<template>
  <div class="product-list">
    <h2>Product List</h2>

    <div v-if="loading">Loading products...</div>
    <div v-else-if="products.length === 0">No products available.</div>
    <div v-else>
      <ProductItem v-for="product in products" :key="product._id" :product="product" @product-deleted="removeProduct" />
    </div>
  </div>
</template>

<script>
import axios from "../axios";
import ProductItem from "./ProductItem.vue";
import { ref, onMounted } from "vue";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  setup() {
    const products = ref([]);
    const loading = ref(true);

    const fetchProducts = async () => {
      loading.value = true;
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        products.value = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        products.value = [];
      } finally {
        loading.value = false;
      }
    };

    const removeProduct = async () => {
      await fetchProducts();
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
      fetchProducts,
      removeProduct,
    };
  },
};
</script>

<style scoped>
.product-list {
  max-width: 700px;
  margin: auto;
  padding: 1rem;
}
</style>
