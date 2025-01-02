<template>
  <div class="tabs">
    <div v-for="status in statusOptions" class="tab-item cursor-pointer"
      :class="[currentStatus === status.key ? 'is-active' : '']" :key="status.key"
      @click="() => handleChangeStatus(status.key)">
      <span>{{ status.value }}</span>
    </div>
  </div>

  <!-- <button class="btn-del-all-trans my-2">Xoá các giao dịch đã hoàn thành</button> -->

  <div v-for="item in depositHistories.data" :key="item.id" class="trans-item">
    <div class="trans-header">
      <label class="trans-date">
        <p>Ngày Gửi: {{ item.created_at }}</p>
      </label>
      <span class="trans-money">{{ item.money }} VND</span>
    </div>
    <div class="trans-info">
      <div class="trans-img">
        <img slot="start" src="/image/user/logo.png">
      </div>
      <label class="trans-des">
        <p>Ngày xử lí: {{ item.updated_at }}</p>
        <p>
          <span :style="{ color: item.status == '2' ? '#2dd36f' : '#ec1a23' }" class="trans-status">
            {{ item.status_text }}
          </span>
        </p>
        <p v-if="item.status == '3'">
          <span style="color: #ec1a23" class="trans-status">
            {{ item.fail_reason }}
          </span>
        </p>
      </label>
    </div>
  </div>
  <div class="flex justify-center mt-2">
    <v-btn type="link" class="text-none" v-if="depositHistories.data?.length < depositHistories?.total"
      @click="handleLoadMore">Tải thêm</v-btn>
  </div>
</template>
<script setup lang="ts">
  import type { TDepositHistories, TDepositHistoryStatus } from '../deposit-history.type';

  type TProps = {
    depositHistories: TDepositHistories;
    statusOptions: Array<TDepositHistoryStatus>;
    currentStatus: string;
  }
  const props = defineProps<TProps>()

  const emit = defineEmits<{
    (e: 'changeStatus', status: string): void,
    (e: 'loadMore'): void,
  }>()

  // Method
  const handleChangeStatus = (status: string) => {
    emit('changeStatus', status)
  }
  const handleLoadMore = () => {
    emit('loadMore')
  }
</script>
<style scoped>
  .tabs {
    display: flex;
    width: fit-content;
    margin: 0;
    width: 100%;
    background: white;
    padding: 12px 20px;
    border-radius: 4px;
  }

  .tab-item {
    text-align: center;
    font-size: 14px;
    margin: 0 5px;
    color: #8a8d96;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
  }

  .tab-item.is-active {
    color: #4290ff;
    font-weight: bold;
  }

  button.btn-del-all-trans {
    width: 100%;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    border-radius: 6px;
    border: 1px solid #4290ff;
    background: #4290ff;
    height: 38px;
  }

  .trans-item {
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 20px;
    margin-top: 10px;
    background: #fff;
  }

  span.trans-money {
    color: #4290ff;
    font-size: 14px;
    text-align: right;
    width: 40%;
  }

  .trans-date p,
  .trans-des p {
    color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);
    font-size: 14px;
  }

  p .trans-status {
    color: #ec1a23;
    font-size: 14px;
  }

  .trans-header {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  label.trans-date {
    width: 60%;
  }

  .trans-info {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 15px;
  }

  label.trans-des {
    width: 80%;
  }

  .trans-img {
    width: 20%;
  }

  .trans-img img {
    height: auto;
    width: 50px;
  }
</style>