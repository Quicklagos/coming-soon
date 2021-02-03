<template>
  <footer>
      <p> {{ copyright }} </p>
      <ul>
          <li class="main">SOCIAL MEDIA - </li>
          <li><a href=""><i class="fab fa-instagram"></i></a></li>
          <li><a href=""><i class="fab fa-youtube"></i></a></li>
      </ul>
  </footer>
</template>

<script>
export default {
    data(){
        return{
        copyright: 'COPYRIGHT ©' + new Date().getFullYear() + ' QUICKLAGOS TEAM',

        }
    }
}
</script>

<style scoped>
footer{
    font-size: 12px;
    font-weight: 600;
    display: flex;
    padding: 2em 1.5em 0 1.5em;
    justify-content: space-between;
    -webkit-box-pack: justify;
}

ul{
    display: flex;
    margin-right: 3em;
}

li{
    list-style: none;
    margin-right: 1em;
}

.main{
    margin-top: 2px;
    font-size: 12px;
    font-weight: 700;
}

a{
    color: #323232;
    font-size: 16px;
}
</style>