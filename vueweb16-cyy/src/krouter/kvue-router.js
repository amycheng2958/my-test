
import Link from './krouter-link'
import View from './krouter-view'
let Vue;

class KVueRouter {
  constructor(options) {
    this.$options = options;
    // 创建响应式的current属性
    Vue.util.defineReactive(this, "current", "/");
    window.addEventListener("hashchange", this.onHashchange.bind(this));
    window.addEventListener("load", this.onHashchange.bind(this));

    // 创建一个路由映射表
    this.routeMap = {};
    options.routes.forEach(route => {
      this.routeMap[route.path] = route;
    });
  }
  onHashchange() {
    this.current = window.location.hash.slice(1);
  }
}

KVueRouter.install = function(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    }
  });
  Vue.component("router-link", Link);
  Vue.component("router-view", View);
};
export default KVueRouter;
