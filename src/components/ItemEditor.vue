<template>
  <div>
    <h2>{{title}}</h2>
    <el-form ref="form" label-width="80px">
      <div class="container" v-for="(item,index) in this.items">
        <el-form-item v-for="key in keys" :key="key" v-bind:label="labels[key] || key">
          <el-input :value="item[key]" @input="changeResume(`${itemKey}.${index}.${key}`,$event)"></el-input>
        </el-form-item>

        <i class="el-icon-circle-close-outline" v-on:click="removeItem(index)"></i>
        <hr>
      </div>
    </el-form>
    <el-button type="primary" icon="el-icon-circle-plus-outline" v-on:click="addItem">添加</el-button>
  </div>
</template>

<script>
  export default {
    props: ["items", "labels", "itemKey","title",],
    computed: {
      keys() {
        return Object.keys(this.items[0])
      },
    },
    methods: {
      addItem: function () {
        const empty = {}
        this.keys.map((key) => {
          empty[key] = ''
        })
        console.log(empty)
        this.items.push(empty)
      },
      removeItem: function (index) {
        this.items.splice(index, 1)
      },
      changeResume(path,value) {
        this.$store.commit('updateResume', {
          path,
          value,
        })
      },
    },
  }
</script>
