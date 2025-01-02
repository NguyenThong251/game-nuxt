<template>
  <DepositSuccessPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.DepositSuccess,
    layout: 'user',
    middleware: ['auth']
  })
</script>