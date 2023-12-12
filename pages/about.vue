<template>
  <div class="c-main-content">
    <div class="md:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-glass.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />
      <Headline class="relative z-20" title="About" subtitle="概要" usePage />
    </div>
    <section class="c-container md:py-60px py-40px">
      <p class="text-center md:text-lg text-sm text-gray03">
        概要が入ります。お客様を迎える上でのお店の雰囲気がわかる写真や、テキストを入れます。<br />
        ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
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

