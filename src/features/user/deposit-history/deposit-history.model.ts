import { fetchDepositHistoryApi } from "./deposit-history.service";
import type { TDepositHistoryStatus, TDepositHistoryRequest, TDepositHistories } from "./deposit-history.type";

type TState = {
  loading: boolean;
  depositHistories: TDepositHistories;
  status: Array<TDepositHistoryStatus>;
  currentStatus: string;
  createdAt: Array<string>;
}

const defaultDepositHistories = (): TDepositHistories => ({
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

export const useDepositHistory = () => {
  // State
  const state = reactive<TState>({
    loading: false,
    depositHistories: defaultDepositHistories(),
    status: [],
    currentStatus: '',
    createdAt: []
  })

  // Computed
  const statusOptions = computed(() => ([
    { key: '', value: 'Tất cả' },
    ...state.status
  ]))
  const queryParams = computed(() => ({
    page: state.depositHistories.current_page, 
    limit: state.depositHistories.per_page,
    ...(state.currentStatus ? { status: state.currentStatus } : {}),
    ...(state.createdAt?.length > 1 ? { 
      created_at: [
        new Date(state.createdAt[0])?.toISOString().slice(0, 19).replace('T', ' '),
        new Date(state.createdAt[state.createdAt.length - 1])?.toISOString().slice(0, 19).replace('T', ' ')
      ]
    } : {})
  }))

  // Method
  const fetchDepositHistory = async (body?: TDepositHistoryRequest, isLoadMore?: boolean) => {
    try {
      state.loading = true
      const { data } = await useAsyncData('DepositHistory', () => fetchDepositHistoryApi(body))
      state.depositHistories = data.value?.data ? {
        ...data.value?.data,
        data: isLoadMore ? [
          ...state.depositHistories?.data, 
          ...data?.value?.data?.data
        ] : [...data?.value?.data?.data]
      } : defaultDepositHistories()
      state.status = data.value?.statuses || []
    } catch (error) {
      console.log(error)
    }
    state.loading = false
  }
  const handleChangeStatus = (status: string) => {
    state.currentStatus = status
    fetchDepositHistory({ ...queryParams.value, page: 1 })
  }
  const handleLoadMore = () => {
    fetchDepositHistory(queryParams.value, true)
  }
  const handleChangePagination = ({ page, limit }: { page: number, limit: number }) => {
    fetchDepositHistory({ ...queryParams.value, page, limit })
  }
  const handleChangeCreatedAt = (createdAt: Array<string>) => {
    state.createdAt = createdAt
    fetchDepositHistory(queryParams.value)
  }

  return {
    // State
    ...toRefs(state),

    // Computed
    statusOptions,

    // Method
    fetchDepositHistory,
    handleChangeStatus,
    handleLoadMore,
    handleChangePagination,
    handleChangeCreatedAt
  }
}