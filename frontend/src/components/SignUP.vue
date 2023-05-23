<template>
    <div className="container-singin">

      <div className="Left-login-form">
        <h6 className="login-heading">CREATE AN ACCOUNT</h6>
        <div className="form-input-label">
          <input className="form-input-label" type="email" v-model="email" placeholder="E-MAIL" />
        </div>
        <div className="form-input-label">
          <input className="form-input-label" type="password" placeholder="PASSWORD" v-model="password" />
        </div>
        <div className="form-input-label">
            
      <input type="text" id="fname" v-model="fname" placeholder="First Name" required>
        </div>
        <div className="form-input-label">
            
      <input type="text" id="lname" v-model="lname" placeholder="Last Name" required>
        </div>
        <button className="login-btn">CREATE ACCOUNT</button>
        <br />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  

    
    export default defineComponent({
  data() {
    return {
    email:'',
    password:'',
    fname:'',
    lname:''
      };
  },
  methods: {
    submitForm() {
      // Perform sign-up logic here
      // You can make an API request to your backend server to create a new user
      // using the entered name, email, and password
      // Example:
      // axios.post('/api/signup', { name: this.name, email: this.email, password: this.password })
      //   .then(response => {
      //     // Handle success
      //   })
      //   .catch(error => {
      //     // Handle error
      //   });

      // After successful sign-up, you can redirect the user to another page
      // using Vue Router
      // Example:
      // this.$router.push('/dashboard');
    }
  }
});
</script>

<style>
body{
  background-color: white;
}
.container-login{
  width: 60%;
      display: flex;
      color: gray;
  font-size: 90%;
  margin:14%;
  justify-content: space-between;
  margin: 2%;
  margin-top: 9%;
  }
  .right-p{
  margin-top: 2%;

  }
  .right-login-form{
      width: 50%;
      margin-top: 8%;
  }
  .forgotpassword{
      color: black;
      font-size: 70%;

  }
  .Left-login-form{
      width: 40%;
  }
  .login-heading{
      margin: 4%;
      color: black;
      font-size: small;
      
  }
  .create-btn{
      background-color: rgba(0, 0, 0, 0.985);
      border: solid;
      text-align: center;
      font-size: 90%;
      color: rgb(255, 255, 255);
      text-decoration: none;
      padding:2% 32% 3% 10%;
      transform: translate(76px, -81px);
}
  .create-btn:hover{
      color: rgb(255, 255, 255);
  }
  .login-btn{
      background-color: black;
      width: 80%;
      height: 13%;
      text-align: center;
      font-size: 90%;
      color: white;
      text-decoration: none;
      margin-top: 6%;
  }
  .login-btn:hover{
  color: rgb(255, 255, 255);
  }
  #need{
        margin-left: 150px;
    font-size: small;
    color: black;
    margin-bottom: 100px;
  }
</style>
  
  