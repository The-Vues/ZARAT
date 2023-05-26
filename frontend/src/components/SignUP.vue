<template>
  <div>
    <Navbar/>
    <nav className="">
        <div className="flex justify-between items-center p-5">
          <div className="grid gap-1 grid-cols-2">
            <div>
              <Link href="/">
                  <svg viewBox="0 0 100 80" width="25" height="25">
                    <rect width="70" height="5"></rect>
                    <rect y="30" width="70" height="5"></rect>
                    <rect y="60" width="70" height="5"></rect>
                  </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
   <h2 className='headingform'>PERSONAL DETAILS</h2>
   <div className='changeform-btn'>
   </div>
  
<div className='container'>
  <div className='Left-form'> 
  <div className='input-text-box'>
      <input className="input-text" type="text" id="fname" name="email" placeholder='E-MAIL'   />
  </div>
  <div className='input-text-box'>
      <input   type="password" id="fname" name="password" placeholder='PASSWORD'   />
  </div>
  <div className='input-text-box1'>
   </div>
  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" />
    </div>
  <div>
  <h6 className="checkbox__label">I want to receive personalised commercial communications from ZARA by email.</h6>
  </div>
  </div>

  <div className='checkbox'>
    <div>
      <input className="form-input-checkbox__input" type="checkbox" name="newsletterCheck" data-qa-input-qualifier="newsletterCheck" />
    </div>
  <div>
  <h6 className="checkbox__label">I have read and understand the Privacy and Cookies Policy</h6>
  </div>
  </div>
  <input type="submit" className='signupbtn' value="CREATE ACCOUNT" @Click="handleSubmit"/>
  </div> 
 
 <div className='right-form'>
<div className='input-text-box'>
      <h1 className='dot'>.</h1>
  </div>
<div className='input-text-box2'>
      <input type="password" id="fname" name="fname" placeholder='REPEATE PASSWORD'/>
  </div>

  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='NAME'  />
  </div>
  <div className='input-text-box'>
      <input type="text" id="fname" name="fname" placeholder='SURNAME'/>
  </div>
  <div className='input-text-box'>
  </div>
</div> 
</div>
</div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';
  
  import Navbar from './Navbar.vue';
  
  export default defineComponent({
    name: 'SignUP',
    components: {
      Navbar,
    },
    /* this code is to create a new user and send it to the backend with some constrains if the pass or firstname or lastname
   or email are empty they can't create a new account and the pass at least must be 8 char */
    setup() {
      const email = ref('');
      const password = ref('');
      const fName = ref('');
      const lName = ref('');
  
      const handleSubmit = () => {
        const logUser = {
          email: email.value,
          pass: password.value,
          fName: fName.value,
          lName: lName.value,
          isAdmin: false,
          cart: [],
        };

   if((email.value as any).length ===0 || (fName.value as any).length===0 || (password.value as any).length===0 || (lName.value as any).length===0){
      return alert('Please fill all the fields');
    }
    else if((password.value as any ).length < 6 ){
      return alert('Password is weak try to make it strong at least it must be 8 characters')
    }
        else{
          axios.post('http://localhost:3001/user/signup',logUser)
            .then((user) => {
              
              if (user.data === 'Email Already Exists') {
                 return alert('Email Already Exists');
              } else {
               return alert('Welcome to ZARA');
              }
            });
        }
      };
  
      return {
        email,
        password,
        fName,
        lName,
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
</style>
  
  