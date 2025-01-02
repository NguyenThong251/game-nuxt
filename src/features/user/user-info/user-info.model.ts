import { useAuthStore } from "~/store/auth"

export const useUserInfo = () => {
  const { userInfo } = useAuthStore()

  return {
    userInfo
  }
}