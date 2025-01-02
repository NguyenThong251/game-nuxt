import { fetchBalanceChangesApi } from "~/features/user/balance-change/balance-change.service"
import type { TBalanceChangeRequest, TBalanceChanges, TOperateType } from "~/features/user/balance-change/balance-change.type"

type TState = {
  loading: boolean;
  balanceChanges: TBalanceChanges;
  operateTypes: Array<TOperateType>;
}

export const useBalanceChangeStore = defineStore('BalanceChange', () => {
  // State
  const state = reactive<TState>({
    loading: false,
    balanceChanges: {
      current_page: 1,
      data: [],
      per_page: 10,
      total: 0,
    },
    operateTypes: []
  })

  // Method
  const fetchBalanceChanges = async (payload: TBalanceChangeRequest) => {
    try {
      state.loading = true
      const { data, operate_type } =  await fetchBalanceChangesApi(payload)
      state.balanceChanges = data || []
      state.operateTypes = operate_type || []
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }

  return {
    // State
    ...toRefs(state),

    // Method
    fetchBalanceChanges
  }
})