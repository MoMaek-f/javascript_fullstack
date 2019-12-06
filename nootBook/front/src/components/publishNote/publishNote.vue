<template>
  <div class="publish-note">
    zz is sleeping
    <quill-editor >
    </quill-editor>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
export default {
  name: 'publishNote',
  data () {
    return {

    }
  },
  components: {
    quillEditor
  }
}
</script>

<style>

</style>