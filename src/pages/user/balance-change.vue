<template>
  <BalanceChangePage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.BalanceChange,
    layout: 'user',
    middleware: ['auth']
  })
</script>