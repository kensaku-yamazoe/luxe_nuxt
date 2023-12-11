<template>
  <div class="md:py-60px py-40px">
    <Headline title="Recruit" subtitle="求人情報" usePage />
    <section class="c-container">
      <p class="md:text-lg text-sm text-gray03 mb-4">
        キャスト向け求人情報のテキストが入ります。<br />
        ＊募集要項などを記載してください。<br />
        ＊条件や待遇などを記載してください。
      </p>

      <p class="md:text-lg text-sm text-gray03 mb-4">
        その他求人向け求人情報のテキストが入ります。<br />
        ＊募集要項などを記載してください。<br />
        ＊条件や待遇などを記載してください。
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

