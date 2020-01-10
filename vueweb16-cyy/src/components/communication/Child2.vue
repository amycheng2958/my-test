<template>
  <div>
    <h3 v-on="$listeners">child2</h3>
    <button @click="sendToChild1">给child1发送消息</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  mounted() {},
  methods: {
    sendToChild1() {
    //   this.$bus.$emit("event-from-child2", 'some msg from child2');
      this.$parent.$emit("event-from-child2", 'some msg from child2');
    }
  }
};
</script>

<style lang="scss" scoped></style>
