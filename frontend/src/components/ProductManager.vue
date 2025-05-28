<template>
  <div class="product-manager">
    <div class="actions">
      <router-link to="/products/add">
        <button>Add New Product</button>
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
  max-width: 800px;
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
