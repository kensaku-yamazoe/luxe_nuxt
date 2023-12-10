<template>
  <div>
    <Headline title="Access" subtitle="アクセス" usePage />
    <section class="c-container pb-40px">
      <p class="md:text-lg text-sm text-gray03">〒526-0054<br />滋賀県長浜市大宮町２−２</p>
      <p class="md:text-lg text-sm text-gray03">tel：0000-00-0000</p>
    </section>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.023358403037!2d136.26734387633329!3d35.37987664646847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6002293cede9f9bb%3A0x17d2fc811f67a2c3!2z44CSNTI2LTAwNTQg5ruL6LOA55yM6ZW35rWc5biC5aSn5a6u55S677yS4oiS77yS!5e0!3m2!1sja!2sjp!4v1699082878539!5m2!1sja!2sjp"
      width="100%"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
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
  filter: invert(1);
  -webkit-filter: invert(1);
}
</style>

