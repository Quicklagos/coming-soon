<template>
<div class="mobile-nav">
    <ul>
        <h2 class="main">QuickLagos</h2>
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    data(){
        return{
            // 
        }
    },
}
</script>

<style scoped>
.mobile-nav{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 350px;
    background: #fff;
    -webkit-box-shadow: 0 2px 20px lightgrey;
    box-shadow: 0 2px 20px lightgrey;
    z-index: 5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* -webkit-box-align: center; */
    /* -ms-flex-align: center; */
    /* align-items: center; */
    padding: 1rem;
    color: #484848;
    text-align: center;
    line-height: 2;
}
@media screen and (max-width: 500px){
    div{
        width: 250px !important;
    }
}

.main{
    margin-bottom: 2em;
}

ul{
    top: 20em;
}
li{
    list-style-type: none;
    text-align: left;
    margin-top: 1em;
}
a{
    text-decoration: none;
    color: #707070;
    font-size: 20px;
    font-weight: 700;
}

</style>