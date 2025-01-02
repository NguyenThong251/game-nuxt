<template>
  <v-form fast-fail @submit.prevent="handleSubmit">
    <v-text-field v-model="state.giftCode" :rules="activeRules" label="Mã nhận quà" variant="outlined"
      density="compact" persistent-placeholder />
    <v-btn :loading="loading" color="primary" class="text-none w-full" type="submit" block>Xác nhận</v-btn>
  </v-form>
</template>
<script setup lang="ts">
  type State = {
    giftCode: string;
  }
  type TProps = {
    loading: boolean
  }

  defineProps<TProps>()
  const emit = defineEmits<{
    (e: "submit", giftCode: string): void
  }>()

  const defaultState = () => ({
    giftCode: '',
  })

  // State
  const state = reactive<State>(defaultState())
  const isSubmitting = ref(false) // Cờ kiểm tra trạng thái submit
  const rules = {
    giftCode: [
      (value: string) => {
        if (!value) return 'Mã code bắt buộc';
        return true;
      }
    ],
  }
  // Active rules chỉ kích hoạt nếu không phải trong trạng thái submit
  const activeRules = computed(() => {
    return isSubmitting.value ? [] : rules.giftCode
  })
  // Method
  const handleSubmit = async (event: Event) => {
    const result: any = await event;
    if (!result.valid) return;
    emit('submit', state.giftCode)
    // Đặt trạng thái submit thành true để ngăn kiểm tra lỗi
    isSubmitting.value = true;
    state.giftCode = ''
    // Reset trạng thái sau một khoảng thời gian ngắn (để tránh lỗi)
    setTimeout(() => {
      isSubmitting.value = false;
    }, 100);
  } 
</script>