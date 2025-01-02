import { useConfigStore } from "~/store/config";
import { useHotStore } from "~/store/hot";

type State = {
  currentTab: string;
  keyword: string;
}

export const useHot = () => {
  const route = useRoute()
  const router = useRouter()
  const configStore = useConfigStore()
  const hotStore = useHotStore()
  const state = reactive<State>({
    currentTab: '',
    keyword: (route?.query?.keyword as string) || ''
  })
  const { hotCategories, gameHots } = toRefs(hotStore)

  // Computed
  const gamesByCurrentTab = computed(() => {
    return gameHots.value[state.currentTab]
  })

  // Method
  const handleActiveTab = (key: string) => {
    state.currentTab = key
    if (!gameHots.value[key]) {
      hotStore.fetchGameHots({
        lang: configStore.lang,
        gameType: 98,
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
      path: '/hot',
      query: { keyword: state.keyword || '' }
    })
    hotStore.fetchGameHots({
      lang: configStore.lang,
      gameType: 98,
      tag: 'all',
      api_code: state.currentTab,
      keyword: state.keyword || '',
      page: 1,
      limit: 18
    })
  }

  watch(() => hotCategories.value, () => {
    if (hotCategories.value.length > 0) {
      state.currentTab = hotCategories.value[0].api_name
    }
  }, { immediate: true })

  return {
    ...storeToRefs(hotStore),
    ...toRefs(state),

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
    handleSearch
  }
}