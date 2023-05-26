<template>
  <div class="item-container">
    <img :src="image" alt="image" width="206" height="309" />
    <div class="details-container">
<<<<<<< HEAD
      <p class="detail-text">{{ name }}</p>
      <p class="detail-text" style="position: absolute; transform: translateX(165px)">{{ price }} TND</p>
=======
      <p class="detail-text">{{ name.length > 20 ? name.slice(0,17) + "..." : name }}</p> <!-- if the name is longer than 20 characters we hide the rest of the name -->
      <p class="detail-text" style="position: absolute; transform: translateX(155px)">{{ price }} TND</p>
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
    </div>
    <AddToCart v-if="showAdd" :id="id"></AddToCart>
  </div>
</template>

<script lang="ts">
import AddToCart from "../components/AddToCart.vue";

export default {
<<<<<<< HEAD
=======
  name: "OneItem",
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
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
<<<<<<< HEAD
  font-family: "zara";
  font-size: 13px;
=======
  font-family: "regular";
  font-size: 16px;
>>>>>>> f48d9807efc4fbb66f0c71974d5177d2c832c155
}
</style>
