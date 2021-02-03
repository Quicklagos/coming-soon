<template>
  <header>
      <div class="logo">
          <img :src="Logo" alt="QuickLagos Logo">
      </div>
      <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </header>
</template>

<script>
import Logo from '../../assets/logo.svg'
export default {
    data(){
        return{
            Logo: Logo
        }
    }
}
</script>

<style scoped>
header{
    background: transparent;
    display: flex;
    padding: 2em 1.5em;
    justify-content: space-between;
    -webkit-box-pack: justify;
}

ul{
    display: flex;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
    padding-right: 2em;
    color: #484848;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
}
</style>