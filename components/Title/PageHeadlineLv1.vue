<template>
  <h1 class="u-neon-text-pink01">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  @apply relative block w-fit mx-auto md:mb-60px mb-30px md:px-20px px-15px text-center md:text-8xl text-4xl;
  &:before,
  &:after {
    content: "";
    @apply block h-1px bg-white w-20 top-1/2 transform -translate-y-1/2 absolute;
    box-shadow: 0 0 2px #fff, 0 0 10px #f0a, 0 0 21px #f0a, 0 0 42px #f0a, 0 0 82px #f0a, 0 0 92px #f0a, 0 0 102px #f0a, 0 0 151px #f0a;
  }
  &:before {
    @apply right-full;
  }
  &::after {
    @apply left-full;
  }
}
</style>

