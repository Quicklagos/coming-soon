<template>
  <div>
    <the-header></the-header>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
html{
  font-family: 'Open Sans', sans-serif;
  padding: 0;
  margin: 0;
  background: url('./assets/background.svg') fixed;
  background-size: 70%;
  background-position: right;
  background-repeat: no-repeat;
  height: 100vh;
  color: #484848;
}

@media screen and (max-width: 787px){
    html{
        background: url('./assets/bg.svg');
        background-position: right;
        background-size: 100%;
        width: 100%;
        background-repeat: no-repeat;
        height: 100vh;
    }

}

</style>
