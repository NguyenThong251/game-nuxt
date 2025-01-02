import { useConfigStore } from '~/store/config';
import { $toast } from '~/hooks/toast';
import { PageName } from '~/const';
import type { TCreateBankBody } from './bank.type';
import { createBankApi, editBankApi } from './bank.service';
import { useAuthStore } from '~/store/auth';

type TState = {
  loading: boolean;
}

export const useCreateBank = () => {
  const router = useRouter()
  const configStore = useConfigStore()
  const { lang } = storeToRefs(configStore)
  const state = reactive<TState>({
    loading: false,
  })

  // Method
  const handleCreateBank = async (body: TCreateBankBody) => {
    try {
      state.loading = true
      const { data } = await createBankApi({ lang: lang.value }, body)
      router.push({ name: PageName.BankList })
      setTimeout(() => {
        $toast.success("Tạo thẻ ngân hàng thành công")
      }, 100);
    } catch (error: any) {
      console.log(error)
      $toast.error(error?.message || 'Tạo thẻ ngân hàng thất bại')
    }
    state.loading = false
  }
  return {
    // State
    ...toRefs(state),

    // Method
    handleCreateBank
  }
}

export const useEditBank = () => {
  const route = useRoute()
  const router = useRouter()
  const configStore = useConfigStore()
  const { lang } = storeToRefs(configStore)
  const authStore = useAuthStore()
  const state = reactive<TState>({
    loading: false,
  })

  // Computed
  const bankId = computed<string>(() => (route.query?.id || '') as string)
  const editBank = computed(() => authStore.userBankById(bankId.value).value)

  // Method
  const handleEditBank = async ({ id, body }: { id: string, body: TCreateBankBody }) => {
    try {
      state.loading = true
      const { data } = await editBankApi(id, { lang: lang.value }, body)
      router.push({ name: PageName.BankList })
      setTimeout(() => {
        $toast.success("Sửa thẻ ngân hàng thành công")
      }, 100);
    } catch (error: any) {
      console.log(error)
      $toast.error(error?.message || 'Sửa thẻ ngân hàng thất bại')
    }
    state.loading = false
  }
  return {
    // State
    ...toRefs(state),

    // Computed
    editBank,

    // Method
    handleEditBank
  }
}