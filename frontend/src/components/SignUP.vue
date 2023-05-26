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
            <input class="form-input-checkbox__input" type="checkbox" name="newsletterCheck" v-model="newsletterCheck" />
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


<script>
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
    const name = ref('');
    const surname = ref('');

    const handleSubmit = () => {
      if (
        email.value.length === 0 ||
        password.value.length === 0 ||
        name.value.length === 0 ||
        surname.value.length === 0
      ) {
        return alert('Please fill in all the fields.');
      } else if (password.value.length < 8) {
        return alert('Password is weak. It must be at least 8 characters long.');
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
      name,
      surname,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  margin: 6% 6%;
}

.left-form {
  width: 100%;
  max-width: 400px;
}

.heading-form {
  font-size: 14px;
  margin-top: 0;
  color: #000;
  font-weight: 550;
  margin-bottom: 20px;
}

.input-text-box {
  margin-bottom: 20px;
}

.input-text {
  width: 100%;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  font-size: 14px;
  background-color: transparent;
  color: #000;
}

.input-text:focus{
outline: none;
}
.input-inline {
  display: flex;
  margin-bottom: 20px;
}

.input-inline .input-text {
  flex: 1;
  margin-right: 10px;
}

.checkbox {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #000;
}

.checkbox__label {
  font-size: 14px;
  color: #000;
  margin-left: 10px;
}

.signupbtn {
  width: 100%;
  background-color: white;
  color: black;
  padding: 14px;
  font-size: 14px;
  margin-top: 20px;
  border: 2px solid black; /* Add border */
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
}

.signupbtn:hover {
  background-color: #222;
}

.signupbtn:active {
  background-color: #111;
}

input[type='password']::-webkit-input-placeholder,
input[type='text']::-webkit-input-placeholder {
  font-size: 14px;
  color: #6a6a6a;
}

input[type='password']:-moz-placeholder,
input[type='text']:-moz-placeholder {
  font-size: 14px;
  color: #6a6a6a;
}

input[type='password']::-moz-placeholder,
input[type='text']::-moz-placeholder {
  font-size: 14px;
  color: #6a6a6a;
}

input[type='password']:-ms-input-placeholder,
input[type='text']:-ms-input-placeholder {
  font-size: 14px;
  color: #6a6a6a;
}
</style>