<template>
  <div id="app">
    <example-simple/>
    <foods></foods>
  </div>
</template>

<script>
import foods from './components/foods.vue'
import exampleSimple from './components/example-simple'

export default {
  name: 'app',
  components: {
    exampleSimple,
    foods
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
  width: 100%;
  height: 100%;
}
</style>
