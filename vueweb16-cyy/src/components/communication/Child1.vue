<template>
  <div>
    <h3>child1</h3>
    <p>{{ msg }}</p>
    <button @click="sendToParent">给父组件传值</button>
    <p>{{foo}}</p>
    <p>{{obj.name}}</p>
  </div>
</template>

<script>
export default {
  inject: {
    foo: {
      type: String,
      default: ""
    },
    obj: {
        type: Object,
      default: {}
    }
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  mounted() {
    // this.$bus.$on('event-from-child2',msg=>{
    //     alert('Child1:'+msg)
    // })
    console.log(this.$attrs.attrs);
    console.log(this.foo)
    console.log(this.obj)
    this.$parent.$on("event-from-child2", msg => {
      console.log("Child1:" + msg);
    });
  },
  methods: {
    sendToParent() {
      this.$emit("someEvent", "event form child1");
    },
    eat() {
      alert("这就回来");
    }
  }
};
</script>

<style lang="scss" scoped></style>
