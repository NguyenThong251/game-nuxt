import type { TDepositRequest } from "./deposit.type"
import { depositApi } from "./deposit.service"
import { $toast } from "~/hooks/toast"
import { PageName } from "~/const"

export const useDeposit = () => {
  // State
  const router = useRouter()
  const state = reactive<{ loading: boolean }>({
    loading: false
  })

  // Method
  const handleDeposit = async (body: TDepositRequest) => {
    try {
      state.loading = true
      const res = await depositApi(body)
      if (res?.pay_url) {
        await navigateTo(res.pay_url, {
          external: true,
          open: {
            target: '_blank'
          }
        })
      } else {
        $toast.error("URL thanh toán không tồn tại", { autoClose: false });
      }
      router.push({ name: PageName.DepositHistory})
      setTimeout(() => {
        $toast.success(res.message)
      }, 100);
    } catch (error) {
      $toast.error(error?.message, { autoClose: false })
      console.log(error)
    }
    state.loading = false
  }

  return {
    // State
    ...toRefs(state),

    // Method
    handleDeposit
  }
}