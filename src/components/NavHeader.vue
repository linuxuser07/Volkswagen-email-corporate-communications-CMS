<template>
  <div class="shadow-heavy bg-surface w-full sticky inset-x-0 top-0 z-3 py-1">
    <div class="container p-4 md:px-6 flex items-center">
      <img :src="leftIcon" class="mr-4 w-5 w-5" @click="$emit('leftIconClicked')" :alt="leftIconAlt" />
      <div class="text-primary h2-mobile lg:display-1">{{ headerText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  props: {
    headerText: String,
    leftIcon: String,
    leftIconAlt: String
  }
};
</script>
