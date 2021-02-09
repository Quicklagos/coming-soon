<template>
  <section>
    <div>
      <h1>About QuickLagos</h1>
    </div>
    <div class="m-t">
    <p>
      QuickLagos is a startup that aims to improve your movement in Lagos and discover the best spot to hang out or visit. 
    </p>
    <p>QuickLagos will also offer public transit directions as well as traffic updates around Lagos.</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
  padding-right: 2em;
  padding-left: 2em;
  box-sizing: border-box;
}

div h1{
  font-size: 2em;
  position: relative;
}

div h1::after {
  content: "";
  position: absolute;
  display: block;
  width: 20%;
  height: 12px;
  bottom: 3px;
  left: calc(50% - 150px);
  background-color: #FFB60B;
  transition: width 0.25s;
  z-index: -1;
  text-align: center;
}

div{
  text-align: center;
}

.m-t{
  margin-top: 2em;
}

@media screen and (max-width: 540px){
    div h1::after{
        width: 40%;
    }
}
@media screen and (min-width: 787px){
    .m-t{
      margin-bottom: 12em;
    }
}

@media screen and (max-width: 360px){
    h1{
        font-size: 1.7em !important;
    }

    h1::after{
      left: calc(50% - 125px) !important;
    }
}

</style>