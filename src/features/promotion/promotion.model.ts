import { usePromotionStore } from "~/store/promotion"

export const usePromotion = () => {
  const promotionStore = usePromotionStore()
  const state = reactive<{ selectedPromotionId: number | null }>({ selectedPromotionId: null })

  return {
    // State
    ...toRefs(state),
    ...storeToRefs(promotionStore)
  }
}