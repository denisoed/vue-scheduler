<template>
  <section class="scheduler">
    <div class="scheduler_column scheduler_column-time">
      <div class="scheduler_column-row" v-for="(time, i) in timeList" :key="i">{{ time }}</div>
    </div>
    <div class="scheduler_column" v-for="(day, i) in dayList" :key="i">
      <div class="scheduler_column-row" v-for="(time, i) in timeList" :key="i"></div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VueScheduler',
  data() {
    return {
      dayList: [1, 2, 3, 4, 5, 6],
      timeList: []
    };
  },
  created() {
    this.generateTimeList('07:00', '06:00');
  },
  methods: {
    generateTimeList(start, end) {
      const startTime = moment(start, 'HH:mm');
      const endTime = moment(end, 'HH:mm');
      if (endTime.isBefore(startTime)) {
        endTime.add(1, 'day');
      }
      const timeStops = [];
      while (startTime <= endTime) {
        timeStops.push(new moment(startTime).format('HH:mm'));
        startTime.add(1, 'hours');
      }
      this.timeList = timeStops;
    }
  }
};
</script>

<style lang="scss" scoped>
  .scheduler {
    width: auto;
    display: flex;
    justify-content: space-between;
    border: 1px solid #999;

    &_column {
      width: 100%;
      border-right: 1px solid #999;

      &:last-child {
        border: 0;
      }

      &-row {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #999;

        &:last-child {
          border: 0;
        }
      }

      &-time {
        min-width: 50px;
        max-width: 50px;
      }
    }
  }
</style>
