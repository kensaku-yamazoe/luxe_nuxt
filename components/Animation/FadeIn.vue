<template>
  <div ref="observerElement" class="c-fade" :class="{ 'c-right': right, 'c-left': left, 'c-bottom': bottom, 'c-bottom-order': bottomOrder }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    bottomOrder: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        // root: null,
        rootMargin: "-20% 0% -10% 0%",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("-in");
            observer.unobserve(entry.target);
          }
        });
      }, options);

      observer.observe(this.$refs.observerElement);
    },
  },
};
</script>

<style scoped>
/*-------------------------------------------------
	JS scroll animation
---------------------------------------------------*/
/* スクロール用アニメーション c-fadeは必須 (例 class="c-fade c-right" ) */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes rightIn {
  0% {
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes leftIn {
  0% {
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes bottomIn {
  0% {
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leftInBit {
  0% {
    transform: translateX(-1em);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.c-fade,
.c-right,
.c-left,
.c-bottom,
.c-left-bit {
  opacity: 0;
}
.c-fade.-in {
  animation: fadeIn 1s ease forwards;
}

.c-right.-in {
  animation: rightIn 1s ease forwards;
}

.c-left.-in {
  animation: leftIn 1s ease forwards;
}

.c-bottom.-in {
  animation: bottomIn 1s ease forwards;
}

.c-left-bit.-in {
  animation: leftIn 1s ease forwards;
}

/* 順番表示 */
.c-right-order {
  opacity: 0;
}
.c-right-order.-in:nth-child(1) {
  animation: 1s rightIn 0.1s ease forwards;
}
.c-right-order.-in:nth-child(2) {
  animation: 1s rightIn 0.2s ease forwards;
}
.c-right-order.-in:nth-child(3) {
  animation: 1s rightIn 0.3s ease forwards;
}
.c-right-order.-in:nth-child(4) {
  animation: 1s rightIn 0.4s ease forwards;
}
.c-right-order.-in:nth-child(5) {
  animation: 1s rightIn 0.5s ease forwards;
}
.c-right-order.-in:nth-child(6) {
  animation: 1s rightIn 0.6s ease forwards;
}
.c-right-order.-in:nth-child(7) {
  animation: 1s rightIn 0.7s ease forwards;
}
.c-right-order.-in:nth-child(8) {
  animation: 1s rightIn 0.8s ease forwards;
}
.c-right-order.-in:nth-child(9) {
  animation: 1s rightIn 0.9s ease forwards;
}
.c-right-order.-in:nth-child(10) {
  animation: 1s rightIn 1s ease forwards;
}
.c-right-order.-in:nth-child(11) {
  animation: 1s rightIn 1.1s ease forwards;
}
.c-right-order.-in:nth-child(12) {
  animation: 1s rightIn 1.2s ease forwards;
}
.c-right-order.-in:nth-child(13) {
  animation: 1s rightIn 1.3s ease forwards;
}
.c-right-order.-in:nth-child(14) {
  animation: 1s rightIn 1.4s ease forwards;
}
.c-right-order.-in:nth-child(15) {
  animation: 1s rightIn 1.5s ease forwards;
}
.c-right-order.-in {
  animation: rightIn 1s ease forwards;
}

.c-bottom-order {
  opacity: 0;
}
.c-bottom-order.-in:nth-child(1) {
  animation: 1s bottomIn 0.1s ease forwards;
}
.c-bottom-order.-in:nth-child(2) {
  animation: 1s bottomIn 0.2s ease forwards;
}
.c-bottom-order.-in:nth-child(3) {
  animation: 1s bottomIn 0.3s ease forwards;
}
.c-bottom-order.-in:nth-child(4) {
  animation: 1s bottomIn 0.4s ease forwards;
}
.c-bottom-order.-in:nth-child(5) {
  animation: 1s bottomIn 0.5s ease forwards;
}
.c-bottom-order.-in:nth-child(6) {
  animation: 1s bottomIn 0.6s ease forwards;
}
.c-bottom-order.-in:nth-child(7) {
  animation: 1s bottomIn 0.7s ease forwards;
}
.c-bottom-order.-in:nth-child(8) {
  animation: 1s bottomIn 0.8s ease forwards;
}
.c-bottom-order.-in:nth-child(9) {
  animation: 1s bottomIn 0.9s ease forwards;
}
.c-bottom-order.-in:nth-child(10) {
  animation: 1s bottomIn 1s ease forwards;
}
.c-bottom-order.-in:nth-child(11) {
  animation: 1s bottomIn 1.1s ease forwards;
}
.c-bottom-order.-in:nth-child(12) {
  animation: 1s bottomIn 1.2s ease forwards;
}
.c-bottom-order.-in:nth-child(13) {
  animation: 1s bottomIn 1.3s ease forwards;
}
.c-bottom-order.-in:nth-child(14) {
  animation: 1s bottomIn 1.4s ease forwards;
}
.c-bottom-order.-in:nth-child(15) {
  animation: 1s bottomIn 1.5s ease forwards;
}
.c-bottom-order.-in {
  animation: bottomIn 1s ease forwards;
}
</style>

