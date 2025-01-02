import { $api } from '~/hooks/http-client'
import type { IGameTxxdsResponse, ITxxdCategoriesResponse, TGameTxxdsRequest, TTxxdCategoriesRequest } from './txxd.type'

const GAMES_PATH = '/games/apis'
const GAMES_LIST_PATH = '/games/lists'

export const fetchTxxdCategoriesApi = (query: TTxxdCategoriesRequest): Promise<ITxxdCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchGameTxxdsApi = (query: TGameTxxdsRequest): Promise<IGameTxxdsResponse> => {
  return $api(GAMES_LIST_PATH, {
    method: 'GET',
    query
  })
}