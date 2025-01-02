import type { TResponse } from "~/types/common";

export type TBank = {
  code: string;
  name: string;
  shortName: string;
  logo: string;
  napas_code: string;
  napas_bin: string;
  napas_swiftCode: string;
}
export type TBanksRequest = {

}
export interface IBanksResponse extends TResponse<Array<TBank>> {}

export type TDepositRequest = {
  money: number;
}
export interface IDepositResponse extends TResponse<any> {
  pay_url: string;
}