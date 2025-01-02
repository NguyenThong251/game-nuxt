import type { LANG, TResponse } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

export type TFishingCategoriesRequest = {
  lang?: string;
  gameType?: number;
  tag?: string;
  api_code?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}
export interface IFishingCategoriesResponse extends TResponse<Array<TCategoryGame>>{}

export type TGameFishingsRequest = {
  lang: LANG;
  gameType: number;
  tag?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}

export type TGameFishings = {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url?: string;
  path: string;
  per_page: number;
  prev_page_url?: string
  to: number;
  total: number;
  data: Array<TGame>
}
export interface IGameFishingsResponse extends TResponse<TGameFishings> {}