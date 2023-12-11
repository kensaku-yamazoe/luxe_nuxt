<template>
  <div class="md:py-60px py-40px">
    <Headline title="About" subtitle="概要" usePage />
    <section class="c-container">
      <p class="md:text-lg text-sm text-gray03">
        概要分が入ります。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。
      </p>
    </section>
  </div>
</template>

<script>
import Headline from "~/components/Title/Headline.vue";

export default {
  components: {
    Headline,
  },
};
</script>

