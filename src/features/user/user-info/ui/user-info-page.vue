<template>
  <div v-if="$vuetify.display.width > 1024" class="pc">
    <UserInfoDesktop />
  </div>
  <UserInfoMobile v-else :visible="true" />
</template>
<script setup lang="ts">
  import UserInfoDesktop from './user-info-desktop.vue';
  import UserInfoMobile from './user-info-mobile.vue';
</script>