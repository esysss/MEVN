<template>
  <div class="product-item">
    <h3>{{ product.name }}</h3>
    <p>Price: ${{ product.price }}</p>
    <p>{{ product.description }}</p>
    <button @click="deleteProduct">Delete</button>
    <button @click="$router.push(`/products/edit/${product._id}`)">Edit</button>
  </div>
</template>

<script>
import axios from "../axios"; // or "axios" if you didn’t set up an alias

export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteProduct() {
      if (!this.product || !this.product._id) {
        console.error("Product is undefined or missing _id");
        return;
      }

      try {
        await axios.delete(`http://localhost:5000/api/products/${this.product._id}`);
        this.$emit("product-deleted", this.product._id); // Notify parent to update list
      } catch (error) {
        console.error("Failed to delete product:", error);
      }
    },
  },
};
</script>

<style scoped>
.product-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
</style>
