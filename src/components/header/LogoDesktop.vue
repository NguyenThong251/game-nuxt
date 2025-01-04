<template>

  <!-- <div class="left">
  <div class="logo pc">
    <NuxtLink to="/">
      <template v-if="systemConfig.site_logo">
        <img :src="systemConfig.site_logo" alt="logoName" />
      </template>
<img v-else src="/image/desktop/header/logo.png" alt="logoName" />
</NuxtLink>
</div>
</div> -->
  <div class="hlogoWrap">
    <NuxtLink to="/" class="hlogo"><img :src="systemConfig.site_logo" alt="logoName" /></NuxtLink><span class="sub">T79
      LÀM GIÀU
      TRONG
      TẦM TAY BẠN</span>
  </div>
</template>
<script setup lang="ts">
import type { TSystemConfig } from '~/features/config/config.type';

defineProps<{ systemConfig: TSystemConfig }>()
</script>