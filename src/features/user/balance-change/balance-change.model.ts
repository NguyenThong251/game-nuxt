import { useBalanceChangeStore } from "~/store/balance-change";
import type { TOperateType } from "./balance-change.type";

const operateTypeAll: TOperateType = { key: '', value: 'Tất cả' }

type TState = {
  currentOperateType: string | number;
  limit: number;
  createdAt: Array<string>;
}

export const useBalanceChange = () => {
  const balanceChangeStore = useBalanceChangeStore()
  const { formatDateTimeQuery } = useCommon()

  // State
  const state = reactive<TState>({
    currentOperateType: operateTypeAll.key,
    limit: 10,
    createdAt: []
  })

  // Computed
  const queryParams = computed(() => {
    let created_at = []
    if (state.createdAt?.length > 1) {
      created_at = [
        formatDateTimeQuery(state.createdAt[0]),
        formatDateTimeQuery(state.createdAt[state.createdAt.length - 1])
      ]
    } else {
      const preDate = new Date()
      preDate.setDate(preDate.getDate() - 30)
      preDate.setHours(0, 0, 0, 0)
      const nextDate = new Date()
      nextDate.setHours(23, 59, 59, 999)
      created_at = [
        formatDateTimeQuery(preDate.toLocaleString()),
        formatDateTimeQuery(nextDate.toLocaleString())
      ]
    }
    return {
      page: 1, 
      limit: state.limit, 
      created_at,
      ...(state.currentOperateType ? { operate_type: state.currentOperateType } : {})
    }
  })

  // Method
  const handleChangePagination = ({ page, itemsPerPage }: 
    { page: number, itemsPerPage: number }) => {
      balanceChangeStore.fetchBalanceChanges({ 
        ...queryParams.value,
        page, 
        limit: itemsPerPage, 
      })
  }

  // Watch
  watch(() => state.currentOperateType, () => {
    balanceChangeStore.fetchBalanceChanges(queryParams.value)
  })
  watch(() => state.createdAt, () => {
    if (state.createdAt && state.createdAt.length > 1) {
      balanceChangeStore.fetchBalanceChanges(queryParams.value)
    }
  }, { immediate: true })

  return {
    // State
    ...toRefs(state),
    ...storeToRefs(balanceChangeStore),
    operateTypeAll,

    // Method
    handleChangePagination
  }
}