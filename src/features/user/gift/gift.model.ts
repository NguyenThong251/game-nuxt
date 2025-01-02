import { $toast } from '~/hooks/toast';
import { giveGiftApi } from './gift.service';
import { useAuthStore } from '~/store/auth';

type State = {
  loading: boolean;
}

export const useGift = () => {
  const authStore = useAuthStore()

  const defaultState = () => ({
    loading: false,
  })

  // State
  const state = reactive<State>(defaultState())

  // Method
  const handleGiveGift = async (giftCode: string) => {
    try {
      state.loading = true
      const { data, message } = await giveGiftApi({ code: giftCode })
      authStore.updateUserMoney(data)
      $toast.success(message)
    } catch (error: any) {
      $toast.error(error.message, { autoClose: false })
    }
    state.loading = false
  }

  return {
    // State
    ...toRefs(state),

    // Method
    handleGiveGift
  }
}