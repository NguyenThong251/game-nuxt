import { $api } from "~/hooks/http-client";
import type { IDepositHistoryResponse, TDepositHistoryRequest } from "./deposit-history.type";

const DEPOSIT_HISTORY_PATH = '/recharge/list'

export const fetchDepositHistoryApi = (body?: TDepositHistoryRequest): Promise<IDepositHistoryResponse> => {
  return $api(DEPOSIT_HISTORY_PATH, {
    method: 'POST',
    body: body
  })
}