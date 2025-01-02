<template>
  <div class="flex">
    <!-- <v-date-input v-model="createdAt" label="Ngày tạo" persistent-placeholder variant="outlined" density="compact"
      prepend-icon="" prepend-inner-icon="$calendar" multiple="range"
      class="min-w-[280px] max-w-max mr-4"></v-date-input> -->
    <v-select v-model="currentOperateType" :items="[operateTypeAll, ...operateTypes]" item-title="value"
      item-value="key" variant="outlined" density="compact" label="Trạng thái" persistent-placeholder
      class="max-w-max min-w-[220px]"></v-select>
  </div>
  <v-tabs-window v-model="currentOperateType">
    <v-tabs-window-item v-for="operateType in [operateTypeAll, ...operateTypes]" :key="operateType.key"
      :value="operateType.key">
      <v-container fluid class="px-0">
        <v-data-table-server class="py-4" v-model:items-per-page="limit" :items-length="balanceChanges.total"
          :headers="headers" :items="balanceChanges.data" :items-per-page-options="[10, 25, 50, 100]"
          items-per-page-text="Số kết quả trên một trang" no-data-text="Không có dữ liệu"
          @update:options="handleChangePagination"></v-data-table-server>
      </v-container>
    </v-tabs-window-item>
  </v-tabs-window>
</template>
<script setup lang="ts">
  import { useBalanceChange } from '../balance-change.model';

  const headers = [
    // { title: 'Tài khoản', align: 'start', sortable: false, key: '' },
    { title: 'Phân loại', align: 'start', sortable: false, key: 'operate_type_text' },
    { title: 'Thời gian', align: 'start', sortable: false, key: 'updated_at' },
    { title: 'Số dư trước', align: 'start', sortable: false, key: 'money_before' },
    { title: 'Số tiền', align: 'start', sortable: false, key: 'money' },
    { title: 'Mô tả', align: 'start', sortable: false, key: 'description' },
  ] as const

  const {
    // State
    limit,
    createdAt,
    balanceChanges,
    currentOperateType,
    operateTypes,
    operateTypeAll,

    // Method
    handleChangePagination
  } = useBalanceChange()
</script>