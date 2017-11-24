<template>
  <div id="topbar">
    <div class="logo">
      Resume Editor
    </div>
    <div class="action">
      <div v-if="logined" class="userActions">
        <span class="welcome">你好，{{user.username}}</span>
        <el-button @click.prevent="signOut">注销</el-button>
      </div>
      <div v-else class="userActions">
        <el-button @click.prevent="signInDialogVisible = true">登录</el-button>

        <el-button type="primary" @click.prevent="signUpDialogVisible = true">注册</el-button>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
          <SignUpForm @success="signIn($event)"/>
        </MyDialog>
      </div>
      <el-button type="primary">保存</el-button>
      <el-button v-on:click="preview">预览</el-button>

    </div>
    <MyDialog title="登录" :visible="signInDialogVisible"
              @close="signInDialogVisible = false">
      <SignInForm  @success="signIn($event)"/>
    </MyDialog>
    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <SignUpForm @success="signIn($event)"/>
    </MyDialog>

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
      .welcome {
        margin-right: .5em;
      }
    }
  }
</style>
<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import AV from '../lib/leancloud'
  import SignInForm from './SignInForm'

  export default {
    components: {
      MyDialog, SignUpForm, SignInForm,
    },
    methods: {
      preview() {
        this.$emit('preview')
      },
      signIn(user) {
        this.signUpDialogVisible = false
        this.signInDialogVisible = false
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
        signInDialogVisible: false,
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
