<template>
  <div class="shadow-heavy bg-surface sticky inset-x-0 top-0 z-3 py-1">
    <div class="container px-4 md:px-6">
      <BaseStepperCircle :steps="steps" :current-step="step" :options="options"></BaseStepperCircle>
    </div>
  </div>
</template>

<script>
import BaseStepperCircle from '@/components/BaseStepperCircle.vue';

export default {
  name: 'StepperHeader',
  components: { BaseStepperCircle },
  props: {
    step: Number,
    steps: Array,
    options: Object
  }
};
</script>
