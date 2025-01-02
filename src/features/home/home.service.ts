import { $api } from '~/hooks/http-client'
import { type IHomeBannersResponse,  type THomeBannersRequest, type TUpcommingGame } from './home.type'

const BANNERS_PATH = '/banners'

export const fetchBannersApi = async (params: THomeBannersRequest): Promise<IHomeBannersResponse> => {
  return $api(BANNERS_PATH, {
    method: 'GET',
    params,
  })
}