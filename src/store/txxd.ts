import { fetchGameTxxdsApi, fetchTxxdCategoriesApi } from "~/features/txxd/txxd.service";
import type { TGameTxxds, TGameTxxdsRequest, TTxxdCategoriesRequest } from "~/features/txxd/txxd.type";
import { LANG } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

type State = {
  loading: boolean;
  txxdCategories: Array<TCategoryGame>;
  homeTxxds: Array<TGame>;
  gameTxxds: { [key: string]: TGameTxxds };
}

export const useTxxdStore = defineStore('txxd', () => {
  // State
  const state = reactive<State>({ 
    loading: false,
    txxdCategories: [],
    homeTxxds: [],
    gameTxxds: {}
  })

  // Computed

  // Method
  const fetchTxxdCategories = async (params: TTxxdCategoriesRequest) => {
    try {
      const { data } = await useAsyncData('TxxdCategories', 
        () => fetchTxxdCategoriesApi(params),
      )
      loadTxxdCategories(data?.value?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const fetchHomeTxxds = async ({ lang, gameType }: { lang: LANG, gameType: number }) => {
    try {
      const { data } = await fetchGameTxxdsApi({ lang, gameType })
      if (data?.data) {
        loadHomeTxxds(data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchGameTxxds = async (params: TGameTxxdsRequest) => {
    try {
      state.loading = true
      const { data } = await fetchGameTxxdsApi(params)
      if (data?.data) {
        loadGameTxxds(params.api_code!, data)
      }
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const loadTxxdCategories = (data: Array<TCategoryGame>) => {
    state.txxdCategories = data || []
  }
  const loadHomeTxxds = (data: Array<TGame>) => {
    state.homeTxxds = data || []
  }
  const loadGameTxxds = (apiCode: string, data: TGameTxxds) => {
    state.gameTxxds = {
      ...state.gameTxxds,
      [apiCode]: data
    }
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchTxxdCategories,
    fetchHomeTxxds,
    fetchGameTxxds
  }
})