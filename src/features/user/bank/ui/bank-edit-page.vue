<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <BankEditDesktop :loading="loading" :edit-bank="editBank" @submit="handleEditBank" />
  </div>
  <DialogMobile v-else :visible="true" back-to-path="/user" title="Sửa Thẻ Ngân Hàng">
    <BankEditMobile :loading="loading" :edit-bank="editBank" @submit="handleEditBank" />
  </DialogMobile>
</template>
<script setup lang="ts">
  import BankEditMobile from './mobile/edit.vue'
  import BankEditDesktop from './desktop/edit.vue'
  import { useEditBank } from '../bank.model';
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';

  const { loading, editBank, handleEditBank } = useEditBank()
  const authStore = useAuthStore()
  const configStore = useConfigStore()
  const { lang } = storeToRefs(configStore)

  authStore.fetchMemberBankTypes({ lang: lang.value })
</script>