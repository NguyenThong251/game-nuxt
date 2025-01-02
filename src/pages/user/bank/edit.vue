<template>
  <BankEditPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import BankEditPage from '~/features/user/bank/ui/bank-edit-page.vue';

  definePageMeta({
    name: PageName.BankEdit,
    layout: 'user',
    middleware: ['auth']
  })
</script>