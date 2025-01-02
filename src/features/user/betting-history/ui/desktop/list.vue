<template>
  <v-select :model-value="currentGame" :items="gameList" :item-props="itemProps" label="Trò chơi" variant="outlined"
    density="compact" class="mt-4" @update:model-value="handleChangeGame"></v-select>
  <v-data-table-server class="py-4" :items-per-page="bettingHistory.limit" :headers="headers"
    :items="bettingHistory.list" :page="bettingHistory.page" :items-length="bettingHistory.total"
    :items-per-page-options="[5, 10, 25, 50, 100]" items-per-page-text="Số kết quả trên một trang"
    no-data-text="Không có dữ liệu" @update:options="handleChangePagination">
    <template v-slot:item="{ item }">
      <tr>
        <td>
          <div class="font-bold">
            {{ `${currentGame?.api.api_title} ${currentGame?.name}` }}
          </div>
          <div>{{ item.ag }}</div>
        </td>
        <td>{{ formatDateVN(item.time) }}</td>
        <td>
          <span class="--green">
            {{ formatCurrency(item.bet) }}
          </span>
        </td>
        <td>
          <span :class="item.winloss > 0 ? '--green' : '--red'">
            {{ formatCurrency(item.winloss) }}
          </span>
        </td>
        <td>
          <span :class="item.winloss > 0 ? '--green' : '--red'">
            {{ item.winloss > 0 ? 'Thắng' : 'Thua' }}
          </span>
        </td>
        <td>
          <v-btn variant="outlined" color="primary" class="text-none mt-2" @click="() => handleOpenDetail(item)">
            Chi tiết
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table-server>
</template>
<script setup lang="ts">
  import type { TGame } from '~/types/game';
  import type { TBettingHistory } from '../../betting-history.type';
  import type { TBettingHistoryMapping } from '~/const/betting-history';

  type TProps = {
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
  defineProps<TProps>()

  const emit = defineEmits<{
    (e: 'changePagination', { page, limit }: { page: number, limit: number }): void,
    (e: 'changeGame', game: TGame): void,
    (e: 'openDetail', value: TBettingHistory): void
  }>()
  const { formatCurrency, formatDateVN } = useCommon()

  const headers = [
    { title: 'Scheduler', align: 'start', key: 'scheduler', sortable: false },
    { title: 'Ngày cược', align: 'start', key: 'time', sortable: false },
    { title: 'Tiền cược', align: 'start', key: 'bet', sortable: false },
    { title: 'Kết quả', align: 'start', key: 'winloss', sortable: false },
    { title: 'Trạng thái', align: 'start', key: 'status', sortable: false },
    { title: 'Chi tiết', align: 'start', key: 'detail', sortable: false },
  ] as const

  // Method
  const itemProps = (item: TGame) => {
    return {
      title: item.api.api_title !== item.name ? `${item.api.api_title} ${item.name}` : item.name
    }
  }
  const handleChangePagination = ({ page, itemsPerPage }: { page: number, itemsPerPage: number }) => {
    emit('changePagination', { page, limit: itemsPerPage })
  }
  const handleChangeGame = (game: TGame) => {
    emit('changeGame', game)
  }
  const handleOpenDetail = (item: TBettingHistory) => {
    emit('openDetail', item)
  }
</script>