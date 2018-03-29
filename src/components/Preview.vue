<template>
  <div id="preview">
    <h1>{{resume().profile.name || '请填写姓名'}}</h1>
    <p>{{resume().profile.city || '请填写城市'}}</p>
    <section v-if="filter(resume().study).length>0">
      <h2>学习经历</h2>
      <hr>
      <ul>
        <li v-for="item in resume().study">
          {{item.school}}
          {{item.degree}}
          {{item.specialty}}
        </li>
      </ul>

    </section>
    <section v-if="filter(resume().skill).length>0">
      <h2>技能掌握</h2>
      <hr>
      <ul>
        <li v-for="item in resume().skill">
          {{item.type}}
          {{item.level}}
        </li>
      </ul>

    </section>
    <section v-if="filter(resume().work).length>0">
      <h2>工作经验</h2>
      <hr>
      <ul>
        <li v-for="item in resume().work">
          {{item.company}}
          {{item.position}}
          {{item.content}}
        </li>
      </ul>

    </section>
    <section v-if="filter(resume().fav).length>0">
      <h2>兴趣爱好</h2>
      <hr>
      <ul>
        <li v-for="item in resume().fav">
          {{item.item}}

        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    methods: {
      filter(array) { //找出非空对象
        return array.filter(item => !this.isEmpty(item))
      },
      isEmpty: function (object) {
        let empty = true
        for (let key in object) {
          if (object[key]) {
            empty = false
            break
          }
        }
        return empty
      },

      resume() {
        return this.$store.state.resume
      },

    },
  }
</script>
<style lang="scss">
  #preview {
    min-height: 100px;
    flex: 1;
    margin: 16px 16px 16px 8px;
    background: white;
    border-radius: 10px;
    padding: 1em;
    hr {
      margin: 0.5em 0;
    }
    h2 {
      margin-top: 0.5em;
    }
  }
</style>
