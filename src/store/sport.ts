import { fetchSportCategoriesApi } from "~/features/sport/sport.service";
import type { TSportCategoriesRequest } from "~/features/sport/sport.type";
import { $api } from "~/hooks/http-client";
import type { TFavoritesRequest } from "~/types/common";
import type { TCategoryGame } from "~/types/game";

type State = {
  sportCategories: Array<TCategoryGame>;
  loading: boolean;
  favoriteList: Array<TCategoryGame>;
}

export const useSportStore = defineStore('sport', () => {

  // State
  const state = reactive<State>({ 
    sportCategories: [],
    loading: false,
    favoriteList: []
  })

  // Computed
  
  const fetchSportCategories = async (params: TSportCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('GameSports', 
        () => fetchSportCategoriesApi(params)
      )
      loadSportCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadSportCategories = (data: Array<TCategoryGame>) => {
    state.sportCategories = data || []
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
    fetchSportCategories,
    fetchFavoriteList,
    removeGameFavorite
  }
})