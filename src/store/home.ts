import type { TBanner, TUpcommingGame } from "~/features/home/home.type"
import type { DEVICE_TYPE } from "~/types/common"

type State = {
  banners: { pc: Array<TBanner>, mobile: Array<TBanner> },
  upcommingGames: Array<TUpcommingGame>,
}

export const useHomeStore = defineStore('home', () => {
  // State
  const state = reactive<State>({
    banners: { pc: [], mobile: [] },
    upcommingGames: [],
  })

  // Computed

  // Method
  const loadBanners = (deviceType: DEVICE_TYPE, banners: Array<TBanner>) => {
    state.banners[deviceType] = banners || []
  }
  const loadUpcommingGames = (games: Array<TUpcommingGame>) => {
    state.upcommingGames = games || []
  }

  return {
    // State
    ...toRefs(state),
    
    // Computed

    // Method
    loadBanners,
    loadUpcommingGames,
  }
})