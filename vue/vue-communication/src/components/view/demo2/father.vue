<template>
  <div class="container">
    <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <child :send-msg="myMsg" :send-Num="myNum"></child>
  </div>
</template>

<script>
import child from './child'
import childVue from '../demo1/child.vue'
export default {
data () {
  return {
    mtMsg: '我是父组件的信息',
    myNum: 123,
    myObj: [
      {
        id:1,
        name: '张三'
      },
      {
        id:2,
        name: '李四'
      },
    ]
  }
},
components: {
  child
}
}
</script>

<style>

</style>