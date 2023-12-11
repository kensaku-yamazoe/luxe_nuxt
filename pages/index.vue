<template>
  <div>
    <section class="pb-60px">
      <div class="flex items-center h-80vh lg:max-h-600px">
        <div class="flex-1 flex flex-col justify-center items-center">
          <div>
            <h1 class="text-3xl">Luxeのロゴが入ります</h1>
            <p class="text-xl text-gray03">ここにキャッチコピーが入ります</p>
          </div>
        </div>
        <div class="flex-1 h-full">
          <img src="https://picsum.photos/1000/1000" alt="" class="h-full w-full object-cover" />
        </div>
      </div>
    </section>

    <section class="lg:pt-60px pb-60px">
      <div class="c-container">
        <div class="flex lg:flex-row flex-col-reverse items-center lg:max-h-600px">
          <div class="lg:w-1/2 w-full lg:h-full h-300px overflow-hidden">
            <img src="https://picsum.photos/1000/1000" alt="" class="h-full w-full object-cover" />
          </div>
          <div class="lg:w-1/2 w-full lg:px-40px lg:py-0 py-30px">
            <Headline title="About" subtitle="概要" />
            <p class="text-sm text-gray03">
              概要が入ります。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。
            </p>
            <TextLink class="ml-auto mr-0" label="more" to="/about" />
          </div>
        </div>
      </div>
    </section>

    <section class="lg:pt-60px pb-60px bg-gray00">
      <div class="c-container">
        <div class="w-full lg:px-40px lg:py-0 py-30px">
          <Headline title="Price" subtitle="価格" />
          <p class="text-sm text-gray03">価格一覧が入ります。代表的なものだけで、他の項目は詳細ページで見せる形でいいと思います。</p>
          <TextLink class="ml-auto mr-0" label="more" to="/price" />
        </div>

        <section class="c-container">
          <ul class="u-price-list u-neon-border-pink01">
            <li>
              <p class="u-neon-text-pink01">Menu</p>
              <p class="u-neon-text-pink01">Price</p>
            </li>
            <li>
              <p class="u-neon-text-pink01">charge</p>
              <p class="u-neon-text-pink01">¥ 0,000</p>
            </li>
            <li>
              <p class="u-neon-text-pink01">1 drink</p>
              <p class="u-neon-text-pink01">¥ 0,000</p>
            </li>
            <li>
              <p class="u-neon-text-pink01">1 hour</p>
              <p class="u-neon-text-pink01">¥ 00,000</p>
            </li>
            <li>
              <p class="u-neon-text-pink01">1 bottle</p>
              <p class="u-neon-text-pink01">¥ 00,000</p>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <section class="lg:pt-60px pb-60px">
      <div class="c-container">
        <Headline title="Access" subtitle="アクセス" />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.023358403037!2d136.26734387633329!3d35.37987664646847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002293cede9f9bb%3A0x17d2fc811f67a2c3!2z44CSNTI2LTAwNTQg5ruL6LOA55yM6ZW35rWc5biC5aSn5a6u55S677yS4oiS77yS!5e0!3m2!1sja!2sjp!4v1699082878539!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>

    <section class="lg:pt-60px pb-60px">
      <div class="c-container">
        <div class="flex lg:flex-row flex-col-reverse items-center lg:max-h-600px">
          <div class="lg:w-1/2 w-full lg:h-full h-300px overflow-hidden">
            <img src="https://picsum.photos/1000/1000" alt="" class="h-full w-full object-cover" />
          </div>
          <div class="lg:w-1/2 w-full lg:px-40px lg:py-0 py-30px">
            <Headline title="Recruit" subtitle="求人情報" />
            <p class="text-sm text-gray03">
              求人情報のテキストが入ります。ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。<br />
              ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト。
            </p>
            <TextLink class="ml-auto mr-0" label="more" to="/recruit" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Headline from "~/components/Title/Headline.vue";
import TextLink from "~/components/Link/TextLink.vue";

export default {
  layout: "app",
  components: {
    Headline,
    TextLink,
  },
};
</script>

<style lang="scss" scoped>
iframe {
  filter: invert(1);
  -webkit-filter: invert(1);
}
</style>

