
<template>
  <div id="app">
    <router-view />

    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar'


import "./assets/css/base.css";

export default {
  name: 'App',
  components: {
    MainTabBar,
    
  }
}
</script>

<style>
</style>
