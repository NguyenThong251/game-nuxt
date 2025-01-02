import type { TResponse } from "~/types/common";
import type { TCategoryGame } from "~/types/game";

export type TSportCategoriesRequest = {
  lang?: string;
  gameType?: number;
  tag?: string;
  api_code?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}

export interface ISportCategoriesResponse extends TResponse<Array<TCategoryGame>> {}