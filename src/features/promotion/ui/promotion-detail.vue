<template>
  <v-dialog :model-value="visible" :fullscreen="$vuetify.display.xs"
    :class="!$vuetify.display.xs ? 'max-w-[700px]' : ''" persistent>
    <v-card :loading="state.loading">
      <v-card-item style="margin: 0; padding: 4px;">
        <template #append>
          <v-btn icon="$close" variant="text" @click="handleClose"></v-btn>
        </template>
      </v-card-item>
      <v-card-text>
        <div class="text-center font-bold text-lg mb-8">{{ state.promotionDetail?.title }}</div>
        <div v-html="state.promotionDetail?.content"></div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
  import { fetchPromotionDetailApi } from '../promotion.service';
  import type { TPromotionDetail } from '../promotion.type';

  type TProps = {
    visible: boolean;
    promotionId: number | null;
  }
  const props = defineProps<TProps>()

  const emit = defineEmits<{
    (e: 'close'): void
  }>()

  const state = reactive<{ loading: boolean; promotionDetail: TPromotionDetail | null }>({
    loading: false,
    promotionDetail: null
  })

  // Method
  const handleClose = () => {
    emit('close')
  }
  const getPromotionDetail = async () => {
    try {
      state.loading = true
      const data = await fetchPromotionDetailApi(props.promotionId!)
      state.promotionDetail = data.data
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }

  // Watch
  watch(() => props.promotionId, () => {
    if (props.promotionId) {
      getPromotionDetail()
    }
  }, { immediate: true })

</script>