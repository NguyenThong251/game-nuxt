import { fetchBettingHistoriesApi, fetchGameListApi } from "~/features/user/betting-history/betting-history.service"
import type { TBettingHistoriesRequest, TBettingHistory, TGameListQuery } from "~/features/user/betting-history/betting-history.type"
import { useAuthStore } from "./auth";
import type { TGame } from "~/types/game";

type TState = {
  loading: boolean;
  gameList: Array<TGame>;
  bettingHistory: {
    limit: number;
    page: number;
    list: Array<TBettingHistory>;
    total: number;
  }
}


export const useBettingHistoryStore = defineStore('BettingHistory', () => {
  const { tokenInfo } = useAuthStore()

  // State
  const state = reactive<TState>({
    loading: false,
    gameList: [],
    bettingHistory: {
      page: 1,
      limit: 20,
      list: [],
      total: 0
    },
  })

  // computed
  const gameById = (id: string) => computed(() => {
    if (!id || state.gameList?.length === 0) return null;
    
    return state.gameList.find(game => game.id == id)
  })
  const bettingHistoryById = (id: string) => computed(() => {
    if (!id || state.bettingHistory?.list?.length === 0) return null;

    return state.bettingHistory.list.find(item => item.id == id)
  })

  // Method
  const fetchGameList = async (query: TGameListQuery) => {
    try {
      state.loading = true
      const res = await fetchGameListApi(query)
      state.gameList = res?.data?.data || []

      if (state.gameList?.length > 0) {
        fetchBettingHistories({
          sz: state.bettingHistory.limit,
          cp: 1,
          sId: state.gameList[0].game_code
        })
      }
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const fetchBettingHistories = async (query: TBettingHistoriesRequest, isLoadMore?: boolean) => {
    if (!tokenInfo.key) return;
    try {
      state.loading = true
      const res = await fetchBettingHistoriesApi(query, tokenInfo.key)
      state.bettingHistory = {
        ...state.bettingHistory,
        page: res?.curPage || 1,
        list: isLoadMore ? [...state.bettingHistory.list, ...res?.data] : res.data,
        total: res.totalItems || 0,
        limit: query.sz
      } 
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }

  return {
    // State
    ...toRefs(state),

    // Computed
    gameById,
    bettingHistoryById,

    // Method
    fetchGameList,
    fetchBettingHistories
  }
})