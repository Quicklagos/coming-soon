<template>
  <header>
      <div class="logo">
          <img :src="Logo" alt="QuickLagos Logo">
      </div>
      <ul>
          <li>
              <router-link to="/about">About</router-link>
          </li>
          <li>
              <router-link to="/contact">Contact</router-link>
          </li>
      </ul>
      <div class="mobile">
          <i class="fas fa-align-right fa-lg" @click="openNav"></i>
      </div>
  </header>
      <div>
        <aside @click="closeNav" v-if="nav" class="backdrop"></aside>
        <mobile-nav v-if="nav"></mobile-nav>
      </div>
</template>

<script>
import Logo from '../../assets/logo.svg'
import MobileNav from './MobileNav.vue'

export default {
    components: {
        MobileNav
    },
    data(){
        return{
            Logo: Logo,
            nav: false
        }
    },
    methods: {
        openNav(){
            this.nav = true
        },
        closeNav(){
            this.nav = false
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

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(219, 219, 219, 0.75);
  z-index: 1;
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