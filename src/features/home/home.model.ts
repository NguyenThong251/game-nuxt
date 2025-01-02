import { useHomeStore } from "~/store/home"
import { DEVICE_TYPE } from "~/types/common"
import type { THomeBannersRequest } from "./home.type"
import { fetchBannersApi } from "./home.service"
import { useAuthStore } from "~/store/auth"

export const useHome = () => {
  const route = useRoute()
  const homeStore = useHomeStore()
  const authStore = useAuthStore()
  const { isAuthenticated } = storeToRefs(authStore)

  // Computed
  const queryParams = computed(() => route.query)
  
  // Method
  const fetchBanners = async (deviceType: DEVICE_TYPE, params: THomeBannersRequest) => {
    try {
      const { data } = await useAsyncData(`banners_${deviceType}`, () => fetchBannersApi(params))
      homeStore.loadBanners(deviceType, data?.value?.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  watch(() => queryParams.value, () => {
    if (!isAuthenticated.value && queryParams.value?.register) {
        authStore.handleOpenSignUpDialog()
    }
}, { immediate: true })

  return {
    // State
    ...storeToRefs(homeStore),

    // Method
    fetchBanners,
  }
}