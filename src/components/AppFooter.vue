<template>
  <div>

    <footer>
      <div class="footer_inner">
        <div class="flogo">
          <FooterBrandOne />


        </div>
        <div class="wrap">
          <FooterContent />
          <FooterBrandTwo />
          <FooterContact :about-list="aboutList" />
          <FooterCopyright />

        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { TAbout } from '~/features/config/config.type';

defineProps<{ aboutList: Array<TAbout> }>()
</script>