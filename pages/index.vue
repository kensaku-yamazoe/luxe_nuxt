<template>
  <div>
    <section>
      <div class="c-img-wrap md:h-80vh h-screen md:max-h-600px">
        <img src="~/assets/image/img-party.png" alt="" class="c-img-inner cover z-0" />
        <div class="c-img-inner bg-tr_black80 z-10" />
        <div class="c-container h-full flex flex-col items-center justify-center relative z-20">
          <h1 ref="traget" class="w-200px">
            <img src="~/assets/svg/logo.svg" alt="Luxe（ラグゼ）" class="w-full object-contain" />
          </h1>
          <FadeIn>
            <p class="text-center text-xl text-gray03">
              滋賀県長浜駅の近くにあるガールズバー<br /><span class="text-white u-neon-text-pink01 text-4xl">Luxe<span class="text-xl">（ラグゼ）</span></span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>

    <section class="lg:py-60px py-40px bg-gray00">
      <div class="c-container">
        <div class="flex lg:flex-row flex-col-reverse items-center lg:max-h-600px">
          <div class="lg:w-1/2 w-full lg:h-full h-300px c-img-wrap">
            <img src="~/assets/image/img-glass.png" alt="" class="c-img-inner cover" />
            <div class="pt-full" />
          </div>
          <div class="lg:w-1/2 w-full lg:px-40px lg:py-0 py-30px">
            <FadeIn>
              <Headline title="About" subtitle="概要" />
            </FadeIn>
            <FadeIn bottom>
              <p class="md:text-lg text-sm text-gray03">
                概要が入ります。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。
              </p>
              <TextLink class="ml-auto mr-0" label="お店の雰囲気を見る" to="/about" />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>

    <section class="lg:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-bottles02.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />

      <div class="c-container relative z-20">
        <div class="w-full lg:px-40px lg:py-0 py-30px">
          <FadeIn>
            <Headline title="Menu" subtitle="メニュー" />
          </FadeIn>

          <FadeIn bottom>
            <p class="md:text-lg text-sm text-gray03">メニューが入ります。このページでは代表的なものだけで、他の項目は詳細ページで見せる形でいいと思います。</p>
            <TextLink class="ml-auto mr-0" label="メニューを詳しく見る" to="/menu" />
          </FadeIn>
        </div>

        <section class="c-container">
          <FadeIn bottom>
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
            </ul>
          </FadeIn>
          <div class="max-w-600px mx-auto mt-10px">
            <p class="text-xs text-right u-neon-text-pink01_narrow">※価格は全て税込表示となります。</p>
          </div>
        </section>
      </div>
    </section>

    <section class="lg:pt-60px pt-40px">
      <div class="c-container">
        <FadeIn>
          <Headline title="Access" subtitle="アクセス" />
        </FadeIn>
        <FadeIn bottom>
          <p class="md:text-lg text-sm text-gray03">〒526-0054<br />滋賀県長浜市大宮町2-2 ラビータビル3.5階</p>
          <p class="md:text-lg text-sm text-gray03 mb-40px">tel：0000-00-0000</p>
        </FadeIn>
      </div>
      <FadeIn>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.023358403037!2d136.26734387633329!3d35.37987664646847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002293cede9f9bb%3A0x17d2fc811f67a2c3!2z44CSNTI2LTAwNTQg5ruL6LOA55yM6ZW35rWc5biC5aSn5a6u55S677yS4oiS77yS!5e0!3m2!1sja!2sjp!4v1699082878539!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </FadeIn>
    </section>

    <section class="lg:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-shampan.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />

      <div class="c-container relative z-20">
        <div class="lg:max-h-600px">
          <FadeIn>
            <Headline title="Recruit" subtitle="求人情報" />
          </FadeIn>
          <FadeIn bottom>
            <p class="md:text-lg text-sm text-gray03">
              求人情報のテキストが入ります。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。
            </p>
            <TextLink class="ml-auto mr-0" label="求人詳細はこちら" to="/recruit" />
          </FadeIn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Headline from "~/components/Title/Headline.vue";
import TextLink from "~/components/Link/TextLink.vue";
import FadeIn from "~/components/Animation/FadeIn.vue";

export default {
  layout: "app",
  components: {
    Headline,
    TextLink,
    FadeIn,
  },
};
</script>

<style lang="scss" scoped>
iframe {
  filter: invert(100%) hue-rotate(-180deg);
}
</style>

