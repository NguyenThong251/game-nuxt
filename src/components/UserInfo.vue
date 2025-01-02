<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-chip v-bind="props" link pill variant="tonal" append-icon="mdi-menu-down" class="user-chip">
        <v-avatar start>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-avatar>
        <div class="user-info">
          <span class="user-name">
            {{ userInfo.name }}</span>
          <span class="user-money">{{ formatedMoney }}</span>
        </div>
      </v-chip>
    </template>
    <v-list>
      <v-list-item>
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon01.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Số dư ví</span>
          </div>
        </template>
        <template #subtitle>
          <span style="margin-left: 24px; font-size: 20px; color: #4b88d6;">
            {{ formatedMoney }}
          </span>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <template #title>
          <NuxtLink to="/user/deposit" class="flex cursor-pointer text-black">
            <img src="/image/desktop/header/icon02.png" width="20" />
            <span style="line-height: normal; margin-left: 4px;">Nạp tiền</span>
          </NuxtLink>
        </template>
      </v-list-item>
      <v-list-item rounded="xl">
        <template #title>
          <NuxtLink to="/user/withdraw" class="flex cursor-pointer text-black">
            <img src="/image/desktop/header/icon03.png" width="20" />
            <span style="line-height: normal; margin-left: 4px;">Rút tiền</span>
          </NuxtLink>
        </template>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <template #title>
          <NuxtLink to="/user/info" class="flex cursor-pointer text-black">
            <img src="/image/desktop/header/icon04.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Thông tin cá nhân</span>
          </NuxtLink>
        </template>
      </v-list-item>
      <v-list-item @click="$emit('signout')">
        <template #title>
          <div class="flex cursor-pointer">
            <img src="/image/desktop/header/icon05.png" width="22" />
            <span style="line-height: normal; margin-left: 4px;">Đăng xuất</span>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script setup lang="ts">
  import type { TMe } from '~/types/auth';

  defineProps<{ userInfo: TMe, formatedMoney: string }>()
  defineEmits<{
    (e: 'signout'): void
  }>()
</script>
<style scoped>
  .user-chip {
    display: flex;
    align-items: center;
    padding: 8px;
    background-color: #5478a0;
    color: #fff;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }

  .user-money {
    margin-top: -4px;
    color: #ffd700;
    font-weight: bold;
  }

  .header .v-chip {
    --v-chip-height: 34px;
  }
</style>