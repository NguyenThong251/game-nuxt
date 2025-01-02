<template>
  <DetailMobile :visible="visible" :userName="userInfo.name" :gameDetail="game" :bettingHistoryDetail="bettingHistory"
    :bettingHistoryMapping="bettingHistoryMapping!" @close="$emit('close')" />
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  import { useBettingHistoryDetail } from '../betting-history.model';
  import DetailMobile from './mobile/detail.vue'
  import type { TGame } from '~/types/game';
  import type { TBettingHistory } from '../betting-history.type';

  const props = defineProps<{
    visible: boolean;
    game: TGame;
    bettingHistory: TBettingHistory;
  }>()
  const emit = defineEmits<{
    (e: "close"): void
  }>()

  const authStore = useAuthStore()
  const { userInfo } = storeToRefs(authStore)
  const {
    bettingHistoryMapping
  } = useBettingHistoryDetail(props.game)
</script>