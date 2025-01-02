<template>
  <div class="pc">
    <!-- <NuxtLayout name="default">
      <div class="inner" style="padding: 20px">
        <div class="re-bg"></div>
        <div class="main-user__row">
          <div class="main-user__left">
            <div class="box01">
              <div class="content">
                <p class="avatar">
                  <v-img src="https://cdn.vuetifyjs.com/images/john.png" alt="" />
                </p>
                <p class="name">{{ userInfo.name }}</p>
              </div>
            </div>

            <div class="moneyTrading">
              <NuxtLink :to="RouterPath.UserDeposit" class="deposit deposit--naptien">
                <div :class="`item el-menu-item account ${currentTab === PageName.Deposit ? 'is-active' : ''}`">
                  <div class="depositImg"></div>
                  <div class="text">Nạp Tiền</div>
                </div>
              </NuxtLink>
              <NuxtLink :to="RouterPath.UserWithdraw" class="deposit deposit--ruttien">
                <div
                  :class="`withdraw item el-menu-item account ${currentTab === PageName.Withdraw ? 'is-active' : ''}`">
                  <div class="withdrawImg"></div>
                  <div class="text">Rút tiền</div>
                </div>
              </NuxtLink>
            </div>
            <div class="row01 menu-area">
              <ul class="tablink">
                <li :class="`item el-menu-item account ${$route.name === PageName.UserInfo ? 'is-active' : ''}`"
                  @click="() => handleNavigateTo(RouterPath.UserInfo)">
                  <span class="icon">
                    <img src="/image/user/icon01.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Thông tin cá nhân</span>
                </li>

                <li :class="`item el-menu-item account ${$route.name === PageName.BankList ? 'is-active' : ''}`"
                  @click="() => handleNavigateTo(RouterPath.UserBankList)">
                  <span class="icon">
                    <img src="/image/user/icon02.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Thẻ ngân hàng</span>
                </li>
                <li :class="`item el-menu-item account ${$route.name === PageName.Favorite ? 'is-active' : ''}`"
                  @click="() => handleNavigateTo(RouterPath.UserFavorite)">
                  <span class="icon">
                    <img src="/image/user/img03.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Bộ sưu tập</span>
                </li>
                <NuxtLink :to="RouterPath.UserDepositHistory"
                  :class="`item el-menu-item account ${$route.name === PageName.DepositHistory ? 'is-active' : ''}`">
                  <span class="icon">
                    <img src="/image/user/icon05.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Lịch sử nạp</span>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserWithdrawHistory"
                  :class="`item el-menu-item account ${$route.name === PageName.WithdrawHistory ? 'is-active' : ''}`">
                  <span class="icon">
                    <img src="/image/user/icon05.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Lịch sử rút</span>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserBalanceChange"
                  :class="`item el-menu-item account ${$route.name === PageName.BalanceChange ? 'is-active' : ''}`">
                  <span class="icon">
                    <img src="/image/user/icon05.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Biến động số dư</span>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserBettingHistoryList"
                  :class="`item el-menu-item account ${$route.name === PageName.BettingHistoryList ? 'is-active' : ''}`">
                  <span class="icon">
                    <img src="/image/user/icon06.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Lịch sử cược</span>
                </NuxtLink>
                <NuxtLink :to="RouterPath.UserGift"
                  :class="`item el-menu-item account ${$route.name === PageName.Gift ? 'is-active' : ''}`">
                  <span class="icon">
                    <img src="/image/user/icon06.png" alt="" width="22" height="22">
                  </span>
                  <span class="text">Nhận quà</span>
                </NuxtLink>

              </ul>
            </div>
          </div>
          <div class="main-user__right content">
            <NuxtPage />
          </div>
        </div>
      </div>
    </NuxtLayout> -->


    <NuxtLayout name="default">
      <main id="content">
        <div class="profile">
          <div class="profile-sidebar">
            <div class="profile__title__logo"><a href="./"><img src="/img/logo.svg" alt="TUT88"></a></div>
            <div class="profile__signout sp">Đăng Xuất <img src="/img/profile/icon_signout.png" alt="icon"></div>
            <div class="profile-user">
              <div class="user-row1">
                <p class="user__tag">VIP1</p>
                <p class="user__username">Usenguyen000</p>
              </div>
              <div class="user__balance sp">
                <div class="user__balance__ttl">Số Dư</div>
                <div class="user__balance__money"><span class="change"><img src="/img/profile/icon_change.png"
                      alt="icon"></span>135,000,000,00</div>
              </div>
              <div class="user__introcode">Mã Giới Thiệu:<span class="code">3454677</span><span class="icon"><img
                    src="/img/profile/icon_copy.png" alt="icon"></span></div>
              <div class="user__mail new sp"><a href="#"><img src="/img/profile/icon_mail.png" alt="icon">Hộp
                  Thư</a></div>
            </div>
            <ul class="about__money sp">
              <li><a href="">RÚT TIỀN</a></li>
              <li><a href="">NẠP TIỀN</a></li>
            </ul>
            <div class="account">
              <h2 class="account__h2">Tài Khoản</h2>
              <ul class="account__list">
                <li><a href="hop-thu.html"><img src="/img/profile/icon_mail.png" alt="icon">Hộp Thư</a></li>
                <li><a class="active" href="thong-tin-ca-nhan.html"><img src="/img/profile/icon_user.png"
                      alt="icon">Thông Tin Cá Nhân</a></li>
                <li><a href="the-ngan-hang.html"><img src="/img/profile/icon_bank.png" alt="icon">Thẻ Ngân
                    Hàng</a></li>
                <li><a href="vi-tien-usdt.html"><img src="/img/profile/icon_wallet.png" alt="icon">Ví tiền
                    USDT</a></li>
              </ul>
            </div>
            <div class="history">
              <h2 class="history__h2">Lịch Sử</h2>
              <ul class="history__list">
                <li><a href="lich-su-khuyen-mai.html"><img src="/img/profile/icon_gift.png" alt="icon">Lịch Sử
                    Khuyến Mãi</a></li>
                <li><a href="lich-su-cuoc.html"><img src="/img/profile/icon_bet.svg" alt="icon">Lịch Sử Cược</a>
                </li>
                <li><a href="lich-su-nap-tien.html"><img src="/img/profile/icon_deposit.svg" alt="icon">Lịch Sử
                    Nạp Tiền</a></li>
                <li><a href="lich-su-rut-tien.html"><img src="/img/profile/icon_withdraw.svg" alt="icon">Lịch Sử
                    Rút Tiền</a></li>
              </ul>
            </div>
          </div>
          <div class="profile-content">

            <NuxtPage />
          </div>

          <div class="profile-promotion">
            <h2 class="profile-promotion__title">kHUYẾN MÃI</h2>
            <ul class="profile-promotion__banner">
              <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
              <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
              <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
              <li><a href="#"><img src="/img/profile/banner.png" alt="banner"></a></li>
            </ul>
            <p class="profile-promotion__btn"><a href="#">Xem Tất Cả</a></p>
          </div>
        </div>
        <!-- <ul class="fixed-bottom">
          <li><a href="./"><img src="assets/img/profile/icon_home.png" alt="icon">Trang Chủ</a></li>
          <li><a href="#"><img src="assets/img/profile/icon_vip.png" alt="icon">VIP</a></li>
          <li><a href="#"><img src="assets/img/profile/icon_gift2.png" alt="icon">Ưu Đãi</a></li>
          <li><a href="#"><img src="assets/img/profile/icon_support.png" alt="icon">Hỗ Trợ</a></li>
          <li class="personal"><img src="assets/img/profile/icon_setting.png" alt="icon">Cá Nhân</li>
        </ul> -->
      </main>

    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import { PageName, RouterPath } from '~/const';
import { useAuthStore } from '~/store/auth';

// State
const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { userInfo } = storeToRefs(authStore)
const otherLink = ref('')

// Computed
const currentTab = computed(() => route?.meta?.name || PageName.UserInfo)

// Method
const handleNavigateTo = (path: string) => {
  router.push(path)
}

onMounted(() => {
  if (!window.location.origin.startsWith('http://localhost')) {
    const newSubdomain = 'agc'
    otherLink.value = window.location.origin.replace(/^(https?:\/\/)([^.]+)\./, `$1${newSubdomain}.`)
  }
})
</script>
<style scoped>
/* @import url('~/assets/css/user-desktop.css'); */
@import url('~/assets/cssnew/profile.css');

.content {
  background: #fff;
  padding: 20px;
  border-radius: 6px;
}
</style>