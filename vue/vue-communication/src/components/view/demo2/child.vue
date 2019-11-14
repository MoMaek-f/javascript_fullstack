<template>
  <div class="child">
    <h2>zihuzjian</h2>
    <p>从父组件接收到的数据是</p>
    <div> 
      string:<span class="red">{{sendMsg}}</span>
    </div>
    <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg:{
      type:String,
      required:true
    },
    sendNum:{
      type: Number,
      required:false
    },
    sendObj:{
      validator (val) {
        if (Object.prototype.toString.call(val) === "[object Array]"||Object.prototype.toString.call(val) === "[object Object]") 
        {
          return true
        }
      }
    },
  }
}
</script>

<style>
.red{
  color:red
}
</style>