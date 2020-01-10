<template>
  <div>
      <Child1 msg="some msg from parent" @someEvent="getEventFromChild" attrs="这是$attrs"></Child1>    
      <Child2 msg="some msg from parent" @click="onClick"></Child2>  
      <button @click="goHome">回家吃饭</button>  
  </div>
</template>

<script>
import Child1 from "@/components/communication/Child1.vue";
import Child2 from '@/components/communication/Child2.vue'

export default {
    components: {
        Child1,
        Child2,
    },
    methods: {
        getEventFromChild(msg) {
            alert('event'+msg)
        },
        goHome() {
            console.log(this)
            this.$children[0].eat()
        },
        onClick() {
            console.log('来自老爹的回调函数')
        }
    },
};
</script>

<style lang="scss" scoped></style>
