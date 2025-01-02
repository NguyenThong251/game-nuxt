<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <DepositForm :loading="loading" @submit="handleDeposit" />
  </div>
  <UserLayoutTransactionMobile v-else :visible="true">
    <DepositForm :loading="loading" @submit="handleDeposit" />
  </UserLayoutTransactionMobile>
</template>
<script setup lang="ts">
  import DepositForm from './deposit-form.vue';
  import { useDeposit } from '../deposit.model';

  const {
    // State
    loading,

    // Method
    handleDeposit
  } = useDeposit()

</script>
<style scoped></style>