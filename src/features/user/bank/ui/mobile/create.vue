<template>
  <div class="p-4 bg-white">
    <CreateBankForm :loading="loading" @submit="handleCreateBank" />
  </div>

</template>
<script setup lang="ts">
  import type { TCreateBankBody } from '../../bank.type';
  import CreateBankForm from '../commons/create-bank-form.vue';

  type TProps = {
    loading: boolean;
  }
  defineProps<TProps>()
  const emit = defineEmits<{
    (e: 'submit', body: TCreateBankBody): void
  }>()

  const handleCreateBank = (body: TCreateBankBody) => {
    emit('submit', body)
  }
</script>