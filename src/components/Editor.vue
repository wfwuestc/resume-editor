<template>
  <div id="editor">
    <nav>
      <ul class="nav-bar">
        <li v-for="i in [0,1,2,3,4]"
            v-bind:class="{active: currentTab === i}"
            v-on:click="currentTab = i">
          <svg class="icon" aria-hidden="true" style="width: 50px; height: 50px">
            <use v-bind:xlink:href="`#icon-${icon[i]}`"></use>
          </svg>
        </li>
      </ul>
    </nav>

    <ul class="edit-content">
      <li v-bind:class="{active: currentTab === 0}">
        <h2>个人信息</h2>
        <ProfileEditor v-bind:profile="resume.profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <ItemEditor v-bind:items="resume.study" v-bind:labels="{school: '学校',degree: '学位',specialty: '专业'}"
                    title="学业情况"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <ItemEditor v-bind:items="resume.skill" v-bind:labels="{type: '技能名称',level:'熟练程度'}" title="职业技能"/>

      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <ItemEditor v-bind:items="resume.work" v-bind:labels="{company: '公司名称',position:'职位',content:'工作内容'}"
                    title="工作经验"/>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <ItemEditor v-bind:items="resume.fav" v-bind:labels="{item: '项目'}" title="兴趣爱好"/>
      </li>
    </ul>


  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor.vue'
  import ItemEditor from './ItemEditor.vue'

  export default {
    components: {ProfileEditor, ItemEditor},
//    props: ['resume'],
    computed: {
      icon() {
        return this.$store.state.icon
      },
      currentTab: {
        get() {
          return this.$store.state.currentTab
        },
        set(value) {
          return this.$store.commit('switchTab', value)
        }
      },
      resume() {
        return this.$store.state.resume
      },
    },
  }
</script>
<style lang="scss">
  #editor {
    border: 1px solid black;
    width: 30em;
    margin: 16px 8px 16px 16px;
    background: white;
    overflow: auto;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background: #000;
    li > svg {
      fill: white;
    }
    li.active {
      background: white;
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
    }
    .container {
      position: relative;
      i {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }

</style>
