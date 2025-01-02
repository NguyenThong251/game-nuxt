<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <BankCreateDesktop :loading="loading" @submit="handleCreateBank" />
  </div>
  <DialogMobile v-else :visible="true" back-to-path="/user" title="Tạo Thẻ Ngân Hàng">
    <BankCreateMobile :loading="loading" @submit="handleCreateBank" />
  </DialogMobile>
</template>
<script setup lang="ts">
  import BankCreateMobile from './mobile/create.vue'
  import BankCreateDesktop from './desktop/create.vue'
  import { useCreateBank } from '../bank.model';
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';

  const { loading, handleCreateBank } = useCreateBank()
  const authStore = useAuthStore()
  const configStore = useConfigStore()
  const { lang } = storeToRefs(configStore)

  authStore.fetchMemberBankTypes({ lang: lang.value })
</script>