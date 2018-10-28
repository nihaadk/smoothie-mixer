<template>
  <div class="navbar">
      <nav class="nav-extended amber darken-4">
          <div class="nav-content">
              <router-link :to="{ name: 'Index'}">
                  <img src="../assets/logo.svg" alt="logo" class="logo">
                  <!-- <span class="nav-title">Smoothie Mixer</span> -->
              </router-link>
              <a href="#" class="btn-floating btn-large halfway-fab yellow darken-2">
                  <router-link :to="{ name: 'AddSmoothie' }">
                      <i class="material-icons">add</i>
                  </router-link>
              </a>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar nav {
    padding: 0 20px;
}

.logo {
    max-width: 100%;
    height: auto;
    margin: 0 auto;
}
</style>
