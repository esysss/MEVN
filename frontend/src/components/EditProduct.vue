<template>
  <div class="edit-product">
    <h2>Edit Product</h2>

    <form v-if="product" @submit.prevent="handleUpdate">
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

      <button type="submit">Update Product</button>
    </form>

    <p v-if="message" :class="{ success: success, error: !success }">{{ message }}</p>
  </div>
</template>

<script>
import axios from "../axios";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const product = ref(null);
    const message = ref("");
    const success = ref(false);

    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${route.params.id}`);
        product.value = data;
      } catch (err) {
        console.error(err);
        message.value = "Error loading product";
        success.value = false;
      }
    };

    const handleUpdate = async () => {
      try {
        const response = await axios.put(`http://localhost:5000/api/products/${route.params.id}`, {
          name: product.value.name,
          price: product.value.price,
          description: product.value.description,
        });
        message.value = "Product updated successfully!";
        success.value = true;
      } catch (err) {
        console.error(err);
        message.value = "Failed to update product.";
        success.value = false;
      }
    };

    onMounted(fetchProduct);

    return {
      product,
      message,
      success,
      handleUpdate,
    };
  },
};
</script>

<style scoped>
.edit-product {
  max-width: 500px;
  margin: auto;
}
.edit-product label {
  display: block;
  margin-top: 10px;
}
.edit-product input,
.edit-product textarea {
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
