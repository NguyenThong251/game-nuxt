<template>
  <DialogMobile :visible="visible" back-to-path="/user"
    :title="namePage === PageName.DepositSuccess ? 'Nạp tiền thành công' : 'Nạp tiền thất bại'">
    <div class="p-4 bg-white h-auto">
      <div class="info">
        <p class="avatar">
          <img src="https://cdn.vuetifyjs.com/images/john.png" alt="">
        </p>
        <div class="box">
          <h2 class="name">{{ userInfo.name }}</h2>
          <p class="price">
            <span class="number">{{ formatedMoney }}</span>
            <i class="fas fa-sync-alt" style="margin-left: 6px;"></i>
          </p>
        </div>
      </div>
      <div class="row01">
        <NuxtLink to="/user/deposit" :class="`item ${namePage === PageName.Deposit ? 'is-active' : ''}`">
          Nạp tiền
        </NuxtLink>
        <NuxtLink to="/user/withdraw" :class="`item ${namePage === PageName.Withdraw ? 'is-active' : ''}`">
          Rút tiền
        </NuxtLink>
        <NuxtLink to="/user/deposit-history" :class="`item ${namePage === PageName.DepositHistory ? 'is-active' : ''}`">
          Lịch sử nạp
        </NuxtLink>
        <NuxtLink to="/user/withdraw-history"
          :class="`item ${namePage === PageName.WithdrawHistory ? 'is-active' : ''}`">
          Lịch sử rút
        </NuxtLink>
      </div>
      <div class="content mt-8 sp deposit-success">
        <slot></slot>
      </div>
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import { useAuthStore } from '~/store/auth';

  defineProps<{ visible: boolean }>()

  // State
  const route = useRoute()
  const { userInfo, formatedMoney } = useAuthStore()

  // Computed
  const namePage = computed(() => route.meta?.name)
</script>
<style scoped>
  .info {
    padding: 15px 0;
    display: flex;
    align-items: center;
  }

  .info .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 8px;
  }

  .info .avatar img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .info .box .name {
    font-size: 14px;
    font-weight: bold;
  }

  .info .box .price {
    margin-top: 3px;
  }

  .info .box .price .number {
    font-size: 18px;
  }

  .row01 {
    display: flex;
    background-color: #fff;
    padding: 5px 0;
  }

  .row01 .item {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #000;
    font-weight: 500;
    /* border-right: 1px solid #ccc; */
  }

  .row01 .item:last-child {
    border-right: none;
  }

  .row01 .item.is-active {
    background: linear-gradient(270deg, #0982fe, #64b7ff);
    color: #fff;
    border-radius: 5px;
    border-right: none;
  }
  .sp.deposit-success {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>