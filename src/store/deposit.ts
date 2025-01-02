import { fetchBanksApi } from "~/features/user/deposit/deposit.service"
import type { TBank } from "~/features/user/deposit/deposit.type"

type State = {
  banks: Array<TBank>
}

export const useDepositStore = defineStore('deposit', () => {
  // State
  const state = reactive<State>({
    banks: []
  })

  // Method
  const fetchBanks = async () => {
    try {
      const res = await fetchBanksApi()
      loadBanks(res?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
  const loadBanks = (data: Array<TBank>) => {
    state.banks = data || []
  }

  return {
    // State
    ...toRefs(state),

    // Method
    fetchBanks
  }
})