<template>

  <ul class="flink02">
    <template v-for="item in aboutList">
      <li>
        <NuxtLink to="/">{{ item.title }}</NuxtLink>
      </li>
    </template>
  </ul>
</template>
<script setup lang="ts">
import type { TAbout } from '~/features/config/config.type';

defineProps<{ aboutList: Array<TAbout> }>()
</script>