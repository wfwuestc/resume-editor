<template>
  <div id="topbar">
    <div class="logo">
      Resume Editor
    </div>
    <div class="action">
      <el-button>登录</el-button>
      <el-button type="primary">注册</el-button>
    </div>
  </div>
</template>
<style lang="scss">
  #topbar {
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 53px 3px;
    z-index: 1;
  }
</style>
