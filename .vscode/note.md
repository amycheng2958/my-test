# vscode
### 调试
* [默认支持node](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
* 支持网页调试，需要安装 `debugger for chrome`,[如何配置](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)`lanuch.json`,如何开启本地服务器`http-server`
### git集成
* **clone已存在项目**
调出命令面板`command + palette`,输入`git clone` 输入地址回车
* **已存在项目**
`source control`中：`git: add remote`,填写remote name 为 origin,添加remote url 为 git地址
* **代码提交**
`source control`中：填写`message`,`git: commit`
* **代码推送** `git: push`
### 扩展
`vetur`，[vue vscode snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets), `IntelliJ IDEA Key Bindings` , `debugger for chrome`

# [vue](https://cn.vuejs.org/)
* 引用vue.js，创建vue实例
* vue设计思想
* MVVM框架三要素：
  > `响应式`：vue如何监听数据变化? `模板引擎`：vue模板如何编写和解析? `模板渲染`：vue如何将模板转换为html
* [模板语法](https://cn.vuejs.org/v2/guide/syntax.html)
  - 插值文本
  - 特性
* [列表渲染](https://cn.vuejs.org/v2/guide/list.html)
* [表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html)
* [事件处理](https://cn.vuejs.org/v2/guide/events.html)
  - 事件修饰符
  - 系统修饰符
* [class和style绑定](https://cn.vuejs.org/v2/guide/class-and-style.html)
* [条件渲染](https://cn.vuejs.org/v2/guide/conditional.html)
* 模板语法实现原理: 
> 在底层是线上，vue将模板编译成虚拟dom渲染函数，结合响应系统，vue能够智能地计算出最少需要重新渲染多少组件，并把dom操作次数减到最少
* [计算属性和监听器](https://cn.vuejs.org/v2/guide/computed.html)
  - **计算属性vs监听器**：
  - *语境差异* : `watch`适合做一个值影响多个值得情形,一个值变化了，我要做哪些事，`computed`适合做多个值影响一个值得情形，一个值由其他的值得来，这些值变化了我也要变
  - 计算属性有缓存性，如果值么有发生变化，则页面不会重新渲染
  - 监听器选项提供了更通用的方法，比如异步操作，为了限制请求次数，需要做[防抖](https://cn.vuejs.org/v2/guide/computed.html#%E4%BE%A6%E5%90%AC%E5%99%A8)，适合执行异步操作或较大开销操作的情况
* [生命周期](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
  - vue实例从创建到销毁的过程就是生命周期
  - 页面首次加载会触发`beforeCreate`，`created` ，`beforeMount`， `mounted`，当有数据更新才会触发`beforeUpdate`，`updated`
  - `beforeCreate`：执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务
  - `created`：组件初始化完毕，各种数据可以使用，常用于异步数据获取
  - `beforeMounted`： 未执行渲染、更新，dom未创建
  - `mounted`：初始化结束，dom已创建，可用于获取访问数据和dom元素 
  - `beforeUpdate`：更新前，可用于获取更新前各种状态，比如数据更新前监听滚动条高度
  - `updated`：更新后，所有状态已是最新
  - `beforeDestroy`： 解除绑定，销毁子组件以及事件监听，定时器等可能造成内存泄漏的东西
  - `destroyed`：组件已销毁，作用同上
  - `errorCaptured`： 2.5.0+ 新增捕获错误处理
* [组件](https://cn.vuejs.org/v2/guide/components.html)
* 




