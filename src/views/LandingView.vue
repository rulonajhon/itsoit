<template>
  <div class="landing-container">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        
        <!-- Service Dropdown -->
        <li 
          class="dropdown-container" 
          @mouseenter="showServiceDropdown" 
          @mouseleave="hideServiceDropdown"
        >
          <a href="#">Service</a>
          <transition name="fade">
            <ul v-if="serviceDropdown" class="dropdown-menu">
              <li><a href="#">IP Protection and Application</a></li>
              <li><a href="#">Competition & Publication Form</a></li>
            </ul>
          </transition>
        </li>

        <li><a href="#">Policies</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="nav-icons">
        <button class="icon-button">🔔</button>

        <!-- User Icon with Hover Delay -->
        <div 
          class="user-menu" 
          @mouseenter="openDropdown" 
          @mouseleave="startCloseTimer"
        >
          <div class="user-circle">👤</div>
          <div v-if="dropdownOpen" class="dropdown">
            <a @click="navigateTo('/login')">Login</a>
            <a @click="navigateTo('/signup')">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/banner.png" alt="Crowd" class="hero-image" />
    </section>

    <!-- Content Sections -->
    <section class="content">
      <h2 class="title">Vision</h2>
      <p>To simplify and secure IP management while fostering innovation and collaboration.</p>

      <h2 class="title">Mission</h2>
      <p>To provide an innovative and user-friendly IP management system...</p>

      <h2 class="title">Overview</h2>
      <p>UIC’s Innovation & Technology Support Office (ITSO) protects intellectual property...</p>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const dropdownOpen = ref(false);
    const serviceDropdown = ref(false);
    const router = useRouter();
    let closeTimer = null;

    const navigateTo = (path) => {
      router.push(path);
    };

    const openDropdown = () => {
      clearTimeout(closeTimer);
      dropdownOpen.value = true;
    };

    const startCloseTimer = () => {
      closeTimer = setTimeout(() => {
        dropdownOpen.value = false;
      }, 1500); // 1.5 seconds delay
    };

    const showServiceDropdown = () => {
      serviceDropdown.value = true;
    };

    const hideServiceDropdown = () => {
      serviceDropdown.value = false;
    };

    return { dropdownOpen, serviceDropdown, navigateTo, openDropdown, startCloseTimer, showServiceDropdown, hideServiceDropdown };
  },
};
</script>

<style scoped>
/* General Styles */
.landing-container {
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

/* Service Dropdown */
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

/* Dropdown */
.dropdown {
  position: absolute;
  top: 45px;
  right: 0;
  background: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.dropdown a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.dropdown a:hover {
  background: #ffb6c1;
  color: white;
}

/* Hero Section */
.hero {
  text-align: center;
}

.hero-image {
  width: 100%;
  height: auto;
}

/* Content Sections */
.content {
  text-align: center;
  padding: 40px;
}

.title {
  color: #ff69b4;
  font-size: 24px;
  margin-bottom: 10px;
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
