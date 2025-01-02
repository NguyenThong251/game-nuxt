import { useAuthStore } from "~/store/auth";
import { useConfigStore } from "~/store/config";
import { useSlotStore } from "~/store/slot"
import type { TAddFavoriteRequest } from "~/types/common";

type State = {
  currentTab: string;
  keyword: string;
  mode: string;
}

export const useSlot = () => {
  const route = useRoute()
  const router = useRouter()
  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)
  const configStore = useConfigStore()
  const slotStore = useSlotStore()
  const { handleDeleteFavorite: deleteFavorite } = useCommon()
  const state = reactive<State>({
    currentTab: '',
    keyword: (route?.query?.keyword as string) || '',
    mode: 'all'
  })
  const { slotCategories, gameSlots } = toRefs(slotStore)

  // Computed
  const gamesByCurrentTab = computed(() => {
    return gameSlots.value[state.currentTab]
  })

  // Method
  const handleActiveTab = (key: string) => {
    state.currentTab = key
    if (!gameSlots.value[key]) {
      slotStore.fetchGameSlots({
        lang: configStore.lang,
        gameType: 1,
        tag: 'all',
        api_code: key,
        keyword: '',
        page: 1,
        limit: 18,
      })
    }
  }
  const handleSearch = () => {
    router.push({ 
      path: '/slot',
      query: { keyword: state.keyword || '' }
    })
    slotStore.fetchGameSlots({
      lang: configStore.lang,
      gameType: 1,
      tag: 'all',
      api_code: state.currentTab,
      keyword: state.keyword || '',
      page: 1,
      limit: 18
    })
  }
  const handleChangePage = (page: number) => {
    slotStore.fetchGameSlots({
      lang: configStore.lang,
      gameType: 1,
      tag: 'all',
      api_code: state.currentTab,
      keyword: state.keyword,
      page: page,
      limit: gamesByCurrentTab.value.per_page,
    })
  }
  const handleChangeMode = (mode: string) => {
    state.mode = mode
    if (isAuthenticated.value && mode === 'favorite') {
      slotStore.fetchFavoriteList({ game_type: '1' })
    }
  }
  const handleDeleteFavorite= (body: TAddFavoriteRequest) => {
    deleteFavorite(body, () => {
      slotStore.removeGameFavorite(body.model_id)
    })
  }

  watch(() => slotCategories.value, () => {
    if (slotCategories.value.length > 0) {
      state.currentTab = slotCategories.value[0].api_name
    }
  }, { immediate: true })

  return {
    ...storeToRefs(slotStore),
    ...toRefs(state),

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
    handleSearch,
    handleChangePage,
    handleChangeMode,
    handleDeleteFavorite
  }
}