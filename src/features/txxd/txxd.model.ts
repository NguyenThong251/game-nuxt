import { useConfigStore } from "~/store/config";
import { useTxxdStore } from "~/store/txxd";

type State = {
  currentTab: string;
  keyword: string;
}

export const useTxxd = () => {
  const route = useRoute()
  const router = useRouter()
  const configStore = useConfigStore()
  const txxdStore = useTxxdStore()
  const state = reactive<State>({
    currentTab: '',
    keyword: (route?.query?.keyword as string) || ''
  })
  const { txxdCategories, gameTxxds } = toRefs(txxdStore)

  // Computed
  const gamesByCurrentTab = computed(() => {
    return gameTxxds.value[state.currentTab]
  })

  // Method
  const handleActiveTab = (key: string) => {
    state.currentTab = key
    if (!gameTxxds.value[key]) {
      txxdStore.fetchGameTxxds({
        lang: configStore.lang,
        gameType: 50,
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
      path: '/txxd',
      query: { keyword: state.keyword || '' }
    })
    txxdStore.fetchGameTxxds({
      lang: configStore.lang,
      gameType: 50,
      tag: 'all',
      api_code: state.currentTab,
      keyword: state.keyword || '',
      page: 1,
      limit: 18
    })
  }

  watch(() => txxdCategories.value, () => {
    if (txxdCategories.value.length > 0) {
      state.currentTab = txxdCategories.value[0].api_name
    }
  }, { immediate: true })

  return {
    ...storeToRefs(txxdStore),
    ...toRefs(state),

    // Computed
    gamesByCurrentTab,

    // Method
    handleActiveTab,
    handleSearch
  }
}