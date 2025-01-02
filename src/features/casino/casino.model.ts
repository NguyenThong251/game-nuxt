import { useCasinoStore } from "~/store/casino"

export const useCasino = () => {
  // State
  const casinoStore = useCasinoStore()

  // Method

  return {
    // State
    ...storeToRefs(casinoStore),

    // Method
  }
}