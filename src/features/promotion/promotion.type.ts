import type { LANG, TResponse } from "~/types/common";

export type TPromotion = {
  id: number;
  title: string;
  subtitle: string;
  cover_image: string;
  type: number;
  weight: number;
  type_text: string;
}
export type TPromotionsRequest = {
  lang: LANG
}
export interface IPromotionsResponse extends TResponse<Array<TPromotion>> {}

export type TPromotionDetail = {
  id: string;
  title: string;
  content: string;
}
export interface IPromotionDetailResponse extends TResponse<TPromotionDetail> {}