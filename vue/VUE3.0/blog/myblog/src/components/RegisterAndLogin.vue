<template>
  <el-dialog title="登录">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleAuthor">Github 授权登录</el-button>
      <el-button type="primary" @click="handleOk">登 录</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'
export default class RegisterAndLogin extends Vue{
  private params: any ={
    email: '',
    password : ''
  }
};
</script>

<style>
</style>
