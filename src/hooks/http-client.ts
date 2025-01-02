import type { FetchOptions, FetchRequest } from 'ofetch'
import { ofetch as $fetch } from 'ofetch'
import { defu } from 'defu'
import type { TTokenInfo } from '~/types/auth'

export async function $api<T = unknown>(
  request: FetchRequest,
  options?: FetchOptions,
) {

  const config = useRuntimeConfig()
  const { handleSignOut } = useCommon()

  const headers: HeadersInit = {
    // 'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  const defaultConfig: FetchOptions = {
    baseURL: config.public.API_ENDPOINT,
    timeout: 10000,
    headers,
    async onRequest({ options: newOptions }) {
      const token: Ref<TTokenInfo> | null = useCookie('token')
      if (!(options?.headers as any)?.Authorization && token.value?.key) {
        Object.assign(newOptions, {
          headers: {
            Authorization: `Bearer ${token.value.key}`,
          },
        })
      }
    },
    async onResponseError(ctx) {
      if (ctx.response.status === 401) {
        // TODO: SignOut (Your session has expired. Please sign in again.)
        handleSignOut()
      }
      throw new Error(ctx?.response?._data?.message)
    }
  }

  return $fetch<T>(
    request,
    defu(options, defaultConfig) as FetchOptions<'json'>,
  )
}