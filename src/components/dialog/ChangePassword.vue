<template>
  <v-dialog :model-value="changePasswordDialogVisible" :fullscreen="$vuetify.display.xs"
    :class="!$vuetify.display.xs ? 'max-w-[700px]' : ''" persistent>
    <v-card>
      <v-card-item style="margin: 0; padding: 4px;">
        <template #append>
          <v-btn icon="$close" variant="text" @click="handleClose"></v-btn>
        </template>
      </v-card-item>
      <v-card-text>
        <div class="text-center mb-8">
          <h2 class="text-[24px] font-bold mb-2">Đổi Mật Khẩu</h2>
        </div>
        <v-form fast-fail @submit.prevent="handleSubmit">
          <v-text-field v-model="state.currentPassword" :rules="rules.currentPassword" label="Mật khẩu cũ"
            prepend-inner-icon="mdi-lock-outline" variant="outlined" density="compact"
            :append-inner-icon="state.currentPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="state.currentPasswordVisible ? 'text' : 'password'"
            @click:append-inner="state.currentPasswordVisible = !state.currentPasswordVisible" />
          <v-text-field v-model="state.newPassword" :rules="rules.newPassword" label="Mật khẩu mới"
            prepend-inner-icon="mdi-lock-outline" variant="outlined" density="compact"
            :append-inner-icon="state.newPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="state.newPasswordVisible ? 'text' : 'password'"
            @click:append-inner="state.newPasswordVisible = !state.newPasswordVisible" />
          <v-text-field v-model="state.confirmPassword" :rules="rules.confirmPassword" label="Xác nhận mật khẩu mới"
            prepend-inner-icon="mdi-lock-check-outline" variant="outlined" density="compact"
            :append-inner-icon="state.confirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="state.confirmPasswordVisible ? 'text' : 'password'"
            @click:append-inner="state.confirmPasswordVisible = !state.confirmPasswordVisible">
          </v-text-field>
          <v-btn :loading="state.loading" color="primary" class="text-none w-full" type="submit" block>Change
            password</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  import { changePasswordApi } from '~/features/auth/auth.service';
  import { $toast } from '~/hooks/toast';
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';

  type State = {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
    currentPasswordVisible: boolean;
    newPasswordVisible: boolean;
    confirmPasswordVisible: boolean;
    loading: boolean;
  }
  const defaultState = () => ({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    loading: false,
    currentPasswordVisible: false,
    newPasswordVisible: false,
    confirmPasswordVisible: false,
  })

  const authStore = useAuthStore()
  const configStore = useConfigStore()
  const { handleSignOut } = useCommon()

  // State
  const { changePasswordDialogVisible } = storeToRefs(authStore)
  const state = reactive<State>(defaultState())
  const rules = {
    currentPassword: [
      (value: string) => {
        if (!value) return 'Mật khẩu cũ bắt buộc';
        return true;
      }
    ],
    newPassword: [
      (value: string) => {
        if (!value) return 'Mật khẩu mới bắt buộc';
        return true;
      }
    ],
    confirmPassword: [
      (value: string) => {
        if (!value) return 'Mật khẩu xác nhận bắt buộc';
        if (value !== state.newPassword) return 'Mật khẩu xác nhận không trùng khớp'
        return true;
      }
    ]
  }

  // Method
  const resetState = () => {
    state.currentPassword = ''
    state.newPassword = ''
    state.confirmPassword = ''
  }
  const handleClose = () => {
    resetState()
    authStore.handleCloseChangePasswordDialog()
  }
  const handleSubmit = async (event: Event) => {
    const result: any = await event;
    if (!result.valid) return;

    handleChangePassword()
  }
  const handleChangePassword = async () => {
    try {
      const data = await changePasswordApi({ lang: configStore.lang }, {
        oldpassword: state.currentPassword,
        password: state.newPassword,
        password_confirmation: state.confirmPassword
      })
      handleClose()
      handleSignOut()
      authStore.handleOpenSignInDialog()
      setTimeout(() => {
        $toast.success(data.message || 'Đổi mật khẩu thành công!')
      }, 100);
    } catch (error: any) {
      $toast.error(error.message)
    }
  }
</script>