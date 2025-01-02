<template>
  <DialogMobile :visible="visible" title="Biến động số dư" back-to-path="/user">
    <div class="row-user-history">
      <div class="payment-history-list">
        <div class="list-sub-tab">
          <div class="sub-tabs">
            <template v-for="operateType in [operateTypeAll, ...operateTypes]" :key="operateType.key">
              <div class="cursor-pointer js-tab-link sub-tab l-list"
                :class="[operateType.key == currentOperateType ? 'is-active' : '',]"
                @click="currentOperateType = operateType.key">
                <span>{{ operateType.value }}</span>
              </div>
            </template>
          </div>
        </div>

        <div class="history-payment-tab-wrapper">
          <div class="all-sub-content js-panel" style="display: block;">
            <div class="det-balance-list">
              <template v-for="item in balanceChanges.data" :key="item.id">
                <div v-if="item.number_type == 1" class="sc-essYiGF dWrirrS txx-item">
                  <div class="tx-header-balance">
                    <div class="header-balance">
                      <p class="balance-title">{{ item.operate_type_text }}</p>
                      <p class="balance-time">Lúc {{ item.updated_at }}</p>
                    </div>
                    <span class="balance-succ">+ {{ item.money }} VND</span>
                  </div>
                  <div class="tx-info-balance">
                    <p>Số dư trước: <span class="balance-pre">{{ item.money_before }} VND</span></p>
                  </div>
                </div>
                <div v-else-if="item.number_type == -1" class="sc-essYiGF dWrirrS txx-item">
                  <div class="tx-header-balance">
                    <div class="header-balance">
                      <p class="balance-title">{{ item.operate_type_text }}</p>
                      <p class="balance-time">Lúc {{ item.updated_at }}</p>
                    </div>
                    <span class="balance-takeout">- {{ item.money }} VND</span>
                  </div>
                  <div class="tx-info-balance">
                    <p>Số dư còn lại: <span class="balance-pre">{{ item.money_after }} VND</span></p>
                  </div>
                </div>
              </template>
              <div class="flex justify-center mt-2">
                <!-- <v-btn type="link" class="text-none" v-if="depositHistories.data?.length < depositHistories?.total"
                  @click="handleLoadMore">Tải thêm</v-btn> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
  import { useBalanceChange } from '../balance-change.model';

  type TProps = {
    visible: boolean;
  }

  defineProps<TProps>()

  const {
    // State
    balanceChanges,
    currentOperateType,
    operateTypes,
    operateTypeAll,

    // Method
  } = useBalanceChange()
</script>
<style scoped>
  @import url('~/assets/css/balance-change-mobile.css');
</style>