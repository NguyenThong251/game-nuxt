<template>
  <v-overlay :model-value="loading" class="align-center justify-center">
    <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
  </v-overlay>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <ListDesktop :userName="userInfo.name" :bettingHistoryMapping="bettingHistoryMapping" :currentGame="currentGame"
      :gameList="gameList" :bettingHistory="bettingHistory" @change-game="handleChangeGame"
      @change-pagination="handleChangePagination" @open-detail="handleOpenDetail" />
  </div>
  <ListMobile v-else :visible="true" :userName="userInfo.name" :bettingHistoryMapping="bettingHistoryMapping"
    :currentGame="currentGame" :gameList="gameList" :bettingHistory="bettingHistory" @change-game="handleChangeGame"
    @load-more="handleLoadMore" @open-detail="handleOpenDetail" />
  <DetailPage v-if="selectedBettingHistory" :visible="true" :game="currentGame!"
    :betting-history="selectedBettingHistory" @close="handleCloseDetail" />
</template>
<script setup lang="ts">
  import { useBettingHistoryStore } from '~/store/betting-history';
  import { useConfigStore } from '~/store/config';
  import { useBettingHistoryList } from '../betting-history.model';
  import { useAuthStore } from '~/store/auth';
  import ListDesktop from './desktop/list.vue';
  import ListMobile from './mobile/list.vue';
  import DetailPage from './detail-page.vue';

  const authStore = useAuthStore()
  const { userInfo } = storeToRefs(authStore)
  const configStore = useConfigStore()
  const { lang } = storeToRefs(configStore)
  const bettingHistoryStore = useBettingHistoryStore()
  const { loading, gameList, bettingHistory } = storeToRefs(bettingHistoryStore)
  const {
    // State
    currentGame,
    selectedBettingHistory,

    // Computed
    bettingHistoryMapping,

    // Method
    handleChangeGame,
    handleChangePagination,
    handleLoadMore,
    handleOpenDetail,
    handleCloseDetail
  } = useBettingHistoryList()

  bettingHistoryStore.fetchGameList({
    lang: lang.value,
    gameType: '98'
  })
</script>