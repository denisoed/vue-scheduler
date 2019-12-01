<template>
  <section class="scheduler">
    <div class="scheduler_time-column">
      <div class="scheduler_time-column-row" v-for="(time, i) in timeList" :key="i">{{ time }}</div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'VueScheduler',
  data() {
    return {
      timeList: []
    };
  },
  created() {
    this.generateTimeList('07:00', '23:00');
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
