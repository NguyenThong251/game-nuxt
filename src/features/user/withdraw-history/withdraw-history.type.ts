import type { TResponse } from "~/types/common"

export type TWithdrawHistory = {
  id: number;
  bill_no: string;
  member_id: string;
  name: string;
  money: string;
  account: string;
  before_money: string;
  after_money: string;
  score: string;
  counter_fee: string;
  fail_reason: string;
  member_bank_info: string;
  member_remark: string;
  confirm_at: string;
  status: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  status_text: string;
}
export type TWithdrawHistoryStatus = {
  key: string;
  value: string;
}
export type TWithdrawHistoryRequest = {
  created_at?: Array<string>;
  status?: string;
  page?: number;
  limit?: number;
}
export type TWithdrawHistories = {
  data: Array<TWithdrawHistory>
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
export interface IWithdrawHistoryResponse extends TResponse<TWithdrawHistories> {
  statuses: Array<TWithdrawHistoryStatus>,
  statistic: {
    sum_money: string;
  }
}



