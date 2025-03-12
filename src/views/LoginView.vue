<template>
  <div class="auth-container">
    <div class="auth-card">
      <img src="@/assets/logo.png" alt="ITSO Logo" class="logo" />
      <h1>ITSO</h1>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="login">Login</button>
      <div class="links">
        <a href="#">Forgot Password</a>
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push("/home");
      } catch (error) {
        console.error(error.message);
      }
    };

    return { email, password, login };
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
button {
  background: #ff69b4;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.links {
  margin-top: 10px;
}
.links a {
  color: #ff69b4;
  text-decoration: none;
}
</style>
