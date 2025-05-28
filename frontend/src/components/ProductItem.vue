<template>
  <div class="bg-white border border-gray-200 rounded-xl shadow-md p-4 flex flex-col justify-between">
    <div class="mb-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ product.description }}</p>
      <p class="mt-2 text-blue-600 font-medium">${{ product.price.toFixed(2) }}</p>
    </div>

    <div class="flex justify-end space-x-2">
      <button @click="editProduct" class="px-4 py-1 text-sm bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition">Edit</button>
      <button @click="deleteProduct" class="px-4 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md transition">Delete</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "../axios";

export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();

    const editProduct = () => {
      router.push(`/products/edit/${props.product._id}`);
    };

    const deleteProduct = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/products/${props.product._id}`);
        emit("product-deleted", props.product._id);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

    return {
      editProduct,
      deleteProduct,
    };
  },
};
</script>
