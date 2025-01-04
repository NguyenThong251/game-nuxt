<template>
  <!-- <HeaderLanguageSelector :lang="lang" :langObject="langObject" :langList="langList" @change-lang="handleChangeLang" />
  <HeaderLogoDesktop :systemConfig="systemConfig" />
  <AuthLoginDesktop /> -->
  <!-- <header class="header">
    <div class="header01">
      <div class="inner">
        <HeaderLanguageSelector :lang="lang" :langObject="langObject" :langList="langList"
          @change-lang="handleChangeLang" />
        <HeaderLogoDesktop :systemConfig="systemConfig" />
        <AuthLoginDesktop />
      </div>
    </div>
    <div class="header02 pc">
      <div class="inner">
        <HeaderLogoDesktop :systemConfig="systemConfig" />
        <MenuDesktop :categories="categories" />
      </div>
    </div>
    <div class="header03 sp">
      <div class="inner">
        <HeaderLogoMobile :systemConfig="systemConfig" />
        <AuthLoginLinkMobile />
      </div>
    </div>
  </header> -->
  <!-- <header>
    <div class="pc">
      <div class="header01">
        <div class="hlogoWrap"><a href="./" class="hlogo"><img src="/img/logo.svg" alt=""></a><span class="sub">TUT88
            LÀM GIÀU TRONG TẦM TAY BẠN</span></div>
        <div class="hbtn">
          <div class="btnDropdown"><a href="#"><img src="/img/header/hdropdown.png" alt=""></a></div>
          <div class="">
            <ul class="flexCenter">
              <li data-popup="login" class="btnMain btnLogin" @click="() => authStore.handleOpenSignInDialog()">
                ĐĂNG NHẬP
              </li>
              <li data-popup=" register" class="btnMain btnRegister btn--green"
                @click="authStore.handleOpenSignUpDialog">
                ĐĂNG KÝ</li>
              <li><button class="btnMain btnTry btn--bd"><img src="/img/header/htry.png" alt="">CHƠI THỬ</button>
              </li>
            </ul>
          </div>
          <div class="hide">
            <ul class="flexCenter">
              <li>
                <div class="userName"><small>Xin chào!</small><span class="name">cxwh01</span></div>
              </li>
              <li>
                <div class="userAmount">12,400,000 VNĐ</div>
              </li>
              <li>
                <div class="userNotify"><i><img src="/img/icon_bell.svg" alt=""></i><span class="number">1</span>
                </div>
              </li>
              <li><button class="btnMain btnUserNap btn--yellow">RÚT TIỀN</button></li>
              <li><button class="btnMain btnUserRut btn--green">NẠP TIỀN</button></li>
              <li><button class="btnMain btnLogout"><img src="/img/icon_logout.svg" alt="">Đăng Xuất</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header02">
        <nav class="hnav">
          <ul class="flexCenter">
            <li class="active home"><a href="#"><img src="/img/header/hnav_001.png" alt="">Trang Chủ</a></li>
            <li><a href="#"><img src="/img/header/hnav_002.png" alt="">Thể Thao</a></li>
            <li><a href="#"><img src="/img/header/hnav_003.png" alt="">Live Casino</a></li>
            <li><a href="#"><img src="/img/header/hnav_004.png" alt="">Nổ Hủ</a></li>
            <li><a href="#"><img src="/img/header/hnav_005.png" alt="">Game Bài</a></li>
            <li><a href="#"><img src="/img/header/hnav_006.png" alt="">Xổ Số</a></li>
            <li><a href="#"><img src="/img/header/hnav_007.png" alt="">Đá Gà</a></li>
            <li><a href="#"><img src="/img/header/hnav_008.png" alt="">Bắn Cá</a></li>
            <li><a href="#"><img src="/img/header/hnav_009.png" alt="">Khuyến Mãi</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="sp"></div>
  </header> -->

  <!-- HEADER NEW  -->


  <header>
    <div class="pc">
      <div class="header01">
        <!-- <div class="hlogoWrap">
          <a href="./" class="hlogo"><img src="/img/logo.svg" alt="" /></a><span class="sub">TUT88 LÀM GIÀU TRONG
            TẦM TAY BẠN</span>
        </div> -->
        <HeaderLogoDesktop :systemConfig="systemConfig" />
        <div class="hbtn">
          <div class="btnDropdown">
            <a href="#"><img src="/img/header/hdropdown.png" alt="" /></a>
          </div>
          <AuthLoginDesktop />
        </div>
      </div>
      <div class="header02">
        <MenuDesktop :categories="categories" />
        <!-- <nav class="hnav">
          <ul class="flexCenter">
            <li class="active home">
              <a href="#"><img src="/img/header/hnav_001.png" alt="" />Trang
                Chủ</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_002.png" alt="" />Thể
                Thao</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_003.png" alt="" />Live
                Casino</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_004.png" alt="" />Nổ Hủ</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_005.png" alt="" />Game
                Bài</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_006.png" alt="" />Xổ Số</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_007.png" alt="" />Đá Gà</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_008.png" alt="" />Bắn Cá</a>
            </li>
            <li>
              <a href="#"><img src="/img/header/hnav_009.png" alt="" />Khuyến
                Mãi</a>
            </li>
          </ul>
        </nav> -->
      </div>
    </div>
    <div class="sp">
      <!-- <div class="hlogoWrap">
        <a href="./" class="hlogo"><img src="/img/logoSP.png" alt="" /></a><span class="sub">TUT88 LÀM GIÀU TRONG
          TẦM TAY BẠN</span>
      </div> -->
      <HeaderLogoDesktop :systemConfig="systemConfig" />
    </div>
    <div class="marquee">
      <div class="marquee_inner">
        <i class="marquee-ico"><img src="/img/ico_volume.svg" alt="" class="pc" /><img src="/img/ico_volume_black.svg"
            alt="" class="sp" /></i>
        <div class="marquee-txt">
          <p>
            🔥 Khuyến mãi hot thể thao casino hoàn trả 10% KhuWelcome to
            BTC365, the game-changing E Gaming Platform with Casino's Dividend
            for all players! Approaching a 10 millionVND Casino's Dividend for
            all players! 2024 -2025
          </p>
          <p>
            🔥 Khuyến mãi hot thể thao casino hoàn trả 10% KhuWelcome to
            BTC365, the game-changing E Gaming Platform with Casino's Dividend
            for all players! Approaching a 10 millionVND Casino's Dividend for
            all players! 2024 -2025
          </p>
        </div>
      </div>
    </div>
  </header>


</template>
<script setup lang="ts">
import type { TSystemConfig } from '~/features/config/config.type';
import type { LANG } from '~/types/common';
import type { TCategoryGame, TGame } from '~/types/game';
import { useAuthStore } from '~/store/auth';

defineProps<{
  categories: Array<{
    title: string,
    href: string,
    gameType: number,
    data: Array<TGame | TCategoryGame>
  }>,
  lang: LANG,
  langObject: { [key: string]: string }
  langList: Array<{ lang: LANG, title: string }>
  systemConfig: TSystemConfig
}>()

const emit = defineEmits<{
  (e: 'changeLang', lang: LANG): void
}>()

// Method
const handleChangeLang = (lang: LANG) => {
  emit('changeLang', lang)
}


const { handleSignOut } = useCommon()
const authStore = useAuthStore()
const { isAuthenticated, userInfo, formatedMoney } = storeToRefs(authStore)
</script>