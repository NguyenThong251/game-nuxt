import { $api } from '~/hooks/http-client'
import type { IGameSlotsResponse, ISlotCategoriesResponse, TGameSlotsRequest, TSlotCategoriesRequest } from './slot.type'

const GAMES_PATH = '/games/apis'
const GAMES_LIST_PATH = '/games/lists'

export const fetchSlotCategoriesApi = (query: TSlotCategoriesRequest): Promise<ISlotCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchGameSlotsApi = (query: TGameSlotsRequest): Promise<IGameSlotsResponse> => {
  return $api(GAMES_LIST_PATH, {
    method: 'GET',
    query
  })
}