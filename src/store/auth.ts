import { fetchMemberBanksApi, fetchMemberBankTypesApi } from "~/features/auth/auth.service";
import type { TMemberBank, TMemberBanksRequest, TMemberBankType } from "~/features/auth/auth.type";
import { $api } from "~/hooks/http-client";
import { $toast } from "~/hooks/toast";
import type { ILoginResponse, TCaptchaResponse, TLogin, TLoginRequest, TMe, TMeResponse, TTokenInfo } from "~/types/auth";
import { LANG } from "~/types/common";

type State = {
  signInDialogVisible: boolean;
  signUpDialogVisible: boolean;
  changePasswordDialogVisible: boolean;
  tokenInfo: {
    key: string;
    expiredDate: string;
    expiredIn: number;
  }
  userInfo: TMe;
  userBanks: Array<TMemberBank>;
  userBankTypes: TMemberBankType;
  callbackSignIn: Function | null;
}
const defaultTokenInfo = (): TTokenInfo => ({
  key: '',
  expiredDate: '',
  expiredIn: 0
})
const defaultUserInfo = (): TMe => ({
  id: 0,
  name: '',
  nickname: '',
  realname: '',
  email: '',
  phone: 0,
  qq: '',
  line: '',
  facebook: '',
  gender: 0,
  invite_code: '',
  money: 0,
  fs_money: 0,
  ml_money: '',
  total_money: '',
  score: '',
  register_ip: '',
  register_area: '',
  register_site: '',
  status: 0,
  is_tips_on: 0,
  is_in_on: 0,
  is_trans_on: 0,
  is_demo: 0,
  lang: LANG.VI,
  top_id: 0,
  agent_id: 0,
  total_credit: '',
  used_credit: '',
  level: 0,
  level_name: '',
  created_at: '',
  updated_at: '',
  deleted_at: '',
  has_qk_pwd: false
})

export const useAuthStore = defineStore('auth', () => {
  // State
  const initToken = useCookie('token')
  const state = reactive<State>({
    signInDialogVisible: false,
    signUpDialogVisible: false,
    changePasswordDialogVisible: false,
    tokenInfo: initToken.value ? (initToken.value as unknown as TTokenInfo) : defaultTokenInfo(),
    userInfo: defaultUserInfo(),
    userBanks: [],
    userBankTypes: {},
    callbackSignIn: null
  })

  // Computed
  const isAuthenticated = computed(() => {
    if (!state?.tokenInfo?.key) return false;

    const now = new Date();
    const expiredDate = new Date(state.tokenInfo.expiredDate);
    return state.tokenInfo.key && (expiredDate.getTime() > now.getTime())
  })
  const formatedMoney = computed(() => 
    // (state.userInfo?.money || 0).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    Math.floor((state.userInfo?.money || 0) / 1000).toLocaleString('en-US') + 'K'
  )
  const userBankTypeList = computed(() => 
    Object.entries(state.userBankTypes).map(([key, value]) => ({ key, value }))
  )
  const userBankById = (id: string) => computed(
    () => (state.userBanks.find(bank => bank.id == id) as TMemberBank)
  )

  // Method
  const getMeInfo = async (token?: string) => {
    try {
      const meRes: TMeResponse = await $api('/auth/me', {
        method: "POST",
        ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
        query: { lang: 'vi' }
      })
      // Set me info to store
      loadMeInfo(meRes.data || {})
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const signIn = async (payload: TLoginRequest) => {
    try {
      // const captchaRes: TCaptchaResponse = await $api('/auth/captcha', {
      //   method: "POST",
      //   query: { lang: payload.lang || 'vi' }
      // })
      // if (!captchaRes?.data?.key) return;

      const loginRes: ILoginResponse = await $api('/auth/login', {
        method: "POST",
        query: { lang: payload.lang || 'vi' },
        body: { 
          name: payload.username,
          password: payload.password,
          // key: captchaRes.data.key,
          captcha: ""
        }
      })

      const tokenInfo = loginRes.data || {}

      // Set token to store
      loadTokenInfo(tokenInfo)

      // Get me info
      await getMeInfo(tokenInfo.access_token)

      // Show noti
      $toast.success('Login successfully!')

      // Call callback function after login successfully
      if (state.callbackSignIn) {
        state.callbackSignIn(tokenInfo.access_token)
        state.callbackSignIn = null;
      }
    } catch (error: any) {
      $toast.error(error.message, { autoClose: false })
    }
  }
  const signOut = () => {
    state.tokenInfo = { key: '', expiredDate: '', expiredIn: 0 }
    const token = useCookie('token')
    token.value = null
  }
  const loadTokenInfo = (tokenInfo: TLogin) => {
    // Set token to cookies
    let expiredDate = new Date()
    const milliseconds = (tokenInfo?.expires_in || 3600) * 1000; // 1 seconds = 1000 milliseconds
    expiredDate = new Date(expiredDate.getTime() + milliseconds);

    const tokenData = () => ({
      key: tokenInfo?.access_token,
      expiredDate: expiredDate.toString(),
      expiredIn: tokenInfo?.expires_in
    })

    const token = useCookie('token', {
      default: () => tokenData(),
      expires: expiredDate
    })
    token.value = tokenData()

    state.tokenInfo = tokenData()
  }
  const loadMeInfo = (data: TMe) => {
    state.userInfo = { ...data }
  }
  const reset = () => {
    state.userInfo = defaultUserInfo()
    state.tokenInfo = defaultTokenInfo()
    initToken.value = null
    state.userBanks = []
  }
  const fetchMemberBanks = async (query: TMemberBanksRequest) => {
    try {
      const data = await fetchMemberBanksApi(query)
      loadUserBanks(data.data || [])
    } catch (error) {
      console.log(error)
    }
  }
  const fetchMemberBankTypes = async (query: TMemberBanksRequest) => {
    try {
      const data = await fetchMemberBankTypesApi(query)
      loadUserBankTypes(data.data || {})
    } catch (error) {
      console.log(error)
    }
  }
  const loadUserBanks = (data: Array<TMemberBank>) => {
    state.userBanks = data || []
  }
  const loadUserBankTypes = (data: TMemberBankType) => {
    state.userBankTypes = data || {}
  }
  const handleOpenSignInDialog = (callback?: Function) => {
    state.signInDialogVisible = true
    state.callbackSignIn = callback || null
  }
  const handleCloseSignInDialog = () => {
    state.signInDialogVisible = false
    state.callbackSignIn = null;
  }
  const handleOpenSignUpDialog = () => {
    state.signUpDialogVisible = true
  }
  const handleCloseSignUpDialog = () => {
    state.signUpDialogVisible = false
  }
  const handleOpenChangePasswordDialog = () => {
    state.changePasswordDialogVisible = true
  }
  const handleCloseChangePasswordDialog = () => {
    state.changePasswordDialogVisible = false
  }
  const updateUserMoney = (money: number) => {
    state.userInfo.money = money
  }

  return { 
    // State
    ...toRefs(state),

    // Computed
    isAuthenticated,
    formatedMoney,
    userBankTypeList,
    userBankById,

    // Method
    getMeInfo,
    signIn,
    signOut,
    reset,
    fetchMemberBanks,
    fetchMemberBankTypes,
    loadTokenInfo,
    updateUserMoney,
    handleOpenSignInDialog,
    handleCloseSignInDialog,
    handleOpenSignUpDialog,
    handleCloseSignUpDialog,
    handleOpenChangePasswordDialog,
    handleCloseChangePasswordDialog
  }
})