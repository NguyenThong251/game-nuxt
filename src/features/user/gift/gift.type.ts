import type { TResponse } from "~/types/common";

export type TRequestGift = {
  code: string
}
export interface IGiftResponse extends TResponse<number> {}