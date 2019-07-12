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
