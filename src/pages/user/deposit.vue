<template>
  <DepositPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.Deposit,
    layout: 'user',
    middleware: ['auth']
  })
</script>