// 插件需要实现install
const MyPlugin = {
  install(Vue, options) {
      Vue.component("heading", {
        render(h) {
          let children = [];
          if (this.icon) {
            children.push(
              h("svg", { class: "icon" }, [
                h("use", { attrs: { "xlink:href": "#icon-" + this.icon } })
              ])
            );
          }
          children = children.concat(this.$slots.default);
          // children = children.concat(contex.children);
          const vnode = h(
            "h" + this.level, // 标签名称
            { attrs: { title: this.title } },
            children // 子节点数组
          );
          return vnode;
        },
        props: {
          level: {
            type: String,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          icon: {
            type: String
          }
        }
      });
      Vue.component("footing", {
        render(h) {
          let children = [];
          if (this.icon) {
            children.push(
              h("svg", { class: "icon" }, [
                h("use", { attrs: { "xlink:href": "#icon-" + this.icon } })
              ])
            );
          }
          children = children.concat(this.$slots.default);
          // children = children.concat(contex.children);
          const vnode = h(
            "h" + this.level, // 标签名称
            { attrs: { title: this.title } },
            children // 子节点数组
          );
          return vnode;
        },
        props: {
          level: {
            type: String,
            required: true
          },
          title: {
            type: String,
            required: true
          },
          icon: {
            type: String
          }
        }
      });
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  // 使用插件使用Vue.use()
  alert(1)
  window.Vue.use(MyPlugin)
}