<template>
  <BankCreatePage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import BankCreatePage from '~/features/user/bank/ui/bank-create-page.vue';

  definePageMeta({
    name: PageName.BankCreate,
    layout: 'user',
    middleware: ['auth']
  })
</script>