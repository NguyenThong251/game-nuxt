import { $api } from "~/hooks/http-client"
import { $toast } from "~/hooks/toast"
import { useAuthStore } from "~/store/auth"
import { useConfigStore } from "~/store/config"
import type { TAddFavoriteRequest, TClickGameParams } from "~/types/common"

export const useCommon = () => {
  const route = useRoute()
  const router = useRouter()
  const authStore = useAuthStore()
  const configStore = useConfigStore()

  // Method
  const _handleOpenGame = async (query: TClickGameParams, token?: string) => {
    try {
      const res: any = await $api('/game/launch', {
        method: 'GET',
        query,
        headers: {
          Authorization: `Bearer ${token || authStore.tokenInfo.key}`,
        }
      })
      if (res?.url) {
        await navigateTo(res.url, {
          external: true,
          open: {
            target: '_blank'
          }
        })
      } else {
        $toast.error("Can't launch game.", { autoClose: false });
      }
    } catch (error: any) {
      $toast.error(error?.message, { autoClose: false });
    }
  };
  const handleClickGame = (query: TClickGameParams) => {
    if (!authStore.isAuthenticated) {
      authStore.handleOpenSignInDialog(
        (token: string) => _handleOpenGame(query, token)
      )
    } else {
      _handleOpenGame(query)
    }
  }
  const handleOpenChat = () => {
    (window as any)?.LiveChatWidget?.call('maximize')
  }
  const _addFavorite = async (body: TAddFavoriteRequest) => {
    try {
      await $api('/favor/add', {
        method: 'POST',
        body,
        query :{ lang: configStore.lang }
      })
      $toast.success('Add favorate successfully!')
    } catch (error: any) {
      console.log(error)
      $toast.error(error?.message, { autoClose: false })
    }
  }
  const handleAddFavorite = async (body: TAddFavoriteRequest) => {
    if (!authStore.isAuthenticated) {
      authStore.handleOpenSignInDialog(
        (token: string) => _addFavorite(body)
      )
    } else {
      _addFavorite(body)
    }
  }
  const handleDeleteFavorite = async (body: TAddFavoriteRequest, callback: Function) => {
    try {
      await $api('/favor/delete', {
        method: 'POST',
        body,
        query :{ lang: configStore.lang }
      })
      callback()
      $toast.success('Delete favorate successfully!')
    } catch (error: any) {
      console.log(error)
      $toast.error(error?.message, { autoClose: false })
    }
  }
  const handleSignOut = () => {
    authStore.signOut()
    if (route.path.startsWith('/user')) {
      router.push({ path: '/' })
    }
  }
  const formatCurrency = (value: number) => {
    if (value === null || value === undefined) return '';

    // return (value || 0)
    //   .toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    //   .replace(/\./g, ',');

    const result = Math.floor(value / 1000).toLocaleString('en-US') + 'K';
    return result
  }
  const formatDateTime = (value: number) => {
    if (!value) return '';

    return new Date(value).toLocaleString()
  }
  const formatDateVN = (time: any) => {
    const date = time ? new Date(time) : new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  const formatDateTimeQuery = (dateString: string) => {
    const date = dateString ? new Date(dateString) : new Date();
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  return {
    // Method
    handleClickGame,
    handleOpenChat,
    handleAddFavorite,
    handleDeleteFavorite,
    handleSignOut,
    formatCurrency,
    formatDateTime,
    formatDateTimeQuery,
    formatDateVN
  }
}