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
        <ProfileEditor v-bind:profile="profile"/>
      </li>
      <li v-bind:class="{active: currentTab === 1}">
        <StudyEditor v-bind:study="study"/>
      </li>
      <li v-bind:class="{active: currentTab === 2}">
        <h2>职业技能</h2>
        <el-form ref="form" :model="skill" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="skill.type"></el-input>
          </el-form-item>
          <el-form-item label="熟练度">
            <el-input v-model="skill.level"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 3}">
        <h2>工作经验</h2>
        <el-form ref="form" :model="work" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="work.company"></el-input>
          </el-form-item>
          <el-form-item label="熟练度">
            <el-input v-model="work.position"></el-input>
          </el-form-item>
        </el-form>
      </li>
      <li v-bind:class="{active: currentTab === 4}">
        <h2>兴趣爱好</h2>
        <el-form ref="form" :model="fav" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="fav.item"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ul>


  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor.vue'
  import StudyEditor from './StudyEditor.vue'
  export default {
    components:{ProfileEditor,StudyEditor},
    data() {
      return {
        currentTab: 0,
        icon: ['credential', 'xueli', 'skill', 'work', 'fav'],
        profile: {
          name: '',
          region: '',
          date: '',
          city: '',
        },
        study: [{
          school: '',
          degree: '',
          specialty: '',
        },],
        skill: {
          type: '',
          level: '',
        },
        work: {
          company: '',
          position: '',
        },
        fav: {
          item: '',
        },
      }
    }, created() {
      let _this = this
      setTimeout(function () {
        console.log(_this.form)
      }, 10000)
    },
    methods: {

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
