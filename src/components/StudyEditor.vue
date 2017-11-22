<template>
  <div>
    <h2>学习情况</h2>
    <el-form ref="form" label-width="80px">
      <div class="container" v-for="(item,index) in this.study">
        <el-form-item label="学校">
          <el-input v-model="item.name"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="item.specialty"></el-input>
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
    props:["study"],
    methods: {
      addItem: function () {
        this.study.push(
          {
            school: '',
            degree: '',
            specialty: '',
          },
        )
      },
      removeItem: function (index) {
        this.study.splice(index, 1)
      },
    }
  }
</script>
