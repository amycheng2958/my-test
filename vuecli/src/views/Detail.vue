<template>
  <div>
    <p>detail page</p>
    <p>{{ $route.params.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  beforeRouteUpdate(to, from, next) {
    next()
  }
  // watch: {
  //     $route: {
  //         immediate: true,
  //         deep: true,
  //         handler(newValue) {
  //             alert(1)
  //         }
  //     }
  // },
};
</script>

<style lang="scss" scoped>
</style>