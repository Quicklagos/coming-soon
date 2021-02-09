<template>
  <div>
      <section>
          <h3>COMING SOON 👋🏾</h3>
          <h4>ARE YOU READY?</h4>
          <p>Don’t get lost in Lagos; get around Lagos faster and quicker using our map, fastest routes, discover new places and a lot more.</p>
          <form @submit.prevent="">
              <input 
                type="text" 
                placeholder="Email Address" 
                v-model.trim="email"
              >
              <base-button @click="checkInput">NOTIFY ME 
                <i v-if="isLoading" class="fas fa-circle-notch fa-spin"></i>
              </base-button>
              <br>
              <span v-if="!isValid" class="error">Email is not valid!</span>
          </form>
      </section>
      <section>
          <img :src="Illustration" alt="Illustration">
      </section>
  </div>
</template>

<script>
import Illustration from '../assets/illustration.svg'
export default {
    data(){
        return{
            Illustration: Illustration,
            email:'',
            isValid: true,
            isLoading: false
        }
    },
    methods: {
         checkInput(){
            this.isValid = true
            if(this.email === '' || !this.email.includes('@')){
                this.isValid = false
                return
            }
            this.isLoading = true

            fetch('https://quicklagos-b401e-default-rtdb.firebaseio.com/email.json',{
                method: 'POST',
                header: {
                    'Content-Type': 'application-json'
                },
                body: JSON.stringify({
                    id: Math.round(Math.random() * 100000),
                    email: this.email
                })
            }).then(response => {
                if(response.ok){ 
                    setTimeout( () => {
                        this.isLoading = false
                        console.log('Request sent successfully')

                    }, 3000)
                }else{
                    throw new Error('Error sending request')
                }
            })
            this.email = ''
            
        }
    }
}
</script>

<style scoped>
div{
    padding-right: 2em !important;
    padding-left: 2em;
    display: flex;
}

h3{
    padding-top: 1.5em;
    font-size: 2em;
}

h4{
    margin-top: -1.5em;
}

p{
    font-weight: 400;
    margin-top: -.5em;
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

.error{
    color: rgb(204, 51, 51);
}

@media screen and (max-width: 787px){
    section:nth-child(2){
        display: none;
    }


}
@media screen and (max-width: 700px){
    form{
        padding-right: 2em !important;
    }
    input{
        width: 100%;
    }

}
@media screen and (max-width: 360px){
    h3{
       font-size: 1.7em;
    }

}

</style>