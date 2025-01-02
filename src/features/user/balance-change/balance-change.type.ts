import type { TResponse } from "~/types/common";

export type TBalanceChange = {
  id: number;
  member_id: string;
  money: string;
  money_before: string;
  money_after: string;
  money_type: string;
  number_type: number;
  operate_type: number;
  user_id: number;
  model_name: string;
  model_id: number;
  description: string;
  remark: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  operate_type_text: string;
  money_type_text: string;
}

export type TBalanceChangeRequest = {
  created_at?: Array<string>;
  operate_type?: number | string;
  page: number;
  limit: number;
}

export type TBalanceChanges = {
  current_page: number;
  data: Array<TBalanceChange>;
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string;
  path?: string;
  per_page: number;
  prev_page_url?: string;
  to?: number;
  total: number;
}

export type TOperateType = {
  key: number | string;
  value: string;
}

export interface IBalanceChangeResponse extends TResponse<TBalanceChanges> {
  operate_type: Array<TOperateType>,
  statistic: {
    sum_money: number;
    valid_money: number;
  }
}