import { fetchCasinoCategoriesApi } from "~/features/casino/casino.service"
import type { TCasinoCategoriesRequest } from "~/features/casino/casino.type"
import { $api } from "~/hooks/http-client"
import type { TFavoritesRequest } from "~/types/common"
import type { TCategoryGame } from "~/types/game"

type State = {
  casinoCategories: Array<TCategoryGame>;
  loading: boolean;
  favoriteList: Array<TCategoryGame>;
}

export const useCasinoStore = defineStore('casino', () => {
  // State
  const state = reactive<State>({ 
    casinoCategories: [],
    loading: false,
    favoriteList: []

  })

  // Computed

  // Method
  const fetchCasinoCategories = async (params: TCasinoCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('CasinoCategories', 
        () => fetchCasinoCategoriesApi(params)
      )
      loadCasinoCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadCasinoCategories = (data: Array<TCategoryGame>) => {
    state.casinoCategories = data || []
  }
  const fetchFavoriteList = async (query: TFavoritesRequest) => {
    try {
      state.loading = true
      const { apigames }: any = await $api('/favor/list', {
        method: 'GET',
        query
      })
      state.favoriteList = apigames || []
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const removeGameFavorite = (removedId: string) => {
    state.favoriteList = state.favoriteList.filter((item: any) => item.id != removedId)
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchCasinoCategories,
    fetchFavoriteList,
    removeGameFavorite
  }
})