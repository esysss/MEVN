<template>
  <div class="add-product">
    <h2>Add New Product</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input v-model="product.name" type="text" id="name" required />
      </div>
      <div>
        <label for="price">Price:</label>
        <input v-model.number="product.price" type="number" id="price" required />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="product.description" id="description" required></textarea>
      </div>
      <button type="submit">Add Product</button>
    </form>
    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
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
        const response = await axios.post("/products", this.product);
        this.message = "Product added successfully!";
        this.success = true;
        // Clear the form
        this.product = { name: "", price: 0, description: "" };
      } catch (error) {
        console.error(error);
        this.message = "Failed to add product.";
        this.success = false;
      }
    },
  },
};
</script>

<style scoped>
.add-product {
  max-width: 500px;
  margin: auto;
}
.add-product label {
  display: block;
  margin-top: 10px;
}
.add-product input,
.add-product textarea {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}
button {
  margin-top: 15px;
  padding: 8px 16px;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
