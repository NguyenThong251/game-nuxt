<template>
    <div class="infoUSerSP" v-if="isAuthenticated">
        <div class="infoUSerSP_inner">
            <div class="userBox1">
                <div class="userName"><span class="vip">VIP<span>1</span></span>Usename002</div>
                <p class="userAmount">{{ formatedMoney }}</p>
            </div>
            <div class="userBtn">
                <NuxtLink to="/user/withdraw" class="btnMain btnUserNap btn--yellow">RÚT TIỀN</NuxtLink>
            </div>
            <div class="userBtn">
                <NuxtLink to="/user/deposit" class="btnMain btnUserRut btn--green">NẠP TIỀN</NuxtLink>
            </div>

        </div>
    </div>
    <div class="" v-else></div>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const { handleSignOut } = useCommon()
const authStore = useAuthStore()
const { isAuthenticated, userInfo, formatedMoney } = storeToRefs(authStore)
</script>
