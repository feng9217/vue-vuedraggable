# js-exam

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<h1>这是一个小DEMO</h1>
使用了 vue && vuedraggable && bootstrap  
实现的功能是, 使用一个数组JSON生成一个二级关联的菜单, 并可以拖动菜单内的元素改变其位置的同时, JSON内的数据位置也发生对应变化, 并且可以自己添加数据  
  
也就是:  
1. 二级关联菜单  
2. 拖动  
3. 数据结构同时改变  
4. 可添加数据  
5. 数据改变, 更新二级菜单
  
目录中还附有一个简单的Demo 一个vuedraggable作者的完整Demo  
可直接以组件方式引入查看  
演示:  
![demo gif1](https://github.com/feng9217/vue-vuedraggable/blob/master/gif/demo1.gif)  
![demo gif2](https://github.com/feng9217/vue-vuedraggable/blob/master/gif/demo2.gif)  
  
***
PS: 在把包下下来后, npm install后, 运行时会提示错误:  
To install it, you can run: npm install --save !!vue-style-loader!css-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-5dfb6395","scoped":true,"hasInlineConfig":false}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0&bustCache!./foods.vue  
  
解决方法是: 当前目录（项目）下  
  
npm install stylus-loader css-loader style-loader --save-dev  
并且  
npm install stylus  
这样就没有缺少的不能加载的模块了  
npm run dev也不会报错了  