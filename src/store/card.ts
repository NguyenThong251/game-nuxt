import { fetchCardCategoriesApi, fetchGameCardsApi } from "~/features/card/card.service";
import type { TCardCategoriesRequest, TGameCards, TGameCardsRequest } from "~/features/card/card.type";
import type { TCategoryGame } from "~/types/game";

type State = {
  cardCategories: Array<TCategoryGame>;
  gameCards: { [key: string]: TGameCards };
}

export const useCardStore = defineStore('card', () => {
  // State
  const state = reactive<State>({ 
    cardCategories: [],
    gameCards: {}
  })

  // Computed

  // Method
  const fetchCardCategories = async (params: TCardCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('CardCategories', 
        () => fetchCardCategoriesApi(params)
      )
      loadCardCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadCardCategories = (data: Array<TCategoryGame>) => {
    state.cardCategories = data || []
  }
  const fetchGameCards = async (params: TGameCardsRequest) => {
    try {
      const { data } = await fetchGameCardsApi(params)
      if (data?.data) {
        loadGameCards(params.api_code, data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const loadGameCards = (apiCode: string, data: TGameCards) => {
    state.gameCards = {
      ...state.gameCards,
      [apiCode]: data
    }
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchCardCategories,
    fetchGameCards
  }
})