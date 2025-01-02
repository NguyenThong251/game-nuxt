import type { LANG, TResponse } from "~/types/common";

export type TSignUpRequest = {
  invite_code: string;
  name: string;
  password: string;
  password_confirmation: string;
  phone: string;
  qk_pwd: string;
  realname: string;
  register_site: string;
  key: string;
  captcha: string;
  sms_code: string;
  lang: string;
}
export interface ISignUpResponse extends TResponse<any> {
  token: string;
}

export type TMemberBank = {
  id: string;
  member_id: string;
  card_no: string;
  bank_type: string;
  phone: number;
  owner_name: string;
  bank_address: string;
  remark: string;
  created_at: string;
  updated_at: string;
  url: string;
  bank_type_text: string;
}
export type TMemberBankType = {
  [key: string]: string;
}
export type TMemberBanksRequest = {
  lang: LANG
}
export type TMemberBankTypesRequest = {
  lang: LANG
}

export interface IMemberBanksResponse extends TResponse<Array<TMemberBank>> {}
export interface IMemberBankTypesResponse extends TResponse<TMemberBankType> {}

export type TChangePasswordQuery = {
  lang: LANG
}
export type TChangePasswordBody = {
  oldpassword: string;
  password: string;
  password_confirmation: string;
}
export interface IChangePasswordResponse extends TResponse<any> {}