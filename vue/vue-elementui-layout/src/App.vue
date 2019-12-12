<template>
  <div id="app">
    <elementui/>
  </div>
</template>

<script>
import elementui from './components/elementui'

export default {
  name: 'App',
  components: {
    elementui
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
  margin-top: 60px;
}
</style>
