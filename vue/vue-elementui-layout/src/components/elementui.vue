<template>
  <!-- <el-row>
    <el-col :span="12">  12</el-col>
    <el-col :span="6">  6</el-col>
    <el-col :span="6">  6</el-col>
  </el-row> -->
  <MyRow>
    col
  </MyRow>
</template>
<script>
import MyRow from './My-Row.vue';

export default {
  components: {
    MyRow
  }
}
</script>