import { useSportStore } from "~/store/sport"

export const useSport = () => {
  // State
  const sportStore = useSportStore()

  // Method

  return {
    // State
    ...storeToRefs(sportStore),

    // Method
  }
}