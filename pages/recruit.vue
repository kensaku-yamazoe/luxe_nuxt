<template>
  <div class="c-main-content">
    <div class="md:py-60px py-40px c-img-wrap">
      <img src="~/assets/image/img-shampan.png" alt="" class="c-img-inner cover z-0" />
      <div class="c-img-inner bg-tr_black80 z-10" />
      <Headline class="relative z-20" title="Recruit" subtitle="求人情報" usePage />
    </div>

    <section class="c-container md:py-60px py-40px">
      <FadeIn bottom>
        <p class="md:text-lg text-sm text-gray03 mb-4">
          キャスト向け求人情報のテキストが入ります。<br />
          ＊募集要項などを記載してください。<br />
          ＊条件や待遇などを記載してください。
        </p>
      </FadeIn>
      <FadeIn bottom>
        <p class="md:text-lg text-sm text-gray03 mb-4">
          その他求人向け求人情報のテキストが入ります。<br />
          ＊募集要項などを記載してください。<br />
          ＊条件や待遇などを記載してください。
        </p>
      </FadeIn>
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

