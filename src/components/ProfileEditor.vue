<template>
  <el-form ref="form"  label-width="80px">
    <el-form-item label="姓名">
      <el-input :value="profile.name" @input="changeProfile('profile.name', $event)"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select :value="profile.sex" @input="changeProfile('profile.sex', $event)" placeholder="请选择性别">
        <el-option label="男" value="man"></el-option>
        <el-option label="女" value="woman"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="城市">
      <el-input :value="profile.city" @input="changeProfile('profile.city', $event)"></el-input>
    </el-form-item>
  </el-form>
</template>
<style>

</style>
<script>
  export default {
    props: ['profile',],
    methods: {
      changeProfile(path,value) {
        this.$store.commit('updateResume', {
          path,
          value,
        })
      },
    }
  }
</script>
