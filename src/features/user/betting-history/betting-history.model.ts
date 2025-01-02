import { BETTING_HISTORY_MAPPING } from "~/const/betting-history";
import { useBettingHistoryStore } from "~/store/betting-history";
import type { TGame } from "~/types/game";
import type { TBettingHistory } from "./betting-history.type";

type TBettingHistoryListState = {
  currentGame: TGame | null;
  selectedBettingHistory: TBettingHistory | null;
}

export const useBettingHistoryList = () => {
  const bettingHistoryStore = useBettingHistoryStore()
  const { gameList, bettingHistory } = storeToRefs(bettingHistoryStore)

  // State
  const state = reactive<TBettingHistoryListState>({
    currentGame: null,
    selectedBettingHistory: null
  })

  // Computed
  const bettingHistoryMapping = computed(() => {
    if (!state.currentGame?.api?.api_id) return null;

    return BETTING_HISTORY_MAPPING[state.currentGame.api.api_id]
  })

  // Method
  const handleChangeGame = (game: TGame) => {
    state.currentGame = game
    bettingHistoryStore.fetchBettingHistories({ 
      sId: game.game_code, 
      sz: bettingHistory.value.limit, 
      cp: 1
    })
  }
  const handleChangePagination = ({ page, limit }: { page: number, limit: number }) => {
    if (!state.currentGame) return;
    
    bettingHistoryStore.fetchBettingHistories({ 
      sId: state.currentGame!.game_code,
      sz: limit, 
      cp: page
    })
  }
  const handleLoadMore = ({ page, limit }: { page: number, limit: number }) => {
    if (!state.currentGame) return;
    
    bettingHistoryStore.fetchBettingHistories({ 
      sId: state.currentGame!.game_code,
      sz: limit, 
      cp: page
    }, true)
  }
  const handleOpenDetail = (value: TBettingHistory) => {
    state.selectedBettingHistory = value
  }
  const handleCloseDetail = () => {
    state.selectedBettingHistory = null
  }

  watch(() => gameList.value, () => {
    if (gameList.value?.length > 0) {
      state.currentGame = gameList.value[0]
    }
  }, { immediate: true })

  return {
    // State
    ...toRefs(state),

    // Computed
    bettingHistoryMapping,

    // Method
    handleChangeGame,
    handleChangePagination,
    handleLoadMore,
    handleOpenDetail,
    handleCloseDetail
  }
}

export const useBettingHistoryDetail = (game: TGame) => {

  // Computed
  const bettingHistoryMapping = computed(() => {
    if (!game?.api?.api_id) return null;

    return BETTING_HISTORY_MAPPING[game?.api?.api_id]
  })

  return {
    // Computed
    bettingHistoryMapping
  }
}