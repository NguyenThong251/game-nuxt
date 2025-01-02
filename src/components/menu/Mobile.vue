<template>
  <div class="menu-sp sp">
    <ul class="list">
      <li :class="`item ${$route?.meta?.name === PageName.Hot ? 'is-active' : ''}`">
        <NuxtLink to="/hot">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/hot01.png" alt="">
          </span>
          <span class="text">Hot</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Sport ? 'is-active' : ''}`">
        <NuxtLink to="/sport">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/bong-da.png" alt="">
          </span>
          <span class="text">Thể thao</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Casino ? 'is-active' : ''}`">
        <NuxtLink to="/casino">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/casino.png" alt="">
          </span>
          <span class="text">Casino</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Slot ? 'is-active' : ''}`">
        <NuxtLink to="/slot">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/no-hu.png" alt="">
          </span>
          <span class="text">Nỗ hủ</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Card ? 'is-active' : ''}`">
        <NuxtLink to="/card">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/game-bai.png" alt="">
          </span>
          <span class="text nowrap">Game bài</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Fishing ? 'is-active' : ''}`">
        <NuxtLink to="/fishing">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/ban-ca.png" alt="">
          </span>
          <span class="text">Bắn cá</span>
        </NuxtLink>
      </li>
      <li :class="`item ${$route?.meta?.name === PageName.Txxd ? 'is-active' : ''}`">
        <NuxtLink to="/txxd">
          <span class="img">
            <img src="/image/Mobile/home/menu-left/txxd.png" alt="">
          </span>
          <span class="text">Phổ Biến</span>
        </NuxtLink>
      </li>
      <!-- <li :class="`item ${$route?.meta?.name === PageName.Lottery ? 'is-active' : ''}`">
        <NuxtLink to="/">
          <span class="img"><img src="/image/Mobile/home/menu-left/xo-so.png" alt=""></span>
          <span class="text">Xổ số</span>
        </NuxtLink>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { PageName } from '~/const';

</script>