<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop="name">
        <KInput v-model="userInfo.name"></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="passwd">
        <KInput v-model="userInfo.passwd"></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="login">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "@/components/form/KInput";
import KFormItem from "@/components/form/KFormItem";
import KForm from "@/components/form/KForm";
export default {
  data() {
    return {
      userInfo: {
        name: "",
        passwd: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名称" }],
        passwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
      login() {
          this.$refs['loginForm'].validate(valid=>{ 
              console.log(valid)
           })
      }
  },
};
</script>

<style lang="scss" scoped></style>
