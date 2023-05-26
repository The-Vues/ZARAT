<template>
  <div class="item-container">
    <img :src="image" alt="image" width="206" height="309" />
    <div class="details-container">
      <p class="detail-text">{{ name.length > 20 ? name.slice(0,17) + "..." : name }}</p> <!-- if the name is longer than 20 characters we hide the rest of the name -->
      <p class="detail-text" style="position: absolute; transform: translateX(155px)">{{ price }} TND</p>
    </div>
    <AddToCart v-if="showAdd" :id="id"></AddToCart>
  </div>
</template>

<script lang="ts">
import AddToCart from "../components/AddToCart.vue";

export default {
  name: "OneItem",
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
  font-family: "regular";
  font-size: 16px;
}
</style>
