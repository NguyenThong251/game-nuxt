<template>
  <div class="sp">
    <div class="appNew child-view router sp">
      <div>
        <div class="personal child-view">
          <div class="cube-scroll-wrapper">
            <div class="personalMain">
              <div class="personalMain-user">
                <div class="avatar avatar-lg">
                  <img src="/image/user/avatar.png">
                </div>
                <div class="personalMain-info" bis_skin_checked="1">
                  <h5>{{ userInfo.name }}
                    <div class="level" style="margin-left: 5px;">
                      <img src="/image/user/svip.png">
                      <p>1</p>
                    </div>
                  </h5>
                  <p>{{ formatedMoney }}</p>
                </div>
              </div>
              <div class="personalMain-wallet">
                <NuxtLink :to="RouterPath.UserDeposit" class="personalMain-wallet-operation">
                  <img src="/image/user/recharge.png">
                  <p>Nạp Tiền</p>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserWithdraw" class="personalMain-wallet-operation"
                  style="margin-right: 5px;">
                  <img src="/image/user/withdraw.png">
                  <p>Rút tiền</p>
                </NuxtLink>
              </div>
            </div>
            <div class="personalNav" style="margin-bottom: 10px;">
              <h5 class="personalNav-title">Các chức năng thường được sử dụng</h5>
              <div class="personalNav-nav">
                <NuxtLink :to="RouterPath.UserDepositHistory">
                  <img src="/image/user/transactionRecords.404c0a67.png">
                  <p>Lịch sử nạp</p>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserWithdrawHistory">
                  <img src="/image/user/betRecords.8d1c1936.png">
                  <p>Lịch sử rút</p>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserBettingHistoryList">
                  <img src="/image/user/betRecords.8d1c1936.png">
                  <p>Lịch sử <br>cá cược</p>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserBalanceChange">
                  <img src="/image/user/betRecords.8d1c1936.png">
                  <p>Biến động<br>số dư</p>
                </NuxtLink>
              </div>
            </div>
            <div class="cell">
              <NuxtLink :to="RouterPath.UserInfo" class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/info.png">
                </div>
                <div class="cellItem-title">Thông tin cá nhân</div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </NuxtLink>
              <div class="cellItem cursor-pointer" @click="authStore.handleOpenChangePasswordDialog">
                <div class="cellItem-icon">
                  <img src="/image/user/password.png">
                </div>
                <div class="cellItem-title">Mật khẩu
                  <span>Hoàn thiện thông tin tài khoản, an toàn hơn</span>
                </div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </div>
              <NuxtLink :to="RouterPath.UserBankList" class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/bank.png">
                </div>
                <div class="cellItem-title">Tài khoản ngân hàng
                </div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </NuxtLink>
              <NuxtLink :to="RouterPath.UserGift" class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/bank.png">
                </div>
                <div class="cellItem-title">Nhận quà
                </div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </NuxtLink>

              <!-- <div class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/collect.png">
                </div>
                <div class="cellItem-title">Bộ sưu tập
                  <span>Tất cả những gì bạn yêu thích đều ở đây</span>
                </div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </div> -->
              <!-- <div class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/meassege.png">
                </div>
                <a :href="otherLink" target="_blank" class="cellItem-title">Đăng nhập đại lý</a>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </div> -->
            </div>
            <!-- <div class="cell">
              <div class="cellItem">
                <div class="cellItem-icon">
                  <img src="/image/user/meassege.png">
                </div>
                <div class="cellItem-title">Hộp Thư
                  <span>14</span>
                </div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </div>
            </div> -->
            <div class="cell cursor-pointer" @click="handleSignOut">
              <div class="cellItem">
                <div class="cellItem-title">Đăng xuất</div>
                <img class="arrow" src="/image/user/next.png" width="7px">
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNavBarMobile />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth';
import { RouterPath } from '~/const';

const authStore = useAuthStore()
const { userInfo, formatedMoney } = storeToRefs(authStore)
const { handleSignOut } = useCommon()

const otherLink = ref('')

onMounted(() => {
  if (!window.location.origin.startsWith('http://localhost')) {
    const newSubdomain = 'agc'
    otherLink.value = window.location.origin.replace(/^(https?:\/\/)([^.]+)\./, `$1${newSubdomain}.`)
  }
})
</script>
<style scoped>
@import url('~/assets/css/user-mobile.css');
</style>