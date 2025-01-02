import type { LANG, TResponse } from "~/types/common";
import type { TCategoryGame, TGame } from "~/types/game";

export type TSlotCategoriesRequest = {
  lang: LANG;
  gameType: number;
  tag?: string;
  api_code?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}
export interface ISlotCategoriesResponse extends TResponse<Array<TCategoryGame>> {}

export type TGameSlotsRequest = {
  lang: LANG;
  gameType: number;
  tag: string;
  api_code: string;
  keyword: string;
  page: number;
  limit: number;
}
export type TGameSlots = {
  current_page: number;
  data: Array<TGame>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
export interface IGameSlotsResponse extends TResponse<TGameSlots> {}