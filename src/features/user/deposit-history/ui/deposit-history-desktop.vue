<template>
  <div class="flex">
    <!-- <v-date-input :model-value="createdAt" label="Ngày tạo" persistent-placeholder variant="outlined" density="compact"
      prepend-icon="" prepend-inner-icon="$calendar" multiple="range" class="min-w-[280px] max-w-max mr-4"
      @update:model-value="handleChangeCreatedAt"></v-date-input> -->
    <v-select :model-value="currentStatus" label="Trạng thái" class="min-w-[180px] max-w-max" variant="outlined"
      density="compact" :items="statusOptions" item-value="key" item-title="value"
      @update:model-value="handleChangeStatus" />
  </div>
  <v-data-table-server class="py-4" v-model:items-per-page="state.limit" :headers="headers"
    :items="depositHistories.data" :items-length="depositHistories.total" :items-per-page-options="[10, 25, 50, 100]"
    items-per-page-text="Số kết quả trên một trang" no-data-text="Không có dữ liệu"
    @update:options="handleChangePagination"></v-data-table-server>
</template>
<script setup lang="ts">
  import type { TDepositHistories, TDepositHistoryStatus } from '../deposit-history.type';

  type TProps = {
    depositHistories: TDepositHistories;
    statusOptions: Array<TDepositHistoryStatus>;
    currentStatus: string;
    createdAt: Array<string>;
  }
  const props = defineProps<TProps>()

  const emit = defineEmits<{
    (e: 'changeStatus', status: string): void,
    (e: 'changePagination', { page, limit }: { page: number, limit: number }): void,
    (e: 'changeCreatedAt', value: Array<string>): void,
  }>()

  type TState = {
    limit: number;
  }

  const state = reactive<TState>({
    limit: props.depositHistories.per_page || 10,
  })
  const headers = [
    {
      title: 'Số serial',
      align: 'start',
      sortable: false,
      key: 'bill_no',
    },
    { title: 'Ngày', key: 'created_at', align: 'start', sortable: false, },
    { title: 'Số tiền', key: 'money', align: 'start', sortable: false, },
    { title: 'Trạng thái', key: 'status_text', align: 'start', sortable: false, },
    { title: 'Nguyên nhân', key: 'fail_reason', align: 'start', sortable: false, },
  ] as const

  // Method
  const handleChangeStatus = (status: string) => {
    emit('changeStatus', status)
  }
  const handleChangePagination = ({ page, itemsPerPage }: { page: number, itemsPerPage: number }) => {
    emit('changePagination', { page, limit: itemsPerPage })
  }
  const handleChangeCreatedAt = (value: any) => {
    emit('changeCreatedAt', value)
  }
</script>