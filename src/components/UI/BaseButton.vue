<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    // props: {
    //     link: {
    //        type: Boolean,
    //        required: false,
    //        default: false
    //     },
    // },
    
}
</script>

<style scoped>
button {
  text-decoration: none;
  padding: 11px 15px;
  font: inherit;
  background: #FFB60B;
  font-size: 12px;
  color: #484848;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  border: none;
}
button:hover,
button:active {
  opacity: .9;
}

@media screen and (max-width: 540px){
    button{
        width: 105.2%;
    }
}
@media screen and (max-width: 414px){
    button{
        width: 108%;
    }
}
@media screen and (max-width: 375px){
    button{
        width: 109%;
    }
}
@media screen and (max-width: 360px){
    button{
        width: 109.5%;
    }
}
@media screen and (max-width: 320px){
    button{
        width: 111.5%;
    }
}
@media screen and (max-width: 280px){
    button{
        width: 114%;
    }
}

</style>