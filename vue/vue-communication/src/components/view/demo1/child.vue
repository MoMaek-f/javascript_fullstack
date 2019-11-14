<template>
  <div class="child">
    <h2>子组件</h2>
    <p>the msg from child is :</p>
    <strong>{{sendMSG}}</strong>
    <p class="hr"></p>

    <p> the Changemsg from chile  is :</p>
    <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  props: ['sendMSG'],
  computed:{
    changeMsg () {
      return this.sendMsg.toUpperCase()
    }
  }
}
</script>

<style>
.hr {
  margin: 50px 0;
}
</style>