import { fetchGameLotteriesApi } from "~/features/lottery/lottery.service"
import type { TGameLotteriesRequest } from "~/features/lottery/lottery.type"
import type { TGame } from "~/types/game"

type State = {
  lotteries: Array<TGame>
}

export const useLotteryStore = defineStore('lottery', () => {
  // State
  const state = reactive<State>({ 
    lotteries: []
  })

  // Computed

  // Method
  const fetchGameLotteries = async (params: TGameLotteriesRequest) => {
    try {
      const { data } = await useAsyncData('LotteryGame', 
        () => fetchGameLotteriesApi(params))
      loadGameLotteries(data?.value?.data?.data || [])
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const loadGameLotteries = (data: Array<TGame>) => {
    state.lotteries = data || []
  }

  return {
    // State
    ...toRefs(state),

    // Computed

    // Method
    fetchGameLotteries
  }
})