<template>
  <v-dialog :model-value="signInDialogVisible" :fullscreen="$vuetify.display.xs"
    :class="!$vuetify.display.xs ? 'max-w-[700px]' : ''" persistent>
    <v-card>
      <v-card-item style="margin: 0; padding: 4px;">
        <template #append>
          <v-btn icon="$close" variant="text" @click="handleClose"></v-btn>
        </template>
      </v-card-item>
      <v-card-text :class="['flex-row', !$vuetify.display.xs ? 'flex' : '']">
        <div class="flex-1 mb-[24px]">
          <img :src="systemConfig.site_logo" :class="['w-[120px]', !$vuetify.display.xs ? 'w-[80%]' : '', 'h-auto']"
            alt="logo image" />
        </div>
        <div class="flex-1">
          <p class="text-2xl color-[#343434] font-bold mb-[12px]">Đăng Nhập</p>
          <v-form fast-fail @submit.prevent="handleSignIn">
            <v-text-field label="Tên người dùng" variant="outlined" density="compact" class="mb-[4px]"
              v-model="state.username" :rules="rules.username" />
            <v-text-field label="Mật khẩu" variant="outlined" density="compact" v-model="state.password"
              :rules="rules.password" type="password" />
            <v-btn style="width: 100%;" color="primary" type="submit" block :loading="state.loading">
              Đăng Nhập
            </v-btn>
          </v-form>
          <div style="display: flex; justify-content: space-between; margin-top: 8px; font-size: 12px;">
            <!-- <a href="#" style="color: #0982fe; font-weight: bold;">Quên mật khẩu?</a> -->
            <span></span>
            <div class="cursor-pointer" style="color: #0982fe; font-weight: bold;" @click="handleOpenSignUp">Đăng ký
            </div>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';
  import { LANG } from '~/types/common';

  type State = {
    username: string;
    password: string;
    loading: boolean;
  }
  const defaultState = () => ({
    username: '',
    password: '',
    loading: false
  })

  const authStore = useAuthStore()
  const configStore = useConfigStore()

  // State
  const { systemConfig } = storeToRefs(configStore)
  const { signInDialogVisible } = storeToRefs(authStore)
  const state = reactive<State>(defaultState())
  const rules = {
    username: [
      (value: string) => {
        if (!value) return 'Tên đăng nhập bắt buộc';
        return true;
      }
    ],
    password: [
      (value: string) => {
        if (!value) return 'Mật khẩu bắt buộc';
        return true
      }
    ]
  }

  // Method
  const resetState = () => {
    state.username = ''
    state.password = ''
  }
  const handleClose = () => {
    resetState()
    authStore.handleCloseSignInDialog()
  }
  const handleSignIn = async () => {
    if (!state.username || !state.password) {
      return;
    }
    try {
      state.loading = true
      await authStore.signIn({
        lang: configStore.lang || LANG.VI,
        username: state.username,
        password: state.password
      })
      handleClose()
    } catch (error) { }
    state.loading = false
  }
  const handleOpenSignUp = () => {
    handleClose()
    authStore.handleOpenSignUpDialog()
  }
</script>