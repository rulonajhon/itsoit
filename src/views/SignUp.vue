<template>
    <div class="auth-container">
      <div class="auth-card">
        <img src="@/assets/logo.png" alt="ITSO Logo" class="logo" />
        <h1>ITSO</h1>
        <input type="text" placeholder="Full Name" v-model="fullName" />
        <input type="text" placeholder="Username" v-model="username" />
        <input type="email" placeholder="Email Address (UIC Email Only)" v-model="email" />
        <input type="password" placeholder="Password" v-model="password" />
        <div class="buttons">
          <button @click="goBack">Back</button>
          <button @click="signup">Sign Up</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "@/firebase";
  
  export default {
    setup() {
      const fullName = ref("");
      const username = ref("");
      const email = ref("");
      const password = ref("");
      const router = useRouter();
  
      const signup = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          router.push("/landing");
        } catch (error) {
          console.error(error.message);
        }
      };
  
      const goBack = () => {
        router.push("/landing");
      };
  
      return { fullName, username, email, password, signup, goBack };
    },
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url("@/assets/image.png") no-repeat center center/cover;
  }
  .auth-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 30px;
    text-align: center;
    border-radius: 10px;
  }
  .logo {
    width: 80px;
  }
  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
  button {
    background: #ff69b4;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  </style>
  