<template>
  <div ref="display"></div>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      html: '',
      js: '',
      css: ''
    }
  }
}
</script>

<style>

</style>