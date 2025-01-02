import type { TResponse } from "~/types/common"

export type TDepositHistory = {
  id: number,
  bill_no: string,
  member_id: string,
  name: string,
  origin_money: string;
  forex: string;
  lang: string;
  money: string;
  payment_type: string;
  account: string;
  payment_desc: null,
  payment_detail: string;
  payment_pic: string;
  status: string;
  diff_money: string;
  before_money: string;
  after_money: string;
  score: string;
  fail_reason: string;
  hk_at: string;
  confirm_at: string;
  user_id: 0,
  created_at: string;
  updated_at: string;
  status_text: string;
  payment_type_text: string;
}
export type TDepositHistoryStatus = {
  key: string;
  value: string;
}
export type TDepositHistoryRequest = {
  created_at?: Array<string>;
  status?: string;
  page?: number;
  limit?: number;
}
export type TDepositHistories = {
  data: Array<TDepositHistory>
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string;
  to: number;
  total: number;
}
export interface IDepositHistoryResponse extends TResponse<TDepositHistories> {
  statuses: Array<TDepositHistoryStatus>,
  statistic: {
    sum_money: string;
  }
}