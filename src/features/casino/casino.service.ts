import { $api } from '~/hooks/http-client'
import type { ICasinoCategoriesResponse, TCasinoCategoriesRequest } from './casino.type'

const GAMES_PATH = '/games/apis'

export const fetchCasinoCategoriesApi = async (query: TCasinoCategoriesRequest): Promise<ICasinoCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}