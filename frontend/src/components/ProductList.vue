<template>
  <div class="bg-gradient-to-br from-indigo-100 to-blue-100 min-h-screen py-12 px-6">
    <div class="max-w-4xl mx-auto space-y-8">
      <h2 class="text-4xl font-bold text-center text-gray-800">📦 Product List</h2>

      <div v-if="loading" class="text-center text-gray-500 animate-pulse">Loading products...</div>
      <div v-else-if="products.length === 0" class="text-center text-gray-500">No products available.</div>

      <div v-else class="grid md:grid-cols-2 gap-6 mt-6">
        <div
          v-for="product in products"
          :key="product._id"
          class="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-gray-200 shadow-lg relative flex flex-col justify-between animate-fadeIn"
        >
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ product.name }}</h3>
            <p class="text-sm text-gray-600 mb-2">{{ product.description }}</p>
            <p class="text-sm font-medium text-gray-700">${{ product.price.toFixed(2) }}</p>
          </div>
          <div class="mt-4 flex gap-3">
            <button
              @click="editProduct(product._id)"
              class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition"
            >
              ✏️ Edit
            </button>
            <button
              @click="deleteProduct(product._id)"
              class="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "../axios";
import { useRouter } from "vue-router";

export default {
  name: "ProductList",
  setup() {
    const products = ref([]);
    const loading = ref(true);
    const router = useRouter();

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

    const deleteProduct = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        products.value = products.value.filter((p) => p._id !== id);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

    const editProduct = (id) => {
      router.push(`/products/edit/${id}`);
    };

    onMounted(fetchProducts);

    return {
      products,
      loading,
      deleteProduct,
      editProduct,
    };
  },
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
</style>
