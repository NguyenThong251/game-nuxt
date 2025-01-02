<template>
  <div class="p-4 bg-white">
    <EditBankForm :loading="loading" :edit-bank="editBank" @submit="handleEditBank" />
  </div>

</template>
<script setup lang="ts">
  import type { TMemberBank } from '~/features/auth/auth.type';
  import type { TCreateBankBody, TEditBankBody } from '../../bank.type';
  import EditBankForm from '../commons/edit-bank-form.vue';

  type TProps = {
    loading: boolean;
    editBank: TMemberBank | null;
  }
  const props = defineProps<TProps>()
  const emit = defineEmits<{
    (e: 'submit', { id, body }: { id: string, body: TEditBankBody }): void
  }>()

  const handleEditBank = (body: TCreateBankBody) => {
    emit('submit', { id: props.editBank!.id, body })
  }
</script>