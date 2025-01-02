import { $api } from "~/hooks/http-client"
import type { IBettingHistoriesResponse, IGameListResponse, TBettingHistoriesRequest, TGameListQuery } from "./betting-history.type"

const GAMES_LIST_PATH = '/games/lists'
const BETTING_HISTORIES_PATH =  '/history/6'

export const fetchGameListApi = (query: TGameListQuery): Promise<IGameListResponse> => {
  return $api(GAMES_LIST_PATH, {
    method: 'GET',
    query
  })
}

export const fetchBettingHistoriesApi = (query: TBettingHistoriesRequest, token: string): Promise<IBettingHistoriesResponse> => {
  const config = useRuntimeConfig()
  return $api(BETTING_HISTORIES_PATH, {
    method: 'GET',
    query,
    baseURL: config.public.OTHER_API_ENDPOINT,
    headers: {
      'Authorization': token
    }
  })
}