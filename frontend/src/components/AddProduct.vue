<template>
  <div class="bg-gradient-to-r from-indigo-100 to-blue-100 min-h-screen flex items-center justify-center p-4">
    <div class="backdrop-blur-md bg-white/80 border border-gray-200 shadow-2xl rounded-3xl w-full max-w-xl p-8 animate-fadeIn">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">🚀 Add a Product</h2>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700">Product Name</label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            placeholder="Awesome Gadget"
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition"
          />
        </div>

        <div>
          <label for="price" class="block text-sm font-semibold text-gray-700">Price ($)</label>
          <input
            v-model.number="product.price"
            type="number"
            id="price"
            placeholder="49.99"
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            v-model="product.description"
            id="description"
            rows="3"
            placeholder="Write a short product description..."
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm transition"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-5 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Product
        </button>
      </form>

      <p v-if="message" :class="['mt-6 text-center font-semibold', success ? 'text-green-600' : 'text-red-600']">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "../axios";

export default {
  name: "AddProduct",
  data() {
    return {
      product: {
        name: "",
        price: 0,
        description: "",
      },
      message: "",
      success: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        await axios.post("http://localhost:5000/api/products", this.product);
        this.message = "✅ Product added successfully!";
        this.success = true;
        this.product = { name: "", price: 0, description: "" };
        setTimeout(() => (this.message = ""), 3000);
      } catch (error) {
        this.message = "❌ Failed to add product.";
        this.success = false;
      }
    },
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
  animation: fadeIn 0.6s ease-out;
}
</style>
