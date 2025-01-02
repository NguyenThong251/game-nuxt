<template>
  <v-dialog :model-value="signUpDialogVisible" :fullscreen="$vuetify.display.xs"
    :class="!$vuetify.display.xs ? 'max-w-[700px]' : ''" persistent>
    <v-card>
      <v-card-item style="margin: 0; padding: 4px;">
        <template #append>
          <v-btn icon="$close" variant="text" @click="handleClose"></v-btn>
        </template>
      </v-card-item>
      <v-card-text>
        <div class="text-center">
          <h2 class="text-[24px] font-bold mb-2">Đăng Ký</h2>
          <div class="mb-8 text-sm text-gray-500">Điền thông tin bên dưới để đăng ký tài khoản mới</div>
        </div>
        <v-form fast-fail @submit.prevent="handleSubmit">
          <v-text-field v-model="state.username" :rules="rules.username" label="Tên đăng nhập"
            prepend-inner-icon="mdi-account-outline" variant="outlined" density="compact" />
          <v-text-field v-model="state.name" :rules="rules.name" label="Tên thật"
            prepend-inner-icon="mdi-account-edit-outline" variant="outlined" density="compact" />
          <div class="flex">
            <v-select v-model="state.phonePrefix" variant="underlined" density="compact" class="max-w-max mr-4"
              :items="PhonePrefix"></v-select>
            <v-text-field v-model="state.phone" :rules="rules.phone" prepend-inner-icon="mdi-phone" variant="outlined"
              density="compact" type="number" />
          </div>
          <v-text-field v-model="state.password" :rules="rules.password" label="Mật khẩu"
            prepend-inner-icon="mdi-lock-outline" variant="outlined" density="compact"
            :append-inner-icon="state.passwordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="state.passwordVisible ? 'text' : 'password'"
            @click:append-inner="state.passwordVisible = !state.passwordVisible" />
          <v-text-field v-model="state.confirmPassword" :rules="rules.confirmPassword" label="Xác nhận mật khẩu mới"
            prepend-inner-icon="mdi-lock-check-outline" variant="outlined" density="compact"
            :append-inner-icon="state.confirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="state.confirmPasswordVisible ? 'text' : 'password'"
            @click:append-inner="state.confirmPasswordVisible = !state.confirmPasswordVisible">
          </v-text-field>
          <v-text-field :model-value="invitedCode" prepend-inner-icon="mdi-share-variant-outline" label="Invited code"
            disabled variant="outlined" density="compact" />
          <v-btn :loading="state.loading" color="primary" class="text-none w-full" type="submit" block>Đăng Ký</v-btn>
        </v-form>
        <div class="text-center mt-4">Đã có tài khoản, <NuxtLink
            class="no-underline text-blue-500 hover:underline cursor-pointer" @click="handleOpenSignInDialog">đăng nhập?
          </NuxtLink>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  import { PhonePrefix } from '~/const';
  import { signUpApi } from '~/features/auth/auth.service';
  import { $toast } from '~/hooks/toast';
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';
  import { LANG } from '~/types/common';

  type State = {
    loading: boolean;
    username: string;
    name: string;
    phonePrefix: string;
    phone: string;
    password: string;
    confirmPassword: string;
    passwordVisible: boolean;
    confirmPasswordVisible: boolean;
  }
  const defaultState = () => ({
    loading: false,
    username: '',
    name: '',
    phonePrefix: PhonePrefix[0],
    phone: '',
    password: '',
    confirmPassword: '',
    passwordVisible: false,
    confirmPasswordVisible: false
  })

  const route = useRoute()
  const authStore = useAuthStore()
  const { signUpDialogVisible } = storeToRefs(authStore)
  const { lang } = useConfigStore()
  const config = useRuntimeConfig()

  // State
  const state = reactive<State>(defaultState())
  const rules = {
    username: [
      (value: string) => {
        if (!value) return 'Tên đăng nhập bắt buộc';
        return true;
      }
    ],
    name: [
      (value: string) => {
        if (!value) return 'Họ và tên bắt buộc'
        return true;
      }
    ],
    phone: [
      (value: string) => {
        if (!value) return 'Số điện thoại bắt buộc'
        return true;
      }
    ],
    password: [
      (value: string) => {
        if (!value) return 'Mật khẩu bắt buộc';
        return true;
      }
    ],
    confirmPassword: [
      (value: string) => {
        if (!value) return 'Mật khẩu xác nhận bắt buộc';
        if (value !== state.password) return 'Mật khẩu xác nhận không trùng khớp'
        return true;
      }
    ]
  }

  // Register site domain (current domain)
  const registerSite = typeof window !== 'undefined' ? window.location.origin : '';

  // Computed
  const queryParams = computed(() => route.query)
  const invitedCode = computed(() => (queryParams?.value?.invitedCode || config.public.REGISTER_CODE) as string)

  // Method
  const handleClose = () => {
    authStore.handleCloseSignUpDialog()
  }
  const handleOpenSignInDialog = () => {
    handleClose()
    authStore.handleOpenSignInDialog()
  }
  const handleSignUp = async () => {
    try {
      state.loading = true
      const res = await signUpApi(LANG.VI, {
        invite_code: invitedCode?.value,
        name: state.username,
        password: state.password,
        password_confirmation: state.confirmPassword,
        phone: `${state.phonePrefix}${state.phone}`,
        qk_pwd: '',
        realname: state.name,
        register_site: registerSite,
        key: '',
        captcha: '',
        sms_code: '',
        lang: lang || LANG.VI,
      })
      authStore.loadTokenInfo({
        access_token: res.token,
        expires_at: '',
        expires_in: 3600,
        token_type: ''
      })
      await authStore.getMeInfo(res.token)
      $toast.success('Register successfully!')
      authStore.handleCloseSignUpDialog()
    } catch (error: any) {
      $toast.error(error.message, { autoClose: false })
    }
    state.loading = false
  }
  const handleSubmit = async (event: Event) => {
    const result: any = await event;
    if (!result.valid) return;

    handleSignUp()
  } 
</script>