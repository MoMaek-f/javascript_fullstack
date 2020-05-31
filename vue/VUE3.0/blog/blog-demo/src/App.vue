<template>
  <div id="app">
    <h1>this is my blog</h1>
    <BlogPost :post="blogPost"></BlogPost>
    <router-view/>
  </div>
</template>
<script lang="ts">
import BlogPost from './components/BlogPost.vue';
import { Component,Vue } from "vue-property-decorator";

@Component({
  components: {
    BlogPost
  }
})
export default class App extends Vue {
  private blogPost =[
    {
      title: 'my blog',
      body:'welcome',
      author: 'fl',
      data: new Date(2020,0,7)
    }
  ]
  
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
