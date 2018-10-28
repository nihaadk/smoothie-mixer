<template>
  <div id="app" class="app-bg">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .app-bg {
    height: 100vw;
    background-image: url('../src/assets/bg-smoothie.png');
  }

  input[type=text]:focus + label {
    color: #ff8f00 !important;
  }

  input[type=text]:focus {
    border-bottom: 1px solid #ff8f00 !important;
    box-shadow: 0 1px 0 0 #ff8f00 !important;
  }
</style>
