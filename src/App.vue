<template>
  <div id="app">
    <monarch-navbar/>

    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
 -->

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'monarch-navbar': Navbar
  }
}

</script>

<style lang="scss">
@import "style/monarch";
</style>
