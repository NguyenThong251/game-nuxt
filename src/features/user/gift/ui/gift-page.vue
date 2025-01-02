<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <GiftForm :loading="loading" @submit="handleGiveGift" />
  </div>
  <DialogMobile v-else :visible="true" title="Quà tặng" back-to-path="/user">
    <div class="bg-white p-4">
      <GiftForm :loading="loading" @submit="handleGiveGift" />
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
  import { useGift } from '../gift.model';
  import GiftForm from './gift-form.vue';

  const {
    // State
    loading,

    // Method
    handleGiveGift
  } = useGift()
</script>