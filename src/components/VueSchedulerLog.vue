<template>
  <section v-draggable></section>
</template>

<script>
import draggable from './directives/draggable';

export default {
  name: 'VueSchedulerLog',
  directives: { draggable }
};
</script>

<style lang="scss" scoped>
  section {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    cursor: pointer;
    z-index: 10;

    &:active {
      cursor: grab;
    }
  }
</style>
