<template>
    <div class="disclaimer-container">
      <!-- Navigation Bar -->
      <nav class="navbar">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
  
          <!-- Services Dropdown -->
          <li 
            class="dropdown-container" 
            @mouseenter="showServicesDropdown" 
            @mouseleave="hideServicesDropdown"
          >
            <a href="#">Services</a>
            <transition name="fade">
              <ul v-if="servicesDropdown" class="dropdown-menu">
                <li><a href="#" @click.prevent="$router.push('/disclaimer')">IP Protection and Application</a></li>
                <li><a href="#">Competition & Publication Form</a></li>
              </ul>
            </transition>
          </li>
  
          <li><a href="#">Policies</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
  
        <div class="nav-icons">
          <button class="icon-button">🔔</button>
  
          <!-- User Icon with Logout on Hover -->
          <div class="user-menu" @mouseenter="showLogout" @mouseleave="hideLogout">
            <div class="user-circle">👤</div>
            <transition name="fade">
              <button v-if="logoutVisible" class="logout-button" @click="logout">Logout</button>
            </transition>
          </div>
        </div>
      </nav>
  
      <!-- Back Button -->
      <button class="back-button" @click="$router.go(-1)">← Back</button>
  
      <!-- Disclaimer Content -->
      <section class="content">
        <h2 class="title">ITSO Privacy Statement</h2>
        <p>At ITSO, we respect your privacy and the value of your intellectual property...</p>
  
        <h2 class="title">Disclaimer</h2>
        <p>By submitting personal information or intellectual property to ITSO, you acknowledge...</p>
  
        <button class="agree-button">Agree</button>
      </section>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const logoutVisible = ref(false);
      const servicesDropdown = ref(false);
      let timer = null;
      const router = useRouter();
  
      // Show and hide logout
      const showLogout = () => {
        clearTimeout(timer);
        logoutVisible.value = true;
      };
  
      const hideLogout = () => {
        timer = setTimeout(() => {
          logoutVisible.value = false;
        }, 1500);
      };
  
      // Show and hide services dropdown
      const showServicesDropdown = () => {
        servicesDropdown.value = true;
      };
  
      const hideServicesDropdown = () => {
        servicesDropdown.value = false;
      };
  
      const logout = () => {
        console.log("User logged out");
        router.push("/landing"); // Redirect to landing page
      };
  
      return { logoutVisible, servicesDropdown, showLogout, hideLogout, showServicesDropdown, hideServicesDropdown, logout };
    },
  };
  </script>
  
  <style scoped>
  /* General Styles */
  .disclaimer-container {
    font-family: Arial, sans-serif;
  }
  
  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background: #ffb6c1;
  }
  
  .logo {
    height: 40px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li {
    position: relative;
  }
  
  .nav-links li a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
  
  /* Services Dropdown */
  .dropdown-container {
    position: relative;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 30px;
    left: 0;
    background: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    list-style: none;
    padding: 10px 0;
    width: 250px;
  }
  
  .dropdown-menu li {
    padding: 10px 20px;
  }
  
  .dropdown-menu li a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  
  .dropdown-menu li:hover {
    background: #ffb6c1;
    color: white;
  }
  
  /* Icons */
  .nav-icons {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .icon-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  
  /* User Menu */
  .user-menu {
    position: relative;
  }
  
  .user-circle {
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  /* Hover Effect */
  .user-circle:hover {
    background: #ff69b4;
    color: white;
  }
  
  /* Logout Button */
  .logout-button {
    position: absolute;
    top: 40px;
    right: 0;
    background: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }
  
  .logout-button:hover {
    background: #ffb6c1;
    color: white;
  }
  
  /* Back Button */
  .back-button {
    position: absolute;
    top: 100px;
    left: 20px;
    background: none;
    border: none;
    font-size: 18px;
    font-weight: bold;
    color: #ff69b4;
    cursor: pointer;
  }
  
  .back-button:hover {
    text-decoration: underline;
  }
  
  /* Content */
  .content {
    text-align: center;
    padding: 40px;
  }
  
  .title {
    color: #ff69b4;
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .agree-button {
    background: #ff69b4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .agree-button:hover {
    background: #ff1493;
  }
  
  /* Transition Effects */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  