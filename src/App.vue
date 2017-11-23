<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor class="editor" v-bind:resume="resume"/>
      <Preview v-bind:resume="resume"/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import store from './store/index'

  export default {
    data(){
      return{
        previewMode: false,


      }
    },
    store,
    components: {
      Topbar, Editor, Preview,
    },
    methods:{
      preview(){
        this.previewMode = true
      }
    }
  }
</script>

<style lang="scss">
  html,body,#app {
    height: 100%;
    /*overflow: hidden;*/
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #DDD;
  }
  #app main {
    display: flex;
    flex: 1;
  }
  #app.previewMode {
    .topbar {
      display: none;
    }
    .editor {
      display: none;
    }
  }
</style>
