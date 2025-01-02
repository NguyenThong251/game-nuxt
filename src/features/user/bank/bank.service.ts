import { $api } from "~/hooks/http-client"
import type { ICreateBankResponse, IEditBankResponse, TCreateBankBody, TCreateBankRequest, TEditBankBody, TEditBankRequest } from "./bank.type"

const BANK_PATH = '/member/bank'

export const createBankApi = (query: TCreateBankRequest, body: TCreateBankBody): Promise<ICreateBankResponse> => {
  return $api(BANK_PATH, {
    method: 'POST',
    query,
    body
  })
}

export const editBankApi = (id: string, query: TEditBankRequest, body: TEditBankBody): Promise<IEditBankResponse> => {
  return $api(`${BANK_PATH}/${id}`, {
    method: 'PATCH',
    query,
    body
  })
}