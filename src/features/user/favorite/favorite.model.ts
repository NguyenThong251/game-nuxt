import { useCasinoStore } from "~/store/casino"
import { useFishingStore } from "~/store/fishing"
import { useSlotStore } from "~/store/slot"
import { useSportStore } from "~/store/sport"

export const useFavorite = () => {
  const slotStore = useSlotStore()
  const sportStore = useSportStore()
  const casinoStore = useCasinoStore()
  const fishingStore = useFishingStore()
  const { favoriteList: favoriteListSlot } = storeToRefs(slotStore)
  const { favoriteList: favoriteListSport } = storeToRefs(sportStore)
  const { favoriteList: favoriteListCasino } = storeToRefs(casinoStore)
  const { favoriteList: favoriteListFishing } = storeToRefs(fishingStore)

  // Computed
  const favoriteList = computed(() => {
    return [
      {
        type: 'slot',
        title: 'Nổ hũ',
        icon: '/image/user/E-GAME.19918610.svg',
        list: favoriteListSlot.value || []
      },
      {
        type: 'casino',
        title: 'Casino',
        icon: '/image/user/V-GAME.4d1b05b6.svg',
        list: favoriteListCasino.value || []
      },
      {
        type: 'sport',
        title: 'Thể thao',
        icon: '/image/user/S-GAME.a83ab3d7.svg',
        list: favoriteListSport.value || []
      },
      {
        type: 'fishing',
        title: 'Bắn cá',
        icon: '/image/user/F-GAME.cc2c1d3f.svg',
        list: favoriteListFishing.value || []
      }
    ]
  })


  return {
    // Computed
    favoriteList
  }
}