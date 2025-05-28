<template>
  <div class="product-manager w-full min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
    <div class="actions">
      <router-link to="/products/add">
        <button
          class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold text-lg rounded-full shadow-md hover:from-teal-600 hover:to-emerald-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Add New Product
        </button>
      </router-link>
    </div>

    <ProductList />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";

export default {
  name: "ProductManager",
  components: {
    ProductList,
  },
};
</script>

<style scoped>
.product-manager {
  padding: 2rem;
  /* max-width: 800px; */
  margin: auto;
}

.actions {
  margin-bottom: 1rem;
  text-align: right;
}

button {
  padding: 0.5rem 1rem;
  font-weight: bold;
}
</style>
