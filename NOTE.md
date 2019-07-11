# vue的安装与服务开启
## Project setup
```
npm install
```
* 在项目没有“node_modules”的情况下，重新安装所有依赖
* At the condition of no "node_modules",reinstall all the dependence.
### Compiles and hot-reloads for development
```
npm run serve
```
* 在开发过程中，开启Damo
* In developing process,run damo
# vue框架结构
```
node_modules: vue文件支持包，相当于环境
public: 
src: 项目源代码
  assets: 各种资源
  components: 
  views: 存放单独页面的vue文件
  主页vue文件
  各种js文件
.gitnore: git的忽略文件
各种配置文件
```
### vue文件标签
```
无head标签，头部信息由其他位置定义好
无body标签，默认vue中全部标签写在body中
其他标签与html相同
```
