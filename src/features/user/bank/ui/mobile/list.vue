<template>
  <div class="py-2 px-4">
    <div v-for="bank in userBanks" class="bank-card">
      <div class="absolute top-5 left-[70px] max-w-[calc(100%-182px)]">
        <p class="font-bold">{{ bank?.bank_type_text }}</p>
        <p class="text-gray-200">{{ bank?.bank_address }}</p>
        <p>{{ bank?.card_no }}</p>
      </div>
      <div class="absolute top-5 right-[12px]">
        <v-btn variant="outlined" class="text-none" @click="$router.push(`/user/bank/edit?id=${bank.id}`)">
          Sửa đổi
        </v-btn>
      </div>
    </div>
    <v-btn color="primary" class="w-full text-none mt-2 mb-4" @click="$router.push('/user/bank/create')">
      Tạo Tài Khoản
    </v-btn>
  </div>
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';

  const authStore = useAuthStore()
  const { userBanks } = storeToRefs(authStore)

</script>
<style scoped>
  .bank-card {
    padding: 20px;
    margin-top: 10px;
    background: #fff;
    width: 100%;
    height: 141px;
    border-radius: 18px;
    background-position: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #fff;
    margin-bottom: .4rem;
    overflow: hidden;
    background-color: #f9f9f9;
    background-image: url(/image/bank-image/bank_bg.png);

    display: block;
    position: relative;
  }
</style>