import { $api } from "~/hooks/http-client";
import type { IPromotionDetailResponse, IPromotionsResponse, TPromotionsRequest } from "./promotion.type";

const PROMOTION_PATH = 'activities'
const PROMOTION_DETAIL_PATH = 'activity'

export const fetchPromotionsApi = (query: TPromotionsRequest): Promise<IPromotionsResponse> => {
  return $api(PROMOTION_PATH, {
    method: 'GET',
    query
  })
}

export const fetchPromotionDetailApi = (id: number) : Promise<IPromotionDetailResponse> => {
  return $api(`${PROMOTION_DETAIL_PATH}/${id}`, {
    method: 'GET',
  })
}