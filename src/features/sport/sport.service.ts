import { $api } from '~/hooks/http-client'
import type { ISportCategoriesResponse, TSportCategoriesRequest } from './sport.type'

const GAMES_PATH = '/games/apis'

export const fetchSportCategoriesApi = async (query: TSportCategoriesRequest): Promise<ISportCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}