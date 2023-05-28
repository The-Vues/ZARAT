<template>
    <div class="help">
      <h1>Help</h1>
      <input  type="text"
        class="searchbar" v-model="keyword" placeholder="Type your question" />
      <button @click="fetchAnswer">Get Answer</button>
      <p v-if="answer">{{ answer }}</p>
      <p v-if="answer">{{ question}}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    setup() {
      const keyword = ref('');
      const answer = ref('');
      const question = ref('');
  
      const fetchAnswer = async () => {
        try {
        const response = await axios.get(`http://localhost:3001/help/gethelps?query=${keyword.value}`);
          answer.value = response.data[0]?.answer;
          question.value = response.data[0]?.question;
          console.log(answer, question)
        } catch (error) {
          console.error(error);
        }
      };
  
      return {
        keyword,
        answer,
        question,
        fetchAnswer,
      };
    },
  });
  </script>
  
  
  <style scoped>
  .help {
    background-image: url('https://static.zara.net/photos///contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//w/1839/IMAGE-landscape-web-27470945-8c31-433a-9eaf-392114b6a91d-default_0.jpg?ts=1682518360676%27');
    background-repeat: no-repeat;
    min-height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }
  
  .searchbar {
    margin-top: 1.8em;
    width: 45%;
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(8, 8, 8);
    padding: 0.2em 0em;
  }
  .head {
    margin-right: 980px;
    margin-top: -100px;
  }
  </style>