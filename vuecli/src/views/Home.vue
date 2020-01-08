<template>
  <div class="home">
    <img :src="`${publicPath}assets/logo.png`"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
}
</script>
