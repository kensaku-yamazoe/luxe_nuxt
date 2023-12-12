<template>
  <footer class="py-30px">
    <nav class="c-container flex flex-col items-center justify-end">
      <nuxt-link to="/" class="w-80px block u-logo">
        <img src="~/assets/svg/logo.svg" alt="Luxe（ラグゼ）のロゴ" class="w-full object-contain" />
      </nuxt-link>
      <ul class="md:flex items-center justify-end gap-4">
        <li><nuxt-link to="/about" class="block text-center text-xl font-thin u-neon-text-pink01_narrow">About</nuxt-link></li>
        <li><nuxt-link to="/menu" class="block text-center text-xl font-thin u-neon-text-pink01_narrow">Menu</nuxt-link></li>
        <li><nuxt-link to="/access" class="block text-center text-xl font-thin u-neon-text-pink01_narrow">Access</nuxt-link></li>
        <li><nuxt-link to="/recruit" class="block text-center text-xl font-thin u-neon-text-pink01_narrow">Recruit</nuxt-link></li>
      </ul>
    </nav>
    <p class="text-center text-3xs text-gray03 pt-20px">Copyright 2023. Luxe. All Rights Reserved.</p>
  </footer>
</template>

