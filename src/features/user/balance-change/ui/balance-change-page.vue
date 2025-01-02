<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <BalanceChangeDesktop />
  </div>
  <BalanceChangeMobile v-else :visible="true" />
</template>
<script setup lang="ts">
  import BalanceChangeMobile from './balance-change-mobile.vue';
  import BalanceChangeDesktop from './balance-change-desktop.vue';
  import { useBalanceChangeStore } from '~/store/balance-change';

  const balanceChangeStore = useBalanceChangeStore()

  balanceChangeStore.fetchBalanceChanges({
    created_at: [
      "2023-01-01 00:00:00",
      new Date().toISOString().slice(0, 19).replace('T', ' ')
    ],
    page: 1,
    limit: 10,
    operate_type: ''
  })
</script>