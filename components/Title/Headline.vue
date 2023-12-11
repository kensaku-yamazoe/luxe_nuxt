<template>
  <div class="md:mb-60px mb-40px">
    <template v-if="usePage">
      <h1 class="text-center text-8xl font-thin u-neon-text-pink01 leading-tight">{{ title }}</h1>
      <p class="before-line pages font-thin u-neon-text-pink01_narrow">{{ subtitle }}</p>
    </template>
    <template v-else>
      <h2 class="text-8xl font-thin u-neon-text-pink01 leading-tight">{{ title }}</h2>
      <p class="before-line font-thin u-neon-text-pink01_narrow">{{ subtitle }}</p>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    usePage: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.before-line {
  @apply flex items-center gap-4;
  &:before,
  &:after {
    content: "";
    @apply block h-1px bg-white;
    box-shadow: 0 0 2px #fff, 0 0 10px #f0a, 0 0 21px #f0a, 0 0 42px #f0a, 0 0 82px #f0a, 0 0 92px #f0a, 0 0 102px #f0a, 0 0 151px #f0a;
  }
  &:before {
    @apply w-30px;
  }
  &:after {
    @apply w-80px;
  }

  &.pages {
    @apply justify-center;
    &:before {
      @apply w-50px;
    }
    &:after {
      @apply w-50px;
    }
  }
}
</style>

