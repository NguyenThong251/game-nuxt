<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <BankListDesktop />
  </div>
  <DialogMobile v-else :visible="true" back-to-path="/user" title="Quản Lý Thẻ Ngân Hàng">
    <BankListMobile />
  </DialogMobile>
</template>
<script setup lang="ts">
  import BankListMobile from './mobile/list.vue'
  import BankListDesktop from './desktop/list.vue'
  import { useAuthStore } from '~/store/auth';
  import { useConfigStore } from '~/store/config';

  const authStore = useAuthStore()
  const { lang } = useConfigStore()

  authStore.fetchMemberBanks({ lang: lang })
</script>