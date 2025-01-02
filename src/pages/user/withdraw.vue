<template>
  <WithdrawPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.Withdraw,
    layout: 'user',
    middleware: ['auth']
  })
</script>