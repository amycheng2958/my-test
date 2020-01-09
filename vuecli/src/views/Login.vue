<template>
  <div>
    <button
      v-if="!isLogin"
      @click="login"
    >
      登录
    </button>
    <button
      v-else
      @click="logout"
    >
      注销
    </button>
  </div>
</template>

<script>
    export default {
        computed: {
            isLogin() {
                return window.isLogin
            }
        },
        created () {
            window.isLogin = false;
        },
        methods: {
            login() {
                window.isLogin = true
                this.$router.push(this.$route.query.redirect)
            },
            logout() {
                window.isLogin = false
                this.$router.push('/')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>