import { useConfigStore } from "~/store/config";
import { useFishingStore } from "~/store/fishing"

type State = {
  keyword: string;
}

export const useFishing = () => {
  // State
  const route = useRoute()
  const router = useRouter()
  const configStore = useConfigStore()
  const fishingStore = useFishingStore()
  const state = reactive<State>({
    keyword: (route?.query?.keyword as string) || ''
  })

  // Method
  const handleSearch = () => {
    router.push({ 
      path: '/fishing',
      query: { keyword: state.keyword || '' }
    })
    fishingStore.fetchGameFishings({
      lang: configStore.lang,
      gameType: 8,
      keyword: state.keyword || '',
      page: 1,
      limit: 18
    })
  }

  return {
    // State
    ...storeToRefs(fishingStore),
    ...toRefs(state),

    // Method
    handleSearch,
  }
}