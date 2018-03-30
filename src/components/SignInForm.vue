<template>
  <div>
    <!--<form @submit.prevent="signIn">-->
      <!--<div class="row">-->
        <!--<label>用户名</label>-->
        <!--<input type="text" required v-model="formData.username">-->
      <!--</div>-->
      <!--<div class="row">-->
        <!--<label>密码</label>-->
        <!--<input type="password" required v-model="formData.password">-->
      <!--</div>-->
      <!--<div class="actions">-->
        <!--<input type="submit" value="提交">-->
        <!--<span>{{errorMessage}}</span>-->
      <!--</div>-->
      <!---->
    <!--</form>-->
    <el-form ref="form" label-position="labelPosition" class="id-signin-form" label-width="50px">
      <el-form-item label="帐号">
        <el-input required v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input required v-model="formData.password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click.prevent="signIn" class="id-signin-button">登录</el-button>
  </div>
</template>

<script>
  import AV from '../lib/leancloud'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'
  var log = console.log.bind(console)
  export default {
    name: 'SignInForm',
    data() {
      return {
        formData: {
          username: '',
          password: '',
        },
        errorMessage: '',

      }
    },
    methods: {
      signIn() {
        let {username, password} = this.formData
        AV.User.logIn(username, password).then(() => {
          this.$emit('success', getAVUser())
        }, (error) => {
          this.errorMessage = getErrorMessage(error)
        })
      }
    },
  }
</script>

<style>
  .id-signin-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .id-signin-button {
    display: block;
    margin: 0 auto;
  }
</style>
