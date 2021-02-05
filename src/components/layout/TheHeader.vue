<template>
  <header>
      <div class="logo">
          <img :src="Logo" alt="QuickLagos Logo">
      </div>
      <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <div class="mobile">
          <i @click="openNav" class="fas fa-align-right fa-lg"></i>
      </div>
  </header>
  <mobile-nav :show="open"></mobile-nav>
</template>

<script>
import Logo from '../../assets/logo.svg'

export default {
    data(){
        return{
            Logo: Logo,
        }
    },
    methods: {
        openNav(){
            console.info('open nav')
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
.mobile{
    display: none;
}

@media screen and (max-width: 787px){
    ul{
        display: none;
    }

    .mobile{
        display: block;
        margin-top: .7em;
    }


}
</style>