<template>
  <div class="brand-three">
    <template v-for="item in aboutList">
      <NuxtLink to="/">{{ item.title }}</NuxtLink>
    </template>
  </div>
</template>
<script setup lang="ts">
  import type { TAbout } from '~/features/config/config.type';

  defineProps<{ aboutList: Array<TAbout> }>()
</script>