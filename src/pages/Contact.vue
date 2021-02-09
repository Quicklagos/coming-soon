<template>
  <section>
    <div>
      <h1>Contact QuickLagos</h1>
    </div>
    <div class="m-t">
    <p>
      We're seeking partners to help us reach more people. If your organization is interested, please reach  out to us. 
    </p>
    <p>Email at <a href="mailto:quicklagos@gmail.com">quicklagos@gmail.com</a></p>
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

a{
    text-decoration: none;
    color: #FFB60B;
    font-weight: 6000;
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