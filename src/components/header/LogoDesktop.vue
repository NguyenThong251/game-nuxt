<template>
  <!-- <div class="left">
    <div class="logo pc">
      <NuxtLink to="/">
        <template v-if="systemConfig.site_logo">
          <v-img :src="systemConfig.site_logo" alt="logoName" />
        </template>
<v-img v-else src="/image/desktop/header/logo.png" alt="logoName" />
</NuxtLink>
</div>
</div> -->
<div class="left">
  <div class="logo pc">
    <NuxtLink to="/">
      <template v-if="systemConfig.site_logo">
        <img :src="systemConfig.site_logo" alt="logoName" />
      </template>
      <img v-else src="/image/desktop/header/logo.png" alt="logoName" />
    </NuxtLink>
  </div>
</div>
</template>
<script setup lang="ts">
import type { TSystemConfig } from '~/features/config/config.type';

defineProps<{ systemConfig: TSystemConfig }>()
</script>