import { useCardStore } from "~/store/card"
import { useConfigStore } from "~/store/config";

type State = {
  currentTab: string;
  keyword: string;
}

export const useCard = () => {
  // State
  const route = useRoute()
  const router = useRouter()
  const configStore = useConfigStore()
  const cardStore = useCardStore()
  const { cardCategories, gameCards } = toRefs(cardStore)
  const state = reactive<State>({
    currentTab: '',
    keyword: (route?.query?.keyword as string) || ''
  })

  // Computed
  const gamesByCurrentTab = computed(() => {
    if (!gameCards.value || !state.currentTab) return null

    return gameCards.value[state.currentTab]
  })

  // Method
  const handleActiveTab = (key: string) => {
    state.currentTab = key

    if (!gameCards.value[key]) {
      cardStore.fetchGameCards({
        lang: configStore.lang,
        gameType: 6,
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
      path: '/card',
      query: { keyword: state.keyword || '' }
    })
    cardStore.fetchGameCards({
      lang: configStore.lang,
      gameType: 6,
      tag: 'all',
      api_code: state.currentTab,
      keyword: state.keyword || '',
      page: 1,
      limit: 18
    })
  }

  watch(() => cardCategories.value, () => {
    if (cardCategories.value?.length > 0) {
      state.currentTab = cardCategories.value[0].api_name
    }
  }, { immediate: true })

  return {
    // State
    ...storeToRefs(cardStore),
    ...toRefs(state),

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
    handleSearch
  }
}