import type { LANG, TResponse } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

export type TCardCategoriesRequest = {
  lang?: string;
  gameType?: number;
  tag?: string;
  api_code?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}
export interface ICardCategoriesResponse extends TResponse<Array<TCategoryGame>> {}

export type TGameCardsRequest = {
  lang: LANG;
  gameType: number;
  tag: string;
  api_code: string;
  keyword: string;
  page: number;
  limit: number;
}
export type TGameCards = {
  current_page: number;
  data: Array<TGame>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: null;
  path: string;
  per_page: string;
  prev_page_url: string;
  to: number;
  total: number;
}
export interface IGameCardsResponse extends TResponse<TGameCards> {}