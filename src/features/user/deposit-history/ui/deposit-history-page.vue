<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <DepositHistoryDesktop :deposit-histories="depositHistories" :currentStatus="currentStatus"
      :statusOptions="statusOptions" :created-at="createdAt" @change-status="handleChangeStatus"
      @change-pagination="handleChangePagination" @change-created-at="handleChangeCreatedAt" />
  </div>
  <UserLayoutTransactionHistoryMobile v-else :visible="true">
    <DepositHistoryMobile :deposit-histories="depositHistories" :currentStatus="currentStatus"
      :statusOptions="statusOptions" @change-status="handleChangeStatus" @load-more="handleLoadMore" />
  </UserLayoutTransactionHistoryMobile>

</template>
<script setup lang="ts">
  import { useDepositHistory } from '../deposit-history.model';

  const {
    // State 
    loading,
    currentStatus,
    createdAt,
    depositHistories,

    // Computed 
    statusOptions,

    // Method
    fetchDepositHistory,
    handleChangeStatus,
    handleLoadMore,
    handleChangePagination,
    handleChangeCreatedAt
  } = useDepositHistory()

  fetchDepositHistory({
    page: depositHistories.value.current_page,
    limit: depositHistories.value.per_page,
  })

</script>