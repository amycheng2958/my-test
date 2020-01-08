<template>
  <div id="app">
    <img :src="`${publicPath}assets/logo.png`" alt="" />
    <div class="hello">
      <h2 :title="title">{{ title }}</h2>
      <!-- 批量清除弹窗 -->
      <div>
        <button @click="$bus.$emit('message-close')">清空提示框</button>
      </div>
      <!-- 课程列表组件 -->
      <CourseList :courses="courses"></CourseList>
      <!-- 新增课程 -->
      <AddCourse v-model="course" @add-course="addCourse"></AddCourse>
      <p>
        <input v-model.number="price" type="number" step="1" />
        <button @click="batchUpdate">批量更新价格</button>
      </p>
      <!-- 商品总数 -->
      <p>课程总数: {{ totalCount }}</p>

      <message class="success" ref="msgSuccess" :show.sync="isShow">
        <!-- 命名为subtitle的具名插槽 -->
        <template v-slot:subtitle="slotProps">
          <strong>hello{{ slotProps.title }}</strong>
        </template>
        <!-- <template v-slot:title></template> -->
        <!-- 默认插槽 -->
        <template v-slot:default>
          新增课程成功！
        </template>
      </message>

      <message ref="msgWarning" class="warning" :show.sync="isShowWarn">
        <!-- 命名为title的具名插槽 -->
        <template v-slot:title>
          <strong>警告</strong>
        </template>
        <!-- 默认插槽 -->
        <template>
          请输入课程的名称！
        </template>
      </message>
    </div>
  </div>
</template>

<script>
import { getCourses } from "./api/courses";
import CourseList from "./components/CourseList.vue";
import AddCourse from "./components/AddCourse.vue";
import message from "./components/message.vue";
import Vue from "vue";
Vue.prototype.$bus = new Vue();
export default {
  name: "app",
  data() {
    return {
      price: 0,
      title: "购物车",
      course: "",
      courses: [],
      isShow: false,
      isShowWarn: false,
      publicPath: process.env.BASE_URL
    };
  },
  components: {
    CourseList,
    AddCourse,
    message
  },
  computed: {
    totalCount() {
      return this.courses.length;
    }
  },
  methods: {
    batchUpdate() {
      this.courses.forEach(element => {
        this.$set(element, "price", this.price);
      });
    },
    addCourse() {
      if (this.course) {
        this.courses.push({ name: this.course, price: 0 });
        this.course = "";
        // this.$refs.msgSuccess.toggle();
        this.isShow = true;
      } else {
        this.isShowWarn = true;
        // this.$refs.msgWarning.toggle();
      }
    }
  },
  async created() {
    this.courses = await getCourses();
    this.batchUpdate();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.courselist {
  border: 3px solid green;
}
// .courselist >>> p {
//   color: red
// }
// 深度选择器
// .courselist::v-deep p {
//   color: red
// }
// .courselist /v-deep/ p {
//   color: red
// }
</style>
