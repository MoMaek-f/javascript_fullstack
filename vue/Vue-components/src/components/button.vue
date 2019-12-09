<template>
  <button :class="'i-button-size'+ size">
    <slot>
            
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      size: 'large'
    }
  }
}
</script>

<style>
button{
  border: 1px solid orange;
  background-color: yellow;
  color: black;
  border-radius: 5px;
}
.i-button-sizelarge{
  padding: 8px 10px;
}
.i-button-sizedefult{
  padding: 6px 8px;
}
.i-button-sizesmall{
  padding: 4px 6px;
}

</style>