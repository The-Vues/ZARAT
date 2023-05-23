<template>
    <div class="container-login">
  
      <div class="left-login-form">
        <h6 class="login-heading">LOG IN TO YOUR ACCOUNT</h6>
  
        <div class="form-input-label">
          <input class="form-input" type="email" name="email" placeholder="E-MAIL" v-model="email" />
        </div>
        <div class="form-input-label">
          <input class="form-input" type="password" placeholder="PASSWORD" v-model="password" />
        </div>
  
        <button class="login-btn" @click="handleSubmit">LOGIN</button>
        <br />
        
        <a class="forgotpassword" href="#">HAVE YOU FORGOTTEN YOUR PASSWORD?</a>
      </div>
  
      <div class="right-login-form">
        <h4 id="need">NEED AN ACCOUNT?</h4>
        <router-link to="/signup" class="create-btn">CREATE ACCOUNT</router-link>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import { router } from './router'; // Import the router object from your Vue Router configuration file
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
  
      const handleSubmit = () => {
        const credentials = {
          email: email.value,
          password: password.value
        };
  
        axios.post("http://localhost:3001/user/login", credentials)
          .then((response) => {
            const user = response.data;
  
            if (user === "Email Doesn't Exist") {
              alert("Email doesn't exist");
            } else if (user === "Password Incorrect") {
              alert("Password Incorrect");
            } else {
              localStorage.setItem("currentUser", JSON.stringify(user));
              const storedUser = localStorage.getItem("currentUser");
              if (storedUser !== null) {
                console.log(JSON.parse(storedUser));
                router.push("/"); // Use the router object to navigate to the desired route
              }
            }
          });
      }
  
      return {
        email,
        password,
        handleSubmit
      };
    },
  });
  </script>
  
  <style>
  body {
    background-color: white;
  }
  
  .container-login {
    width: 60%;
    display: flex;
    color: gray;
    font-size: 90%;
    margin: 14%;
    justify-content: space-between;
    margin: 2%;
    margin-top: 9%;
  }
  
  .right-p {
    margin-top: 2%;
  }
  
  .right-login-form {
    width: 50%;
    margin-top: 8%;
  }
  
  .forgotpassword {
    color: black;
    font-size: 70%;
  }
  
  .left-login-form {
    width: 40%;
  }
  
  .login-heading {
    margin: 4%;
    color: black;
    font-size: small;
  }
  
  .create-btn {
    background-color: rgba(0, 0, 0, 0.985);
    border: solid;
    text-align: center;
    font-size: 90%;
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 2% 32% 3% 10%;
    transform: translate(76px, -81px);
  }
  
  .create-btn:hover {
    color: rgb(255, 255, 255);
  }
  
  .login-btn {
    background-color: black;
    width: 80%;
    height: 13%;
    text-align: center;
    font-size: 90%;
    color: white;
    text-decoration: none;
    margin-top: 6%;
  }
  
  .login-btn:hover {
    color: rgb(255, 255, 255);
  }
  
  #need {
    margin-left: 150px;
    font-size: small;
    color: black;
    margin-bottom: 100px;
  }
  </style>
  