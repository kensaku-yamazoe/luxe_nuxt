<template>
  <div>
    <header class="ly-header">
      <nav class="c-container flex items-center justify-between">
        <nuxt-link to="/" class="h-30px block u-logo">
          <img src="~/assets/svg/logo_notext.svg" alt="Luxe（ラグゼ）のロゴ" class="h-full object-contain" />
        </nuxt-link>
        <ul class="lg:flex hidden items-center justify-end gap-4">
          <li><nuxt-link to="/about" class="text-xl font-thin u-neon-text-pink01_narrow">About</nuxt-link></li>
          <li><nuxt-link to="/menu" class="text-xl font-thin u-neon-text-pink01_narrow">Menu</nuxt-link></li>
          <li><nuxt-link to="/access" class="text-xl font-thin u-neon-text-pink01_narrow">Access</nuxt-link></li>
          <li><nuxt-link to="/recruit" class="text-xl font-thin u-neon-text-pink01_narrow">Recruit</nuxt-link></li>
        </ul>

        <button @click="toggleMenu" type="button" class="c-hamburger" :class="{ 'is-open': isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>

    <nav :class="{ 'is-open-menu': isOpen }" class="header-menu-mobile">
      <ul class="lg:hidden">
        <li><nuxt-link @click="closeMenu" to="/" class="font-thin u-neon-text-pink01_narrow">Top</nuxt-link></li>
        <li><nuxt-link @click="closeMenu" to="/about" class="font-thin u-neon-text-pink01_narrow">About</nuxt-link></li>
        <li><nuxt-link @click="closeMenu" to="/menu" class="font-thin u-neon-text-pink01_narrow">Menu</nuxt-link></li>
        <li><nuxt-link @click="closeMenu" to="/access" class="font-thin u-neon-text-pink01_narrow">Access</nuxt-link></li>
        <li><nuxt-link @click="closeMenu" to="/recruit" class="font-thin u-neon-text-pink01_narrow">Recruit</nuxt-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    isOpen(newValue) {
      if (newValue) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.c-hamburger {
  @apply relative w-30px lg:hidden z-50;
  height: 21px;
  span {
    @apply absolute left-1/2 w-full h-1px bg-gray03 transform -translate-x-1/2 transition duration-300 ease-in-out;
    &:nth-child(1) {
      @apply top-0 -translate-y-1/2;
    }
    &:nth-child(2) {
      @apply top-1/2 -translate-y-1/2;
    }
    &:nth-child(3) {
      @apply bottom-0 -translate-y-1/2;
    }
  }
  &.is-open {
    span {
      &:nth-child(1) {
        @apply top-1/2 -translate-y-1/2 rotate-45;
      }
      &:nth-child(2) {
        @apply hidden;
      }
      &:nth-child(3) {
        @apply top-1/2 bottom-auto -translate-y-1/2 -rotate-45;
      }
    }
  }
}

.header-menu-mobile {
  @apply fixed inset-0 z-40 flex flex-col items-center justify-center bg-tr_black80;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  &.is-open-menu {
    @apply opacity-100 visible;
  }
  ul {
    @apply flex flex-col items-center justify-center gap-4;
    li {
      @apply text-2xl;
    }
  }
}
</style>

