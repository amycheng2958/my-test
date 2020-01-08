<template>
  <div>
      <input
        ref="inp"
        type="text"
        v-focus
        :value="value"
        @input="onInput"
        @keydown.enter="addCourse"
      />
      <button @click="addCourse">新增</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    addCourse() {
      // 派发事件通知父组件新增课程
      this.$emit("add-course");
    },
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  },
  mounted() {
    //   this.$refs.inp.focus();
  },
    // 自定义指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
};
</script>

<style lang="scss" scoped></style>
