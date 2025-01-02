<template>
  <DialogMobile :visible="visible" back-to-path="/user" title="Thông tin cơ bản">
    <div class="mt-2 bg-white">
      <div class="p-4 flex justify-between">
        <span class="font-medium">Tên người dùng</span>
        <span>{{ userInfo.name }}</span>
      </div>
      <v-divider />
      <div class="p-4 flex justify-between">
        <span class="font-medium">Tên thật</span>
        <span>{{ userInfo.realname }}</span>
      </div>
    </div>
  </DialogMobile>
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';

  type TProps = {
    visible: boolean;
  }
  defineProps<TProps>()

  const authStore = useAuthStore()
  const { userInfo } = storeToRefs(authStore)
</script>