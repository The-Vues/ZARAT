<template>
  <div class="item-container">
    <img :src="image" alt="image" width="206" height="309" />
    <div class="details-container">
      <p class="detail-text">{{ name }}</p>
      <p class="detail-text" style="position: absolute; transform: translateX(165px)">{{ price }} TND</p>
    </div>
    <AddToCart v-if="showAdd" :id="id"></AddToCart>
  </div>
</template>

<script lang="ts">
import AddToCart from "../components/AddToCart.vue";

export default {
  props: {
    id: String,
    name: String,
    price: Number,
    image: String,
    showAdd: {
      type: Boolean,
      default: true
    }
  },
  components: {
    AddToCart
  }
};
</script>

<style scoped>
.item-container {
  margin: 20px;
}

.details-container {
  display: flex;
  flex-direction: row;
}

.detail-text {
  font-family: "zara";
  font-size: 13px;
}
</style>
