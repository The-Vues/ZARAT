<template>
  <div class="item-container">
    <img :src="image" alt="image" width="206" height="309" />
    <div class="details-container">
      <p class="detail-text">{{ name.length > 20 ? name.slice(0, 17) + "..." : name }}</p>
      <p class="detail-text" style="position: absolute; transform: translateX(155px)">{{ price }} TND</p>
    </div>
    <AddToCart v-if="showAdd" :id="id"></AddToCart>
    <button class="delete-button" @click="deleteCard">Delete</button>
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
      default: true,
    },
  },
  components: {
    AddToCart,
  },
  methods: {
    deleteCard() {
      // Find the index of the current item in the parent component's items array
      const index = this.$parent.items.findIndex((item) => item.id === this.id);
      if (index !== -1) {
        // Remove the item from the parent component's items array
        this.$parent.items.splice(index, 1);
      }
    },
  },
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

.delete-button {
  margin-top: 10px;
  background-color: gray;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
