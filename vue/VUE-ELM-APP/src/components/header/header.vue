<template>
  <div class="header">
    <v-header></v-header>
    <router-view/>
  </div>
</template>


<script>
import header from '@/components/header/header.vue'
export default{
  name:'app',
  components:{
    'v-header':header
  }
}
</script>


<style>
#app{

}
</style>
