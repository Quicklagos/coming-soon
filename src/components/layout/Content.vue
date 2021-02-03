<template>
  <div>
      <section>
          <h3>COMING SOON</h3>
          <h4>ARE YOU READY?</h4>
          <p>Don’t get lost in Lagos; get around Lagos faster and quicker using our map, fastest <br> routes, and a lot more.</p>
          <form @submit.prevent="">
              <input type="text" placeholder="Email Address">
              <base-button>NOTIFY ME</base-button>
          </form>
      </section>
      <section>
          <img :src="Illustration" alt="Illustration">
      </section>
  </div>
</template>

<script>
import Illustration from '../../assets/illustration.svg'
export default {
    data(){
        return{
            Illustration: Illustration
        }
    }
}
</script>

<style scoped>
div{
    padding: 2em;
    display: flex;
}

h3{
    padding-top: 1.5em;
    font-size: 2em;
}

h4{
    margin-top: -2em;
}

p{
    font-weight: 400;
    margin-top: -1em;
}

img{
    margin-top: -1em;
    width: 35em;
}

input{
    padding: 11px;
    border: #484848 solid 1px;
    background: #F8F8F8;
    width: 300px;
}

input:focus{
    border: #969494 solid 1px;
    border-radius: 2px;
    outline: none;
}

::placeholder{
    font-weight: 600;
    color: #484848;
}
</style>