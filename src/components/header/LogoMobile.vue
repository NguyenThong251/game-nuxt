<template>
    <div class="logo">
        <NuxtLink to="/" class="router-link-exact-active router-link-active">
            <img :src="systemConfig.site_logo" alt="logoName" />
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
    import type { TSystemConfig } from '~/features/config/config.type';

    defineProps<{ systemConfig: TSystemConfig }>()
</script>