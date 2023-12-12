<template>
  <nuxt-link :to="to" class="u-link u-neon-text-pink01_narrow">{{ label }}</nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.u-link {
  @apply text-lg font-thin underline w-fit block;
}
</style>

