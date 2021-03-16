<template>
  <div id="app">
    <Navbar />
    <Login />
    <Register />
  </div>
</template>

<script>
import Login from './views/login.vue'
import Register from './views/register.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'sgApp',
  components: {
    Login,
    Register,
    Navbar
  }
}
</script>

<style>
html {
  background-color: #dbdbdb;
  background-image: url("https://silverandgold.s3-ap-southeast-1.amazonaws.com/wallpaper/wallpaper.jpg");
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Buenard", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #cecece;
}
</style>
