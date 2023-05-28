<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import OneItem from './OneItem.vue'
import Navbar from './Navbar.vue'

export default defineComponent({
  name: "Clothes",
  components: { OneItem, Navbar },
  setup() {
    const router = useRouter()
    const gender = router.currentRoute.value.params.gender;
    const type = router.currentRoute.value.params.type;
    const items = reactive([])

    onMounted(() => {
      axios.get(`http://localhost:3001/items/clothes/${gender}/${type}`)
        .then(result => {
          items.splice(0, items.length, ...result.data)
          console.log(result.data, gender, type)
          console.log(items)
        });
    });

    return {
      router,
      items
    }
  },
})

</script>

<template>
  <Navbar/>
  <div id="items-container">
    <OneItem v-for="(e, i) in items" :key="i" :id="e._id" :name="e.name" :price="e.price" :image="e.image" />
  </div>
</template>

<style scoped>
  #items-container{
    display: flex;
    flex-direction: row;
  }
</style>
