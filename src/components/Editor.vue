<template>
  <div id="editor">
    <nav>
      <ul class="nav-bar">
        <li v-for="i in [0,1,2,3,4]"
            v-bind:class="{active: currentTab === i}"
            v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px;" v-bind:style="{fill: colors[i]}">
            <use v-bind:xlink:href="`#icon-${icon[i]}`"></use>
          </svg>
        </li>
      </ul>
    </nav>
    <div class="edit-wrap">
      <ul class="edit-content">
        <li v-bind:class="{active: currentTab === 0}">
          <h2>个人信息</h2>
          <ProfileEditor v-bind:profile="resume.profile"/>
        </li>
        <li v-bind:class="{active: currentTab === 1}">
          <ItemEditor v-bind:items="resume.study" v-bind:labels="{school: '学校',degree: '学位',specialty: '专业'}"
                      itemKey="study"
                      title="学业情况"/>
        </li>
        <li v-bind:class="{active: currentTab === 2}">
          <ItemEditor v-bind:items="resume.skill" v-bind:labels="{type: '技能名称',level:'熟练程度'}" itemKey="skill"
                      title="职业技能"/>

        </li>
        <li v-bind:class="{active: currentTab === 3}">
          <ItemEditor v-bind:items="resume.work" v-bind:labels="{company: '公司名称',position:'职位',content:'工作内容'}"
                      itemKey="work"
                      title="工作经验"/>
        </li>
        <li v-bind:class="{active: currentTab === 4}">
          <ItemEditor v-bind:items="resume.fav" v-bind:labels="{item: '项目'}" title="兴趣爱好" itemKey="fav"/>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor.vue'
  import ItemEditor from './ItemEditor.vue'

  export default {
    components: {ProfileEditor, ItemEditor},
    data() {
      return {
        colors: ['red', 'blue', 'yellow', 'green', 'orange'],
      }
    },
    computed: {
      icon() {
        // $store 是什么
        return this.$store.state.icon
      },
      currentTab: {
        get() {
          return this.$store.state.currentTab
        },
        set(value) {
          return this.$store.commit('switchTab', value)
        },
      },
      resume() {
        return this.$store.state.resume
      },
    },
  }
</script>
<style lang="scss">
  #editor {
    width: 30em;
    margin: 16px 8px 16px 16px;
    background: white;
    /*overflow: auto;*/
    border-radius: 10px;
    position: relative;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .edit-wrap {
    overflow: auto;
    height: calc(100% - 51px);
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: rgb(64, 158, 255);
    border-radius: 10px 10px 0 0;
    li.active {
      background: white;
      border-radius: 10px 10px 0 0;
      svg {
        fill: black;
      }
    }
  }

  .edit-content {

    li {
      display: none;
      padding: 16px;
    }
    li.active {
      display: block;
      h2 {
        margin-bottom: 10px;
      }
    }
    .container {
      position: relative;
      i {
        position: absolute;
        top: -13px;
        right: -13px;
      }
    }
  }

</style>
