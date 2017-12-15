<template>
  <div id="app">
    <foods></foods>
  </div>
</template>

<script>
import foods from './components/foods.vue'
// import exampleSimple from './components/example-simple'
// import exampleComplex from './components/example-complex.vue'

export default {
  name: 'app',
  components: {
    // exampleSimple,
    // exampleComplex,
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
