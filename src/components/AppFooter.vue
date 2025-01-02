<template>
  <div>
    <footer class="footer">
      <FooterBrandOne />
      <div class="footer-wrapper-two">
        <div class="inner">
          <FooterBrandTwo />
          <FooterContact :about-list="aboutList" />
        </div>
      </div>
      <FooterCopyright />
    </footer>
    <FooterNavBarMobile />
  </div>
</template>

<script setup lang="ts">
  import type { TAbout } from '~/features/config/config.type';

  defineProps<{ aboutList: Array<TAbout> }>()
</script>