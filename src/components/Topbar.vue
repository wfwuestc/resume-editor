<template>
  <div id="topbar">
    <div class="logo">
      Resume Editor
    </div>
    <div class="action">
      <span>{{user}}</span>
      <el-button>登录</el-button>
      <el-button type="primary" @click.prevent="signUpDialogVisible = true">注册</el-button>
      <Dialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <SignUpForm @success="login($event)"/>
      </Dialog>
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
</style>
<script>
  import Dialog from './Dialog'
  import SignUpForm from './SignUpForm'

  export default {
    components: {
      Dialog,SignUpForm
    },
    methods: {
      preview() {
        this.$emit('preview')
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
    },
  }
</script>
