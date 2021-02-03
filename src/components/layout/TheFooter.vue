<template>
  <footer>
      <p> {{ copyright }} </p>
  </footer>
</template>

<script>
export default {
    data(){
        return{
        copyright: 'COPYRIGHT ©' + new Date().getFullYear() + ' QUICKLAGOS TEAM'
        }
    }
}
</script>

<style scoped>
footer{
    padding: 0em 2em;
    font-size: 12px;
    font-weight: 600;
}
</style>