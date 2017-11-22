<template>
  <el-form ref="form" :model="profile" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="profile.name"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="profile.region" placeholder="请选择性别">
        <el-option label="男" value="man"></el-option>
        <el-option label="女" value="woman"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="城市">
      <el-input v-model="profile.city"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    props: ['profile',],

  }
</script>
