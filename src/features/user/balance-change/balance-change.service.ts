import { $api } from "~/hooks/http-client"
import type { IBalanceChangeResponse, TBalanceChangeRequest } from "./balance-change.type"

const MONEY_LOG_PATH = '/moneylog'

export const fetchBalanceChangesApi = (payload: TBalanceChangeRequest): Promise<IBalanceChangeResponse> => {
  return $api(MONEY_LOG_PATH, {
    method: 'POST',
    body: payload
  })
}