<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <div
      v-if="show"
      class="message-box"
    >
      <slot
        name="subtitle"
        :title="title"
      >
        默认标题
      </slot>
      <slot />
      <span
        class="message-box-close"
        @click="toggle"
      >X</span>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      title: "来自子组件的标题",
      //   show: false,
      name: "cyy"
    };
  },
  mounted() {
    this.$bus.$on("message-close", () => {
    //   this.toggle();
      this.$emit('update:show',false)
    });
  },
  methods: {
    toggle() {
      //   this.show = !this.show;
      this.$emit('update:show',false)
    }
  }
};
</script>

<style scoped lang="scss">
.message-box {
  padding: 10px 20px;
}
.message-box-close {
  float: right;
}
.success {
  background: $gcolor;
  border: 1px solid #42b983;
}
.warning {
  background: $rcolor;
  border: 1px solid #d63200;
}
</style>
