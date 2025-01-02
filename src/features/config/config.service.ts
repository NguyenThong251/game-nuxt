import { $api } from "~/hooks/http-client"
import type { IAboutResponse, ILangResponse, INoticesResponse, ISiteConfigResponse, ISystemConfigResponse, TAboutRequest, TNoticesRequest, TSiteConfigRequest, TSystemConfigRequest } from "./config.type"

const LANG_PATH = '/language'
const CONFIG_PATH = '/system/configs'
const ABOUT_PATH = '/about/list'
const NOTICES_PATH = '/system/notices'

export const fetchLangApi = async (): Promise<ILangResponse> => {
  return $api(LANG_PATH, {
    method: 'GET',
  })
}

export const fetchSystemConfigApi = async (params: TSystemConfigRequest): Promise<ISystemConfigResponse> => {
  return $api(CONFIG_PATH, {
    method: 'GET',
    params
  })
}

export const fetchSiteConfigApi = async (params: TSiteConfigRequest): Promise<ISiteConfigResponse> => {
  return $api(CONFIG_PATH, {
    method: 'GET',
    params
  })
}

export const fetchAboutApi = async (params: TAboutRequest): Promise<IAboutResponse> => {
  return $api(ABOUT_PATH, {
    method: 'GET',
    params
  })
}

export const fetchNoticesApi = async (params: TNoticesRequest): Promise<INoticesResponse> => {
  return $api(NOTICES_PATH, { 
    method: "GET",
    params
  })
}