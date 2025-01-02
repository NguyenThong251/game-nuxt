<template>
  <BankListPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import BankListPage from '~/features/user/bank/ui/bank-list-page.vue';

  definePageMeta({
    name: PageName.BankList,
    layout: 'user',
    middleware: ['auth']
  })
</script>