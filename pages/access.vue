<template>
  <div class="c-main-content">
    <div class="md:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-party.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />
      <Headline class="relative z-20" title="Access" subtitle="アクセス" usePage />
    </div>

    <section class="c-container md:py-60px py-40px">
      <ul>
        <li class="md:text-lg text-sm text-gray03">写真付きで道順を記載しても良さそうです。</li>
        <li class="md:text-lg text-sm text-gray03">（例）</li>
        <li class="md:text-lg text-sm text-gray03">1、長浜駅東口を降ります。</li>
        <li class="md:text-lg text-sm text-gray03">2、国道2号線を東に進みます。</li>
        <li class="md:text-lg text-sm text-gray03">3、徒歩5分ほどのところで右側にラビービルが見えます。＊＊＊が目印です。</li>
        <li class="md:text-lg text-sm text-gray03">4、ビルの3.5階へ上がっていただくと私たちのお店Luxe（ラグゼ）があります。</li>
      </ul>
    </section>

    <section class="md:pb-60px pb-40px">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.023358403037!2d136.26734387633329!3d35.37987664646847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002293cede9f9bb%3A0x17d2fc811f67a2c3!2z44CSNTI2LTAwNTQg5ruL6LOA55yM6ZW35rWc5biC5aSn5a6u55S677yS4oiS77yS!5e0!3m2!1sja!2sjp!4v1699082878539!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div class="c-container pt-30px">
        <p class="md:text-lg text-sm text-gray03">〒526-0054<br />滋賀県長浜市大宮町2-2 ラビータビル3.5階</p>
        <p class="md:text-lg text-sm text-gray03">tel：0000-00-0000</p>
      </div>
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

<style lang="scss" scoped>
iframe {
  filter: invert(100%) hue-rotate(-180deg);
}
</style>

