<!-- 初始代码和练习时使用
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div class="box">box</div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.box {//.box可以适配background属性，而#box不能
  width: 100%;
  height: 100%;
  color: #2c3e50;
  background: #42b983;
}

</style>
-->
<!--以下为实例代码-->
<template>
  <div id="app">
    <ul class="footer-bar">
      <li>首页</li>
      <li>分类</li>
      <li>购物车</li>
      <li>我的</li>
    </ul>
  </div>
</template>
<style lang="scss">
.footer-bar{
  display: flex;
  position: fixed;
  bottom: 0%;
  width: 100%;
  &-item{
    flex-grow:unset;
    text-align: center;
  }
}
</style>
