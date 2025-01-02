import { $api } from "~/hooks/http-client";
import type { IBanksResponse, IDepositResponse, TDepositRequest } from "./deposit.type";

const BANKS_PATH = '/payment/online/banks'
const DEPOSIT_PATH = '/payment/online/recharge'

export const fetchBanksApi = (): Promise<IBanksResponse> => {
  return $api(BANKS_PATH, {
    method: 'GET'
  })
}

export const depositApi = (body: TDepositRequest): Promise<IDepositResponse> => {
  return $api(DEPOSIT_PATH, {
    method: "POST",
    body: body
  })
}