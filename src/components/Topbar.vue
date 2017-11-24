<template>
  <div id="topbar">
    <div class="logo">
      Resume Editor
    </div>
    <div class="action">
      <div v-if="logined" class="userActions">
        <span>你好，{{user.username}}</span>
        <el-button @click.prevent="signOut">注销</el-button>
      </div>
      <div v-else class="userActions">
        <el-button>登录</el-button>
        <el-button type="primary" @click.prevent="signUpDialogVisible = true">注册</el-button>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="signIn($event)"/>
        </MyDialog>
      </div>
      <el-button type="primary">保存</el-button>
      <el-button v-on:click="preview">预览</el-button>

    </div>
  </div>
</template>
<style lang="scss">
  #topbar {
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 53px 3px;
    z-index: 1;
  }

  .action {
    display: flex;
    .userActions {
      margin-right: 3em;
    }
  }
</style>
<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import AV from '../lib/leancloud'

  export default {
    components: {
      MyDialog, SignUpForm,
    },
    methods: {
      preview() {
        this.$emit('preview')
      },
      signIn(user) {
        this.signUpDialogVisible = false
        this.$store.commit('setUser', user)
      },
      signOut() {
        AV.User.logOut()
        this.$store.commit('removeUser')
      },
    },
    data() {
      return {
        signUpDialogVisible: false,
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      logined() {
        return this.user.id
      },
    },
  }
</script>
