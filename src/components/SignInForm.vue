<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
      </div>
    </form>
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
      },
      getData() {
        const query = new AV.Query('Todo')
        query.find().then(todoData => {
          let data = todoData[0]

        }, () => this.showMessage('获取数据失败', 'error'))
      }
    },
  }
</script>
