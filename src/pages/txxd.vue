<template>
  <TxxdPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import TxxdPage from '~/features/txxd/ui/txxd-page.vue';

  definePageMeta({
    name: PageName.Txxd
  })
</script>