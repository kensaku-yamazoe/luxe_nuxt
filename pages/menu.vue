<template>
  <div class="c-main-content">
    <div class="md:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-bottles02.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />
      <Headline class="relative z-20" title="Menu" subtitle="メニュー" usePage />
    </div>

    <section class="c-container md:py-60px py-40px">
      <ul class="u-price-list u-neon-border-pink01">
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01 md:!text-4xl !text-3xl">Menu</p>
            <p class="u-neon-text-pink01 md:!text-4xl !text-3xl">Price</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">charge</p>
            <p class="u-neon-text-pink01">¥ 0,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">1 drink</p>
            <p class="u-neon-text-pink01">¥ 0,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">1 hour</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">1 bottle</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">******</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">******</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">******</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">******</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
        <FadeIn>
          <li>
            <p class="u-neon-text-pink01">******</p>
            <p class="u-neon-text-pink01">¥ 00,000</p>
          </li>
        </FadeIn>
      </ul>
      <div class="max-w-600px mx-auto mt-10px">
        <p class="text-xs text-right u-neon-text-pink01_narrow">※価格は全て税込表示となります。</p>
      </div>
    </section>
  </div>
</template>

<script>
import Headline from "~/components/Title/Headline.vue";
import FadeIn from "~/components/Animation/FadeIn.vue";

export default {
  components: {
    Headline,
    FadeIn,
  },
};
</script>

