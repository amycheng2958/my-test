<template>
  <div>{{ msg }}</div>
</template>

<script>
import { mixins } from "vue-class-component";
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from "vue-property-decorator";
import { mapGetters, mapState } from "vuex";
import { AutowiredService } from "../../../../lib/sg-resource/decorators";

import { BaseComp } from "../../BaseComp";

@Component({
  components: {},
})
export default class AppointMViewComp extends mixins(BaseComp) {
  year: number = 0;
  month: number = 0;
  day: number = 0;
  week: string[] = ["日", "一", "二", "三", "四", "五", "六"];
  monthList: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  weekDay: number = 1;
  lastWeekDay: number = 1;
  // 上一个月有多少天
  get preMonthSize() {
    return this.month - 1 === 0 ? 31 : this.monthList[this.month - 2];
  }

  // 获得今天的日期
  getCurrentDate() {
    const date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDate();
  }

  // 根据年月日获得为星期几
  getWeekDay(year: number, month: number, day: number) {
    return new Date(`${year}/${month}/${day}`).getDay();
  }

  initDate() {
    if (
      (this.year % 4 === 0 && this.year % 100 !== 0) ||
      this.year % 400 === 0
    ) {
      this.monthList[1] = 29;
    } else {
      this.monthList[1] = 28;
    }
    // 获得指定年月的1号是星期几
    const firstDay = this.getWeekDay(this.year, this.month, 1);
    // 在1号前面填充多少个上个月的日期
    this.weekDay = firstDay === 7 ? 0 : firstDay;
    // 获得最后一天是星期几，往后填充多少个
    const remineDay = this.getWeekDay(
      this.year,
      this.month,
      this.monthList[this.month - 1],
    );
    this.lastWeekDay = remineDay === 7 ? 6 : 6 - remineDay;
    if (this.monthList[this.month - 1] + this.lastWeekDay + this.weekDay < 36) {
      this.lastWeekDay += 7;
    }
  }

  // changeDate(type: string) {
  //   switch (type) {
  //     case "preYear":
  //       this.year -= 1;
  //       break;
  //     case "preMonth":
  //       // 当前月份为1月， 上一个月分为12月，年份减1
  //       if (this.month === 1) {
  //         this.month = 12;
  //         this.year -= 1;
  //       } else {
</script>
 
// <style scoped>
// </style>