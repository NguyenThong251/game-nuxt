import type { LANG, TResponse } from "~/types/common"
import type { TGame } from "~/types/game";

export type TGameListQuery = {
  lang: LANG;
  gameType: string;
}
export type TGameListResponse = {
  current_page: string;
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
export interface IGameListResponse extends TResponse<TGameListResponse>{}

export type TBettingHistory = {
  id: string;
  ag: string;
  items: Array<{
    id: number;
    bet: number;
    gain: number;
    rate: number;
    winloss: number
  }>;
  winloss: number;
  gain: number;
  win: number;
  bet: number;
  time: number;
  finished: boolean;
  result: {
    score: number;
    facesList: Array<number>;
    resultTypes: Array<number>;
    resultType: number;
  }
}

export type TBettingHistoriesRequest = {
  sz: number;
  cp: number;
  sId: string;
}

export interface IBettingHistoriesResponse extends TResponse<Array<TBettingHistory>> {
  totalItems: number;
  curPage: number;
}