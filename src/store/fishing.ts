import { fetchFishingCategoriesApi, fetchGameFishingsApi } from "~/features/fishing/fishing.service";
import type { TFishingCategoriesRequest, TGameFishingsRequest } from "~/features/fishing/fishing.type";
import { $api } from "~/hooks/http-client";
import type { TFavoritesRequest } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

type State = {
  fishingCategories: Array<TCategoryGame>;
  gameFishings: Array<TGame>;
  loading: boolean;
  favoriteList: Array<TCategoryGame>;
}

export const useFishingStore = defineStore('fishing', () => {
  // State
  const state = reactive<State>({ 
    fishingCategories: [],
    gameFishings: [],
    favoriteList: [],
    loading: false,
  })

  // Method
  const fetchFishingCategories = async (params: TFishingCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('FishingCategory', () => 
        fetchFishingCategoriesApi(params)
      )
      loadFishingCategories(data?.value?.data|| [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadFishingCategories = (data: Array<TCategoryGame>) => {
    state.fishingCategories = data || []
  }
  const fetchGameFishings = async (params: TGameFishingsRequest) => {
    try {
      const { data } = await useAsyncData('GameFishings', () => fetchGameFishingsApi(params))
      const res = data?.value?.data;
      loadGameFishings(res?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadGameFishings = (data: Array<TGame>) => {
    state.gameFishings = data || []
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

    // Method
    fetchFishingCategories,
    fetchGameFishings,
    fetchFavoriteList,
    removeGameFavorite
  }
})