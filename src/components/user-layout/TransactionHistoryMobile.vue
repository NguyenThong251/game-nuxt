<template>
  <DialogMobile :visible="visible" title="Lịch Sử Giao Dịch" back-to-path="/user">
    <div class="p-4">
      <div class="ele_wrap">
        <div class="ele-item">
          <NuxtLink to="/user/deposit-history" class="block cursor-pointer"
            :class="['takein-money', namePage === PageName.DepositHistory ? 'active' : '']">
            Nạp tiền
          </NuxtLink>
        </div>
        <div class="ele-item">
          <NuxtLink to="/user/withdraw-history" class="block cursor-pointer"
            :class="['takein-money', namePage === PageName.WithdrawHistory ? 'active' : '']">
            Rút tiền
          </NuxtLink>
        </div>
      </div>
      <div class="mt-4">
        <slot></slot>
      </div>
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
  import { PageName } from '~/const';

  defineProps<{ visible: boolean }>()

  // State
  const route = useRoute()

  // Computed
  const namePage = computed(() => route.meta?.name)
</script>
<style scoped>
  .ele_wrap {
    display: flex;
    width: auto;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: space-between;
  }

  .ele-item {
    width: 47%;
    text-align: center;
    margin: 0;
  }

  .takein-money.active {
    width: 100%;
    padding: 9px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #4290ff;
    background: #4290ff;
  }

  .takeout-money {
    width: 100%;
    padding: 9px;
    color: #8a8d96;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #fff;
    background: #fff;
  }

  .takeout-money.active {
    width: 100%;
    padding: 9px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #4290ff;
    background: #4290ff;
  }

  .takein-money {
    width: 100%;
    padding: 9px;
    color: #8a8d96;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #fff;
    background: #fff;
  }
</style>