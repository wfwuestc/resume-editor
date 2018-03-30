<template>
  <div id="topbar">
    <div class="wrap">
      <div class="logo">
        <h2>Resume Editor</h2>
      </div>
      <div class="action">
        <div v-if="logined" class="userActions">
          <span class="welcome">你好，{{user.username}}</span>
          <el-button @click.prevent="signOut">注销</el-button>
          <el-button @click.prevent="preView">预览</el-button>
          <el-button @click.prevent="saveData">保存</el-button>
        </div>
        <div v-else class="userActions">
          <el-button @click.prevent="signInDialogVisible = true">登录</el-button>
          <el-button type="primary" @click.prevent="signUpDialogVisible = true">注册</el-button>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            <SignUpForm @success="signIn($event)"/>
          </MyDialog>
        </div>
      </div>
      <MyDialog title="登录" :visible="signInDialogVisible"
                @close="signInDialogVisible = false">
        <SignInForm @success="signIn($event)"/>
      </MyDialog>
      <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
        <SignUpForm @success="signIn($event)"/>
      </MyDialog>
    </div>

  </div>
</template>
<style lang="scss">
  #topbar {
    padding: 16px;

    box-shadow: 0 0 53px 3px;
    z-index: 1;
    h2 {
      font-style: italic;
      color: rgb(52, 53, 196);
    }
    background: linear-gradient(to right, #fccd4d 0%, #fbdf93 0%, #fccd4d 0%, #f8b500 1%, #fceabb 100%);
    .wrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 1300px;
      margin: 0 auto;
    }
  }

  .action {
    display: flex;
    .userActions {

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

  var log = console.log.bind(console)
  export default {
    components: {
      MyDialog, SignUpForm, SignInForm,
    },
    methods: {
      preView() {
        this.$store.commit('switchPreview')
      },
      signIn(user) {
        this.signUpDialogVisible = false
        this.signInDialogVisible = false

        this.getData()
        log('signin')
        this.$store.commit('setUser', user)
      },
      signOut() {
        AV.User.logOut()
        this.$store.commit('removeUser')
        let data = JSON.parse(this.emptyResume)
        this.$store.commit('setResume', data)
      },
      saveData() {
        this.getCurrentUser()
        const Todo = AV.Object.extend('Todo')
        let data = JSON.stringify(this.$store.state.resume)
        if (this.isFirstLogin) {
          log(1)
          log(this.todoId)
          let todo = AV.Object.createWithoutData('Todo', this.todoId)
          todo.set({data})
          log(todo)
          todo.save().then((response) => {
            successFn && successFn.call(null)
          }, (error) => log(error))
        } else {
          log(2)
          let todo = new Todo()
          let acl = new AV.ACL()
          // 注意这里是 false 公共不可读
          acl.setPublicReadAccess(false)
          // 当前用户可读
          acl.setWriteAccess(AV.User.current(), true)
          acl.setReadAccess(AV.User.current(), true)
          todo.setACL(acl)//应用acl
          todo.set({data})
          this.isFirstLogin = true
          todo.save().then((response) => {
            this.todoId = todo.id
            log('todoid', this.todoId)
          }, function (error) {
            errorFn && errorFn.call(null, error)
          })
        }

      },
      getCurrentUser() {
        let {id, createdAt, attributes: {username}} = AV.User.current()
        return {id, createdAt, username}
      },
      getData() {
        const query = new AV.Query('Todo')
        query.find().then(todoData => {
          if (todoData.length === 0) {
            this.isFirstLogin = false
            this.saveData()
            return
          }
          let data = JSON.parse(todoData[0].attributes.data)
          this.$store.commit('setResume', data)
        }, () => {
          log('error')
        })
      },

    },
    data() {
      return {
        signUpDialogVisible: false,
        signInDialogVisible: false,
        isFirstLogin: true,
        todoId: '',
        emptyResume: '',
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
    // 在构建Topbar完工时，备份空resume
    created() {
      let data = JSON.stringify(this.$store.state.resume)
      this.emptyResume = data
    },
  }
</script>
