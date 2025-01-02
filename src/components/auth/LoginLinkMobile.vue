<template>
    <ul class="right">
        <template v-if="!isAuthenticated">
            <li data-popup="login" class="button login-btn js-popup-link cursor-pointer"
                @click="() => authStore.handleOpenSignInDialog()">
                Đăng Nhập
            </li>
            <li data-popup=" register" class="button register-btn js-popup-link cursor-pointer"
                @click="authStore.handleOpenSignUpDialog">
                Đăng Ký</li>
        </template>
        <UserInfo v-else :user-info="userInfo" :formatedMoney="formatedMoney" @signout="handleSignOut" />
    </ul>
</template>
<script setup lang="ts">
    import { useAuthStore } from '~/store/auth';

    const { handleSignOut } = useCommon()
    const authStore = useAuthStore()
    const { isAuthenticated, userInfo, formatedMoney } = storeToRefs(authStore)
</script>
<style scoped>
    .header .header03 .inner .right li.button {
        display: inline-block;
        padding: 7px 20px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
        color: #5387fd;
    }

    .login-btn {
        background-color: #ffe8ce;
        border: 1px solid #ffd19b;
    }

    .register-btn {
        background-color: #ffffff;
    }

    .button:hover {
        opacity: 0.9;
    }
</style>