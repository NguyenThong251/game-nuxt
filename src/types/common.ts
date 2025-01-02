import type { TGame } from "./game";

export type TResponse<T> = {
  status: string;
  code: number;
  message: string;
  data: T
}

export enum LANG {
  VI = 'vi'
}

export enum DEVICE_TYPE {
  PC = 'pc',
  MOBILE= 'mobile'
}

export type TClickGameParams = { id: string; game_code?: number | string; game_type: number; api_name: string; }

export type TAddFavoriteRequest = {
  game_type: number | string;
  api_name: string;
  model_id: string;
}

export type TFavoritesRequest = {
  game_type: string
}
export interface IFavoritesResponse extends TResponse<any> {
  apigames: Array<TGame>;
  gamelists: Array<TGame>;
}