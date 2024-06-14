<template>
  <nav>
    <router-link to="/" class="nav-link" :class="{ active: $route.path === '/'}">Home</router-link> <!-- |
    <router-link to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">About</router-link> -->
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  .nav-link {
    font-weight: bold;
    color: #2c3e50;

    &.nav-link.active {
      color: #42b983;
    }
  }
}
</style>
