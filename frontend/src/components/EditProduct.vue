<template>
  <div class="bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen flex items-center justify-center p-4">
    <div class="backdrop-blur-md bg-white/85 border border-gray-200 shadow-2xl rounded-3xl w-full max-w-xl p-8 animate-fadeIn">
      <h2 class="text-3xl font-semibold text-center text-gray-800 mb-6">✏️ Edit Product</h2>

      <form @submit.prevent="handleUpdate" class="space-y-5">
        <div>
          <label for="name" class="block text-sm font-semibold text-gray-700">Product Name</label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition"
          />
        </div>

        <div>
          <label for="price" class="block text-sm font-semibold text-gray-700">Price ($)</label>
          <input
            v-model.number="product.price"
            type="number"
            id="price"
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            v-model="product.description"
            id="description"
            rows="3"
            required
            class="w-full mt-1 px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-sm transition"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 px-5 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17h2m-1-12a9 9 0 11-6.219 15.19L5 21l1.81-1.781A9 9 0 0112 5z"
            />
          </svg>
          Update Product
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
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const product = ref({ name: "", price: 0, description: "" });
    const message = ref("");
    const success = ref(false);

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${route.params.id}`);
        product.value = data;
      } catch (err) {
        message.value = "⚠️ Error loading product.";
        success.value = false;
      }
    };

    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:5000/api/products/${route.params.id}`, product.value);
        message.value = "✅ Product updated successfully!";
        success.value = true;
        setTimeout(() => router.push("/"), 2000);
      } catch (err) {
        message.value = "❌ Failed to update product.";
        success.value = false;
      }
    };

    onMounted(fetchProduct);

    return { product, message, success, handleUpdate };
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
