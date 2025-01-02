import type { LANG, TResponse } from "~/types/common"

export type TCreateBankRequest = {
  lang: LANG;
}
export type TCreateBankBody = {
  member_id: string;
  card_no: string;
  bank_type: string;
  bank_address: string;
  owner_name: string;
}
export interface ICreateBankResponse extends TResponse<any> {}

export type TEditBankRequest = {
  lang: LANG;
}
export type TEditBankBody = {
  member_id: string;
  card_no: string;
  bank_type: string;
  bank_address: string;
  owner_name: string;
}
export interface IEditBankResponse extends TResponse<any> {}