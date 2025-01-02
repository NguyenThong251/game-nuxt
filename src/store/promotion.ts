import { fetchPromotionsApi } from "~/features/promotion/promotion.service";
import type { TPromotion, TPromotionsRequest } from "~/features/promotion/promotion.type";

type State = {
  ids: Array<number>;
  entities: { [key: number]: TPromotion};
}

export const usePromotionStore = defineStore('promotion', () => {

  // State
  const state = reactive<State>({ 
    ids: [],
    entities: {},
  })

  // Computed
  const promotions = computed(() => state.ids.map(id => state.entities[id]))
  const promotionById = (id: number) => computed(() => state.entities[id])

  
  const fetchPromotions = async (params: TPromotionsRequest) => {
    try {
      const { data } = await useAsyncData('Promotion', () => fetchPromotionsApi(params))
      loadPromotions(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadPromotions = (data: Array<TPromotion>) => {
    state.ids = data.map(item => item.id)
    state.entities = Object.assign(
      {},
      data.reduce((acc, item) => {
        acc[item.id] = item
        return acc;
      }, {} as { [key: number]: TPromotion })
    )
  }

  return {
    // State
    ...toRefs(state),

    // Computed
    promotions,
    promotionById,

    // Method
    fetchPromotions,
  }
})