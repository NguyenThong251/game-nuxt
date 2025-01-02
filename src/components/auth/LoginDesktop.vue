<template>
  <div class="right">
    <div class="topbar-ri pc">
      <template v-if="!isAuthenticated">
        <input v-model="state.username" class="user" placeholder="Tên người dùng" maxlength="16">
        <div class="reg-box">
          <input v-model="state.password" class="password" placeholder="Mật khẩu" type="password" maxlength="20">
          <a class="forget-a" style="display: none;">
            Quên mật khẩu？
          </a>
        </div>
        <div class="login" @click="() => handleSignIn({ username: state.username, password: state.password })">
          Đăng nhập</div>
        <div data-popup="register" class="js-popup-link register" @click="authStore.handleOpenSignUpDialog">Đăng
          ký ngay
        </div>
      </template>
      <span v-else>
        <UserInfo :user-info="userInfo" :formatedMoney="formatedMoney" @signout="handleSignOut" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';
  import { LANG } from '~/types/common';

  type TState = {
    loading: boolean;
    username: string;
    password: string;
  }
  const state = reactive<TState>({
    loading: false,
    username: '',
    password: '',
  })
  const { handleSignOut } = useCommon()
  const configStore = useConfigStore()
  const authStore = useAuthStore()
  const { isAuthenticated, userInfo, formatedMoney } = storeToRefs(authStore)

  // Method
  const handleSignIn = async ({ username, password }: { username: string, password: string }) => {
    try {
      state.loading = true
      await authStore.signIn({ lang: configStore.lang || LANG.VI, username, password })
    } catch (error) { }
    state.loading = false
  }
</script>