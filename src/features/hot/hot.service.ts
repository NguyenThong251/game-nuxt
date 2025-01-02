import { $api } from '~/hooks/http-client'
import type { IGameHotsResponse, IHotCategoriesResponse, TGameHotsRequest, THotCategoriesRequest } from './hot.type'

const GAMES_PATH = '/games/apis'
const GAMES_LIST_PATH = '/games/lists'

export const fetchHotCategoriesApi = (query: THotCategoriesRequest): Promise<IHotCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchGameHotsApi = (query: TGameHotsRequest): Promise<IGameHotsResponse> => {
  return $api(GAMES_LIST_PATH, {
    method: 'GET',
    query
  })
}