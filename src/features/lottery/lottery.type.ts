import type { TResponse } from "~/types/common";
import type { TGame } from "~/types/game";

export type TGameLotteriesRequest = {
  lang?: string;
  gameType?: number;
  tag?: string;
  api_code?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}
export type TGameLotteries = {
  current_page: number;
  data: Array<TGame>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
export interface IGameLotteriesResponse extends TResponse<TGameLotteries> {}