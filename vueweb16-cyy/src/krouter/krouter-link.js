export default {
    props: {
      to: {
        type: String,
        require: true
      }
    },
    render(h) {
      console.log(this.$slots);
      return h("a", { attrs: { href: "#" + this.to } }, this.$slots.default);
      // return <a href={'#'+this.to}>{this.$slots.default}</a>
    }
  }