import { $api } from "~/hooks/http-client"
import type { IGiftResponse, TRequestGift } from "./gift.type"

const GIFT_PATH = '/redeem'
export const giveGiftApi = (body: TRequestGift): Promise<IGiftResponse> => {
  return $api(GIFT_PATH, {
    method: 'POST',
    body
  })
}