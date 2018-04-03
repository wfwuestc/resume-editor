<template>
  <el-form ref="form"  label-width="80px">
    <el-form-item label="姓名">
      <el-input :value="profile.name" @input="changeProfile('profile.name', $event)"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select :value="profile.sex" @input="changeProfile('profile.sex', $event)" placeholder="请选择性别">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="城市">
      <el-input :value="profile.city" @input="changeProfile('profile.city', $event)"></el-input>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker
        :value="profile.date"
        align="right"
        type="date"
        placeholder="选择日期"
        @input="changeProfile('profile.date', $event)"
        >
      </el-date-picker>
    </el-form-item>
    <el-form-item
      label="联系电话"
      prop="number"
      :rules="[
      { type: 'number', message: '电话必须为数字值'}
    ]">
      <el-input type="number" v-model.number="profile.phone" auto-complete="off"
                @input="changeProfile('profile.phone', $event)"></el-input>
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
