<template>
    <div>
      <button id="add-button" @click="handleSubmit">ADD TO CART</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { useRouter } from "vue-router";
  
  export default {
    props: {
      id: String
    },
    setup(props) {
      const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
      const router = useRouter();
  
      const handleSubmit = async () => {
        if (!currentUser) {
          router.push("/login");
        } else {
          console.log(currentUser.id, ` |  itemid:  ${props.id}`);
          await axios.post("http://localhost:3001/user/add", {
            userId: currentUser.id,
            itemId: props.id
          });
          const refreshed = await axios.get(`http://localhost:3001/user/refresh/${currentUser.id}`);
          localStorage.setItem("currentUser", JSON.stringify(refreshed.data));
          router.push("/cart");
        }
      };
  
      return {
        handleSubmit
      };
    }
  };
  </script>
  
  <style scoped>
  #add-button {
    background-color: black;
    color: white;
    font-family: "zara";
  }
  </style>
  