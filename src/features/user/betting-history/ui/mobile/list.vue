<template>
  <DialogMobile :visible="visible" title="Lịch Sử Cược" back-to-path="/user">
    <div class="ticket-history-list">
      <div class="list-sub-tab overflow-scroll">
        <div class="sub-tabs">
          <div v-for="game in gameList" :key="game.id"
            :class="`cursor-pointer sub-tab ${currentGame?.game_code == game.game_code ? 'is-active' : ''} l-list`"
            @click="() => handleChangeGame(game)">
            {{ `${game.api.api_title} ${game.name}` }}
          </div>
        </div>
      </div>
      <div class="history-ticket-tab-wrapper">
        <div class="all-sub-content" style="display: block;">
          <div class="betHis-list">
            <template v-for="item in bettingHistory.list" :key="item?.id">
              <div class="betHis-item">
                <div class="betHis-header">
                  <p class="betHis-name">{{ item.ag }}</p>
                  <ul class="betDetail-result --dice">
                    <li v-for="(face, index) in item.result.facesList" :key="index"
                      class="betDetail-result-item inline-block mr-1">
                      <img :src="`/image/${bettingHistoryMapping?.symbols[face]}`" alt="">
                    </li>
                  </ul>
                  <button class="betHis-more" @click="() => handleOpenDetail(item)">Chi tiết</button>
                </div>
                <div class="betHis-content">
                  <ul class="betHis-info">
                    <li>
                      <span class="betHis-info-cap">Tài khoản:</span>
                      <span class="betHis-info-txt">{{ userName }}</span>
                    </li>
                    <li>
                      <span class="betHis-info-cap">Tiền cược:</span>
                      <span class="betHis-info-txt">
                        {{ formatCurrency(item.bet || 0) }}
                      </span>
                    </li>
                    <li>
                      <span class="betHis-info-cap">Kết quả:</span>
                      <span class="betHis-info-txt">
                        <strong :class="`${item.winloss > 0 ? '--green' : '--red'}`">
                          {{ formatCurrency(item.winloss || 0) }}
                        </strong>
                      </span>
                    </li>
                    <li>
                      <span class="betHis-info-cap">Thời gian:</span>
                      <span class="betHis-info-txt">{{ formatDateVN(item.time) }}</span>
                    </li>
                    <li>
                      <span class="betHis-info-cap">ID:</span>
                      <span class="betHis-info-txt">{{ item.id }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
            <div class="flex justify-center mt-2">
              <v-btn type="link" class="text-none" v-if="bettingHistory?.list?.length < bettingHistory.total"
                @click="handleLoadMore">Tải
                thêm</v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
import type { TGame } from '~/types/game';
import type { TBettingHistory } from '../../betting-history.type';
import type { TBettingHistoryMapping } from '~/const/betting-history';

type TProps = {
  visible: boolean;
  userName: string;
  currentGame: TGame | null;
  gameList: Array<TGame>;
  bettingHistory: {
    limit: number;
    page: number;
    list: Array<TBettingHistory>;
    total: number;
  }
  bettingHistoryMapping: TBettingHistoryMapping | null;
}
const props = defineProps<TProps>()

const emit = defineEmits<{
  (e: 'changeGame', game: TGame): void,
  (e: 'loadMore', { page, limit }: { page: number, limit: number }): void,
  (e: 'openDetail', value: TBettingHistory): void
}>()

const { formatCurrency, formatDateVN } = useCommon()

// Method
const handleChangeGame = (game: TGame) => {
  emit('changeGame', game)
}
const handleLoadMore = () => {
  emit('loadMore', { page: props.bettingHistory.page + 1, limit: props.bettingHistory.limit })
}
const handleOpenDetail = (item: TBettingHistory) => {
  emit('openDetail', item)
}

</script>

<style scoped>
@import url('~/assets/css/betting-history/list-mobile.css');
</style>