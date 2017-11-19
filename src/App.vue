<template>
  <div id="app">
    <Topbar/>
    <main>
      <Editor/>
      <Preview/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'

  export default {
    components: {
      Topbar, Editor, Preview,
    },
  }
</script>

<style>
  html,body,#app {
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main {
    display: flex;
    flex: 1;
  }

</style>
