import { $api } from '~/hooks/http-client'
import type { IFishingCategoriesResponse, IGameFishingsResponse, TFishingCategoriesRequest, TGameFishingsRequest } from './fishing.type'

const GAMES_PATH = '/games/apis'
const GAME_LIST_PATH = '/games/lists'

export const fetchFishingCategoriesApi = async (query: TFishingCategoriesRequest): Promise<IFishingCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchGameFishingsApi = async (query: TGameFishingsRequest): Promise<IGameFishingsResponse> => {
  return $api(GAME_LIST_PATH, {
    method: 'GET',
    query
  })
}