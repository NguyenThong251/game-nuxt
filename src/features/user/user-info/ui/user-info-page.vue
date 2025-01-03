<template>
  <!-- <div v-if="$vuetify.display.width > 1024" class="pc">
  </div>
  <UserInfoMobile v-else :visible="true" /> -->
  <UserInfoDesktop />
</template>
<script setup lang="ts">
import UserInfoDesktop from './user-info-desktop.vue';
import UserInfoMobile from './user-info-mobile.vue';
</script>