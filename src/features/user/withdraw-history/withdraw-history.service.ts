import { $api } from "~/hooks/http-client";
import type { IWithdrawHistoryResponse, TWithdrawHistoryRequest } from "./withdraw-history.type";

const WITHDRAW_HISTORY_PATH = '/drawing/list'

export const fetchWithdrawHistoryApi = (body?: TWithdrawHistoryRequest): Promise<IWithdrawHistoryResponse> => {
  return $api(WITHDRAW_HISTORY_PATH, {
    method: 'POST',
    body
  })
}