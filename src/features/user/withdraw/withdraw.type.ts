import type { TResponse } from "~/types/common";

export type TWithdrawRequest = {
  name: string;
  money: string;
  account: string;
  member_bank_id: string;
  member_bank_text: string;
  member_remark: string;
  qk_pwd?: string;
}
export interface IWithdrawResponse extends TResponse<any> {}