import { fetchGameSlotsApi, fetchSlotCategoriesApi } from "~/features/slot/slot.service";
import type { TGameSlots, TGameSlotsRequest, TSlotCategoriesRequest } from "~/features/slot/slot.type";
import { $api } from "~/hooks/http-client";
import type { TFavoritesRequest } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

type State = {
  loading: boolean;
  slotCategories: Array<TCategoryGame>;
  gameSlots: { [key: string]: TGameSlots };
  favoriteList: Array<TGame>;
}

export const useSlotStore = defineStore('slot', () => {
  // State
  const state = reactive<State>({ 
    loading: false,
    slotCategories: [],
    gameSlots: {},
    favoriteList: []
  })

  // Computed

  // Method
  const fetchSlotCategories = async (params: TSlotCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('SlotCategories', 
        () => fetchSlotCategoriesApi(params),
      )
      loadSlotCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const fetchGameSlots = async (params: TGameSlotsRequest) => {
    try {
      state.loading = true
      const { data } = await fetchGameSlotsApi(params)
      if (data?.data) {
        loadGameSlots(params.api_code, data)
      }
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const fetchFavoriteList = async (query: TFavoritesRequest) => {
    try {
      state.loading = true
      const { gamelists }: any = await $api('/favor/list', {
        method: 'GET',
        query
      })
      state.favoriteList = gamelists || []
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }

  const loadSlotCategories = (data: Array<TCategoryGame>) => {
    state.slotCategories = data || []
  }
  const loadGameSlots = (apiCode: string, data: TGameSlots) => {
    state.gameSlots = {
      ...state.gameSlots,
      [apiCode]: data
    }
  }
  const removeGameFavorite = (removedId: string) => {
    state.favoriteList = state.favoriteList.filter((item: any) => item.id != removedId)
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchSlotCategories,
    fetchGameSlots,
    fetchFavoriteList,
    removeGameFavorite
  }
})