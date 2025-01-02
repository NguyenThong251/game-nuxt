import { $api } from "~/hooks/http-client";
import type { IWithdrawResponse, TWithdrawRequest } from "./withdraw.type";

const WITHDRAW_PATH = '/drawing'

export const withdrawApi = (body: TWithdrawRequest): Promise<IWithdrawResponse> => {
  return $api(WITHDRAW_PATH, {
    method: 'POST',
    body: body
  })
} 