<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <communication></communication> -->
    <!-- <slots></slots> -->
  <form-cyy></form-cyy>
  </div>
</template>

<script>
import communication from '@/components/communication'
import slots from '@/components/slots'
import formCyy from '@/components/form'

export default {
  name: 'app',
  provide() {
    return {
      foo: 'foooooo',
      obj: {
        name: 'cyy'
      }
    }
  },
  components: {
    communication,
    slots,
    formCyy,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
