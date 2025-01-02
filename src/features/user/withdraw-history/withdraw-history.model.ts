import { fetchWithdrawHistoryApi } from "./withdraw-history.service";
import type { TWithdrawHistories, TWithdrawHistoryRequest, TWithdrawHistoryStatus } from "./withdraw-history.type";

type TState = {
  loading: boolean;
  withdrawHistories: TWithdrawHistories;
  status: Array<TWithdrawHistoryStatus>;
  currentStatus: string;
  createdAt: Array<string>;
}

const defaultWithdrawHistories = (): TWithdrawHistories => ({
  data: [],
  current_page: 1,
  first_page_url: '',
  from: 0,
  last_page: 0,
  last_page_url: '',
  next_page_url: '',
  path: '',
  per_page: 10,
  prev_page_url: '',
  to: 0,
  total: 0,
})

export const useWithdrawHistory = () => {
  // State
  const state = reactive<TState>({
    loading: false,
    currentStatus: '',
    withdrawHistories: defaultWithdrawHistories(),
    status: [],
    createdAt: []
  })

  // Computed
  const statusOptions = computed(() => ([
    { key: '', value: 'Tất cả' },
    ...state.status
  ]))
  const queryParams = computed(() => ({
    page: state.withdrawHistories.current_page, 
    limit: state.withdrawHistories.per_page,
    ...(state.currentStatus ? { status: state.currentStatus } : {}),
    ...(state.createdAt?.length > 1 ? { 
      created_at: [
        new Date(state.createdAt[0])?.toISOString().slice(0, 19).replace('T', ' '),
        new Date(state.createdAt[state.createdAt.length - 1])?.toISOString().slice(0, 19).replace('T', ' ')
      ]
    } : {})
  }))

  // Method
  const fetchWithdrawHistory = async (body?: TWithdrawHistoryRequest, isLoadMore?: boolean) => {
    try {
      state.loading = true
      const { data } = await useAsyncData('WithdrawHistory', () => fetchWithdrawHistoryApi(body))
      state.withdrawHistories = data.value?.data ? {
        ...data.value?.data,
        data: isLoadMore ? [
          ...state.withdrawHistories?.data, 
          ...data?.value?.data?.data
        ] : [...data?.value?.data?.data]
      } : defaultWithdrawHistories()
      state.status = data.value?.statuses || []
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const handleChangeStatus = (status: string) => {
    state.currentStatus = status
    fetchWithdrawHistory({ ...queryParams.value, page: 1 })
  }
  const handleLoadMore = () => {
    fetchWithdrawHistory({
      page: state.withdrawHistories.current_page + 1,
      limit: state.withdrawHistories.per_page,
      ...(state.currentStatus ? { status: state.currentStatus } : {})
    }, true)
  }
  const handleChangePagination = ({ page, limit }: { page: number, limit: number }) => {
    fetchWithdrawHistory({ ...queryParams.value, page, limit })
  }
  const handleChangeCreatedAt = (createdAt: Array<string>) => {
    state.createdAt = createdAt
    fetchWithdrawHistory(queryParams.value)
  }

  return {
    // State
    ...toRefs(state),

    // Computed
    statusOptions,

    // Method
    fetchWithdrawHistory,
    handleChangeStatus,
    handleLoadMore,
    handleChangePagination,
    handleChangeCreatedAt
  }
}