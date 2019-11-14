<template>
  <div class="container">
    <child v-bind:send-msg="myMSG"> </child>
  </div>
</template>

<script>
export default {
data () {
    return {
      myMSG:'this is father'
    }
},
  components:{

  }
}
</script>

<style>

</style>