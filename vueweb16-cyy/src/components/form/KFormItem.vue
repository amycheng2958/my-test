<template>
  <div>
    <div v-if="label">{{ label }}</div>
    <slot></slot>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import schema from "async-validator";
export default {
  inject: ["form"],
  data() {
    return {
      error: ""
    };
  },
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: {
      type: String,
      default: ""
    }
  },
  methods: {
    validate() {
      const value = this.form.model[this.prop];
      var descriptor = {
        [this.prop]: this.form.rules[this.prop]
      };
      var validator = new schema(descriptor);
      return validator.validate({ [this.prop]: value }, (errors, fields) => {
        if (errors) {
          this.error = errors[0].message;
        }
      });
    }
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  }
};
</script>

<style lang="scss" scoped></style>
