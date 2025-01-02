<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <WithdrawHistoryDesktop :withdraw-histories="withdrawHistories" :currentStatus="currentStatus"
      :statusOptions="statusOptions" :created-at="createdAt" @change-status="handleChangeStatus"
      @change-pagination="handleChangePagination" @change-created-at="handleChangeCreatedAt" />
  </div>
  <UserLayoutTransactionHistoryMobile v-else :visible="true">
    <WithdrawHistoryMobile :withdraw-histories="withdrawHistories" :currentStatus="currentStatus"
      :statusOptions="statusOptions" @change-status="handleChangeStatus" @load-more="handleLoadMore" />
  </UserLayoutTransactionHistoryMobile>

</template>
<script setup lang="ts">
  import { useWithdrawHistory } from '../withdraw-history.model';

  const {
    // State 
    loading,
    currentStatus,
    createdAt,
    withdrawHistories,

    // Computed 
    statusOptions,

    // Method
    fetchWithdrawHistory,
    handleChangeStatus,
    handleLoadMore,
    handleChangePagination,
    handleChangeCreatedAt
  } = useWithdrawHistory()

  fetchWithdrawHistory({
    page: withdrawHistories.value.current_page,
    limit: withdrawHistories.value.per_page,
  })

</script>