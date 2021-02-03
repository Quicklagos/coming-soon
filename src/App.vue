<template>
  <div>
    <the-header></the-header>
    <the-content></the-content>
  </div>
</template>

<script>
import TheContent from './components/layout/Content.vue'

export default {
  name: 'App',
  components: {
    TheContent
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
html{
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  background: url('./assets/background.svg');
  background-size: 70%;
  background-position: right;
  background-repeat: no-repeat;
  height: 100vh;

}

</style>
