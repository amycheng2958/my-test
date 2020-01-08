<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/admin">管理</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script></script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.courselist {
  border: 3px solid green;
}
// .courselist >>> p {
//   color: red
// }
// 深度选择器
// .courselist::v-deep p {
//   color: red
// }
// .courselist /v-deep/ p {
//   color: red
// }
</style>
