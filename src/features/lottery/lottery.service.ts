import { $api } from '~/hooks/http-client'
import type { IGameLotteriesResponse, TGameLotteriesRequest } from './lottery.type'

const GAMES_PATH = '/games/apis'

export const fetchGameLotteriesApi = async (query: TGameLotteriesRequest): Promise<IGameLotteriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}