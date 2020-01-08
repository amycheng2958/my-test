<template>
  <div :class="['courselist',$style.red]">
    <p v-if="courses.length == 0">没有任何课程信息</p>
    <div v-else>
      <p
        v-for="(item, index) in courses"
        :key="index"
        :class="{ [$style.active]: selectedCourse === item }"
        @click="onClick(item)"
      >
      {{ item.name }} - {{ item.price | currency("$") }}
       <!-- <router-link :to="`/admin/course/${item.name}`"> {{ item.name }} - {{ item.price | currency("$") }}</router-link> -->
      </p>
      <!-- style -->
      <!-- <div v-for="item in courses" :key="item" 
                    :style="{backgroundColor: (selectedCourse === item ? '#ddd' : 'transparent')}"
                    @click="selectedCourse = item">
                        {{ item }}
                    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {
      selectedCourse: ""
    };
  },
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    courses(newValue) {
      this.selectedCourse = newValue.length && newValue[0];
    }
  },
  filters: {
    currency: function(value, symbol = "￥") {
      return symbol + value;
    }
  },
  methods: {
    onClick(item) {
      this.selectedCourse = item; 
      // this.$router.push(`/admin/course/${item.name}`)
      this.$router.push({
        name:'detail',
        params: {name: item.name}
      })
    }
  },
};
</script>

<style module>
.active {
  background-color: #ddd;
}
.red {
  color: green
}
</style>
