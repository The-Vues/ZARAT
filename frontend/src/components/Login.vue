<template>

<div>
  <Navbar/>
<div className='container-login'>


<div className='Left-login-form'>
<h6 className='login-heading'>LOG IN TO YOUR ACCOUNT</h6> 
<div className='form-input-label'>
    <input  className='form-input-label' type="text" id="fname" name="email" placeholder='E-MAIL' />
</div>
<div className='form-input-label'>
    <input  className='form-input-label' type="password" id="fname" name="password" placeholder='PASSWORD'/>
</div>

<button  className="login-btn" @Click="handleSubmit">LOGIN</button> 

<br>

<a className="forgotpassword" href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

</div>


<div className='right-login-form'>
<h6 id="acc" >NEED ACCOUNT ?</h6>
<br>
        <router-link to="/signup" class="create-btn">CREATE ACCOUNT</router-link>
      </div>
    </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  import Navbar from './Navbar.vue'

  export default defineComponent(
    {
    components:{Navbar},
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
  
  <style scoped>
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
    }
    .create-btn{
        background-color: white;
        border: solid;
        text-align: center;
        font-size: 90%;
        color: black;
        text-decoration: none;
        padding:2% 32% 3% 10%;



    }
    .create-btn:hover{
        color: rgba(0, 0, 0, 0.212);
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
    color: rgba(255, 255, 255, 0.212);
    }
    .container{
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        margin: 4%;
      }
      input[type=text]{
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
        /* border: 1px solid red; */
        width: 30%;
      }
      .right-form{
        /* border: 1px solid green; */
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
        /* border: 1px solid black; */
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

      #fname{
        outline:"none";
        border:"none"
      }

      #acc{
        color: black;
      }

  </style>
  