import { $api } from '~/hooks/http-client'
import type { ICardCategoriesResponse, IGameCardsResponse, TCardCategoriesRequest, TGameCardsRequest } from './card.type'

const GAMES_PATH = '/games/apis'
const GAMES_LIST_PATH = '/games/lists'

export const fetchCardCategoriesApi = async (query: TCardCategoriesRequest): Promise<ICardCategoriesResponse> => {
  return $api(GAMES_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchGameCardsApi = (query: TGameCardsRequest): Promise<IGameCardsResponse> => {
  return $api(GAMES_LIST_PATH, {
    method: 'GET',
    query
  })
}