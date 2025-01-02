<template>
  <SlotPage />
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  definePageMeta({
    name: PageName.Slot
  })
</script>