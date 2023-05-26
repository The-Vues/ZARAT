<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="left-form">
        <h2 class="heading-form">PERSONAL DETAILS</h2>
        <div class="input-text-box">
          <input class="input-text" type="text" id="email" name="email" placeholder="E-MAIL" v-model="email" />
        </div>
        <div class="input-text-box">
          <div class="input-inline">
            <input class="input-text" type="password" id="password" name="password" placeholder="PASSWORD" v-model="password" />
            <input class="input-text" type="password" id="repeatPassword" name="repeatPassword" placeholder="REPEAT PASSWORD" v-model="repeatPassword" />
          </div>
        </div>
        <div class="input-text-box">
          <div class="input-inline">
            <input class="input-text" type="text" id="name" name="name" placeholder="NAME" v-model="name" />
            <input class="input-text" type="text" id="surname" name="surname" placeholder="SURNAME" v-model="surname" />
          </div>
        </div>
        <div class="checkbox">
          <div>
            <input class="form-input-checkbox__input" type="checkbox" name="newsletterCheck"  />
          </div>
          <div>
            <h6 class="checkbox__label">I want to receive personalized commercial communications from ZARA by email.</h6>
          </div>
        </div>
        <div class="checkbox">
          <div>
            <input class="form-input-checkbox__input" type="checkbox" name="privacyCheck" v-model="privacyCheck" />
          </div>
          <div>
            <h6 class="checkbox__label">I have read and understand the Privacy and Cookies Policy.</h6>
          </div>
        </div>
        <button class="signupbtn" @click="handleSubmit">CREATE ACCOUNT</button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

import Navbar from './Navbar.vue';

export default defineComponent({
  name: 'Signup',
  components: {
    Navbar,
  },
  /* this code is to create a new user and send it to the backend with some constraints if the pass or firstname or lastname
   or email are empty they can't create a new account, and the password must be at least 8 characters */
   setup() {
    const email = ref('');
    const password = ref('');
    const repeatPassword = ref('');
    const name = ref('');
    const surname = ref('');
 
    const privacyCheck = ref(false);

    const handleSubmit = () => {
      if (
        email.value.length === 0 ||
        password.value.length === 0 ||
        repeatPassword.value.length === 0 ||
        name.value.length === 0 ||
        surname.value.length === 0
      ) {
        return alert('Please fill in all the fields.');
      } else if (password.value.length < 8) {
        return alert('Password is weak. It must be at least 8 characters long.');
      } else if (password.value !== repeatPassword.value) {
        return alert('Passwords do not match. Please re-enter your password correctly.');
      } else if (!privacyCheck.value) {
        return alert('Please agree to the terms and conditions.');
      } else {
        const logUser = {
          email: email.value,
          pass: password.value,
          fName: name.value,
          lName: surname.value,
          isAdmin: false,
          cart: [],
        };

        axios.post('http://localhost:3001/user/signup', logUser)
          .then((response) => {
            if (response.data === 'Email Already Exists') {
              alert('Email Already Exists');
            } else {
              alert('Welcome to ZARA');
            }
          })
          .catch((error) => {
            console.error(error);
            alert('An error occurred while creating the account.');
          });
      }
    };

    return {
      email,
      password,
      repeatPassword,
      name,
      surname,
      privacyCheck,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.container{
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
    margin: 4%;
  }
  input{
    width: 80%;
    padding:5px 12px 0 20px;
    margin: 18px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid gray;
    font-size:70%;
   
    
  }
  .number-box{
    display: flex;
  }
  .input-text-box1{
    display: flex;
    
  }
  .tele{
    width: 25%;
    margin-top: 9%;
  }
  .teleinput{
    margin-left:-10%;
    width:96%;
  }
  .checkbox{
    width: 100%;
    display: flex;
    margin-top: 1%;
   
  }
  .checkbox__label{
    width: 100%;
    margin-left: 3%;
    font-size: 100%;
    color:  gray;
    font-size:70%
  
  }
  .signupbtn{
  width: 85%;
  background-color: black;
  color: white;
  margin-top: 16%;
  
  }
  .Left-form{
    width: 30%;
  }
  .right-form{
    width: 40%;
  }
  .dot{
    color: white
    ;
  }
  .input-text-options{
  font-size: 90%;
  color: gray;
  }
  .changeform-btn{
  display: flex;
  width: 14%;
  justify-content: space-between;
  margin: 4%;
  font-size: 80%;
  font-weight:bold;
  }
  .headingform{
    margin: 4%;
    font-size: 98%;
    color: black;
  }
  .signup-footer{
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin: 8%;
  }
  .list{
  text-decoration: none;
  color:gray;
  font-size: 68%;
  }
  .header-heading{
    font-size: 80%;
  }
</style>
  
  
