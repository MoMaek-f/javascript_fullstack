<template>
  <div class="count">
      {{count}}
      <button @click="add(5)">+</button>
      <button @click="reduce">-</button>
      {{getCount}}
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
export default {
  data () {
    return {
      // myCount: null
    }
  },
  // mounted () {
  //   this.myCount = this.$store.state.count
  // },
  computed: mapState({
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getCount'
    ])
  }),
  methods: {
   ...mapMutations([

   ])
  }
}
</script>

<style>

</style>