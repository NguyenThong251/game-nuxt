import type { LANG, TResponse } from "./common";

export type TLoginRequest = { 
  lang: LANG; 
  username: string;
  password: string;
}
export type TLogin = {
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: string;
}
export interface ILoginResponse extends TResponse<TLogin> {}

export type TTokenInfo = {
  key: string;
  expiredDate: string;
  expiredIn: number;
}

export type TCaptchaResponse = {
  status: string;
  code: number;
  message: string;
  data: {
    sensitive: boolean;
    key: string;
    img: string;
  }
}

export type TMe = { 
  id: number;
  name: string;
  nickname: string;
  realname: string;
  email: string;
  phone: number;
  qq: string;
  line: string;
  facebook: string;
  gender: number;
  invite_code: string;
  money: number;
  fs_money: number;
  ml_money: string;
  total_money: string;
  score: string;
  register_ip: string;
  register_area: string;
  register_site: string;
  status: number;
  is_tips_on: number;
  is_in_on: number;
  is_trans_on: number;
  is_demo: number;
  lang: LANG;
  top_id: number;
  agent_id: number;
  total_credit: string;
  used_credit: string;
  level: number;
  level_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  has_qk_pwd: boolean;
}

export type TMeResponse = {
  status: string;
  code: number;
  message: string;
  data: TMe;
}