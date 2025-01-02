import { useAuthStore } from "~/store/auth"
import { $toast } from "~/hooks/toast"
import { withdrawApi } from "./withdraw.service"
import type { TWithdrawRequest } from "./withdraw.type"
import { PageName } from "~/const"

type TState = { loading: boolean }

export const useWithdraw = () => {
  // State
  const router = useRouter()
  const authStore = useAuthStore()
  const { userInfo, formatedMoney, userBanks } = storeToRefs(authStore)
  const state = reactive<TState>({
    loading: false,
  })
  const rules = {
    bank: [
      (value: string) => {
        if (!value) return 'Thẻ ngân hàng bắt buộc';
        return true;
      }
    ],
    money: [
      (value: number) => {
        if (value === 0) return 'Số tiền bắt buộc nhập'
        if (value > userInfo.value.money) return 'Số tiền phải nhỏ hơn số dư'
        if (value < 30000) return 'Số tiền rút tối thiểu là 30.000'
        if (isNaN(value)) return 'Số tiền không hợp lệ'
        return true;
      }
    ],
    // password: [
    //   (value: string) => {
    //     if (!value) return 'Mật khẩu bắt buộc nhập'
    //     return true;
    //   }
    // ]
  }

  // Computed
  
  // Method
  const handleWithdraw = async (payload: TWithdrawRequest) => {
    try {
      state.loading = true
      const data = await withdrawApi(payload)
      authStore.updateUserMoney(data.data)
      router.push({ name: PageName.WithdrawHistory })
      setTimeout(() => {
        $toast.success(data.message)
      }, 500);
    } catch (error: any) {
      $toast.error(error?.message, { autoClose: false })
    }
    state.loading = false
  } 

  return {
    // State
    ...toRefs(state),
    rules,

    // Computed
    userBanks,
    formatedMoney,

    // Methods
    handleWithdraw
  }
}