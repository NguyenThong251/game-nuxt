<template>
  <div v-if="$vuetify.display.width > 1024" class="pc deposit-success">
    Bạn đã nạp tiền thành công
  </div>
  <UserLayoutTransactionSuccessMobile v-else :visible="true">
    Bạn đã nạp tiền thành công
  </UserLayoutTransactionSuccessMobile>
</template>

<style scoped>
.pc.deposit-success {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-size: 16px;
}
</style>