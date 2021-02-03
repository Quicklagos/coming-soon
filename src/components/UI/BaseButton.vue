<template>
    <button :class="mode">
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

</style>