import { fetchGameHotsApi, fetchHotCategoriesApi } from "~/features/hot/hot.service";
import type { TGameHots, TGameHotsRequest, THotCategoriesRequest } from "~/features/hot/hot.type";
import { LANG } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

type State = {
  loading: boolean;
  hotCategories: Array<TCategoryGame>;
  homeHots: Array<TGame>;
  gameHots: { [key: string]: TGameHots };
}

export const useHotStore = defineStore('hot', () => {
  // State
  const state = reactive<State>({ 
    loading: false,
    hotCategories: [],
    homeHots: [],
    gameHots: {}
  })

  // Computed

  // Method
  const fetchHotCategories = async (params: THotCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('HotCategories', 
        () => fetchHotCategoriesApi(params),
      )
      loadHotCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const fetchHomeHots = async ({ lang, gameType }: { lang: LANG, gameType: number }) => {
    try {
      // const { data } = await fetchGameHotsApi({ lang, gameType })
      // if (data?.data) {
      //   loadHomeHots(data.data)
      // }
      const { data } = await useAsyncData('HomeHots', 
        () => fetchGameHotsApi({ lang, gameType })
      )
      if (data.value?.data) {
        loadHomeHots(data.value.data.data as any)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchGameHots = async (params: TGameHotsRequest) => {
    try {
      state.loading = true
      // const { data } = await fetchGameHotsApi(params)
      // if (data?.data) {
      //   loadGameHots(params.api_code!, data)
      // }
      const { data } = await useAsyncData('GameHots', 
        () => fetchGameHotsApi(params),
      )
      if (data.value?.data) {
        loadGameHots(params.api_code!, data.value.data)
      }
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const loadHotCategories = (data: Array<TCategoryGame>) => {
    state.hotCategories = data || []
  }
  const loadHomeHots = (data: Array<TGame>) => {
    state.homeHots = data || []
  }
  const loadGameHots = (apiCode: string, data: TGameHots) => {
    state.gameHots = {
      ...state.gameHots,
      [apiCode]: data
    }
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchHotCategories,
    fetchHomeHots,
    fetchGameHots
  }
})