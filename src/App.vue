<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor class="editor"/>
      <Preview/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import store from './store/index'

  export default {
    store,
    components: {
      Topbar, Editor, Preview,
    },
    methods: {
      preview() {
        return this.$store.commit('switchPreview')
      },
    },
    computed: {
      previewMode() {
        return this.$store.state.previewMode
      },
    },
    created() {
      let state = localStorage.getItem('state')
      if (state) {
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
    },
  }
</script>

<style lang="scss">
  html, body, #app {
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
