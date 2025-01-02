<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <WithdrawForm :loading="loading" :user-info="authStore?.userInfo" :formatedBalance="authStore.formatedMoney"
      :user-banks="userBanks" @submit="handleWithdraw" />
  </div>
  <UserLayoutTransactionMobile v-else :visible="true">
    <WithdrawForm :loading="loading" :user-info="authStore?.userInfo" :formatedBalance="authStore.formatedMoney"
      :user-banks="userBanks" @submit="handleWithdraw" />
  </UserLayoutTransactionMobile>
</template>
<script setup lang="ts">
  import { useConfigStore } from '~/store/config';
  import { useWithdraw } from '../withdraw.model';
  import { useAuthStore } from '~/store/auth';
  import WithdrawForm from './withdraw-form.vue'

  const { lang } = useConfigStore()
  const authStore = useAuthStore()
  const {
    // State
    loading,

    // Computed
    userBanks,

    // Method
    handleWithdraw
  } = useWithdraw()

  authStore.fetchMemberBanks({ lang: lang })
</script>
<style scoped></style>