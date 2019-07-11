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
<template><!--html5提供的列表渲染标签，列表将统一放置在这里-->
  <div id="app">
    <ul class="footer-bar">
      <li class="footer-bar-item">首页</li>
      <li class="footer-bar-item">分类</li>
      <li class="footer-bar-item">购物车</li>
      <li class="footer-bar-item">我的</li>
    </ul>
  </div>
</template>
<style lang="scss">
.footer-bar{//设置类样式
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &-item{
    flex-grow: 1;
    text-align: center;
  }//设置类中子类
}
</style>
