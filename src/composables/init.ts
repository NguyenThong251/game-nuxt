import { useConfigStore } from "~/store/config"
import { useCardStore } from "~/store/card";
import { useCasinoStore } from "~/store/casino";
import { useFishingStore } from "~/store/fishing";
import { useLotteryStore } from "~/store/lottery";
import { useSlotStore } from "~/store/slot";
import { useSportStore } from "~/store/sport"
import { useHotStore } from "~/store/hot";
import { useTxxdStore } from "~/store/txxd";

export const useInitialData = () => {
  const configStore = useConfigStore()
  const hotStore = useHotStore()
  const txxdStore = useTxxdStore()
  const sportStore = useSportStore()
  const casinoStore = useCasinoStore()
  const slotStore = useSlotStore()
  const cardStore = useCardStore()
  const fishingStore = useFishingStore()
  const lotteryStore = useLotteryStore()

  return {
    // State
    ...storeToRefs(configStore),
    ...storeToRefs(hotStore),
    ...storeToRefs(sportStore),
    ...storeToRefs(casinoStore),
    ...storeToRefs(slotStore),
    ...storeToRefs(fishingStore),
    ...storeToRefs(cardStore),
    ...storeToRefs(lotteryStore),
    ...storeToRefs(txxdStore)
  }
}