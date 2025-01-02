<template>
  <div class="sp">
    <nav class="navBar-bottom">
      <NuxtLink to="/" class="navBar-item">
        <p class="img">
          <img alt="navBarIcon"
            :src="route.meta.name === PageName.Home ? '/image/Mobile/footer/home-active.png' : '/image/Mobile/footer/home-deactive.png'">
        </p>
        <p>Trang chủ</p>
      </NuxtLink>
      <NuxtLink to="/promotion" class="navBar-item">
        <p class="img">
          <img alt="navBarIcon"
            :src="route.meta.name === PageName.Promotion ? '/image/Mobile/footer/bt-uudai1.png' : '/image/Mobile/footer/bt-uudai2.png'">
        </p>
        <p>Ưu đãi</p>
      </NuxtLink>
      <NuxtLink to="/hot" class="navBar-item">
        <p class="img">
          <img alt="navBarIcon" src="/image/Mobile/footer/bt-hotgame.png">
        </p>
        <p>Hot game</p>
      </NuxtLink>
      <button class="navBar-item" @click="handleOpenChat">
        <p class="img">
          <img alt="navBarIcon" src="/image/Mobile/footer/bt-hotro2.png">
        </p>
        <p>Hỗ Trợ</p>
      </button>
      <button class="navBar-item"
        @click="isAuthenticated ? $router.push('/user') : authStore.handleOpenSignInDialog(() => $router.push('/user'))">
        <p class="img">
          <img alt="navBarIcon"
            :src="route.meta.name === PageName.UserHome ? '/image/Mobile/footer/bt-cuatoi1.png' : '/image/Mobile/footer/bt-cuatoi2.png'">
        </p>
        <p>Cá nhân</p>
      </button>
    </nav>
  </div>
</template>
<script setup lang="ts">
  import { PageName } from '~/const';
  import { useAuthStore } from '~/store/auth';

  const route = useRoute()
  const { handleOpenChat } = useCommon()
  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)
</script>