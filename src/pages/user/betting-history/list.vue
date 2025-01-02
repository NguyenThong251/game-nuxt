<template>
  <BettingHistoryList />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import BettingHistoryList from '~/features/user/betting-history/ui/list-page.vue';

  definePageMeta({
    name: PageName.BettingHistoryList,
    layout: 'user',
    middleware: ['auth']
  })
</script>