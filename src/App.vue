<template>
  <div id="app">
    <router-view name="nav"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  color: #333;
  text-decoration: none;
  font-size: 1.2rem;
}
</style>
