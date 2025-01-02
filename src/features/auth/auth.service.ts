import { $api } from "~/hooks/http-client";
import type { IChangePasswordResponse, IMemberBanksResponse, IMemberBankTypesResponse, ISignUpResponse, TChangePasswordBody, TChangePasswordQuery, TMemberBanksRequest, TMemberBankTypesRequest, TSignUpRequest } from "./auth.type";
import type { LANG } from "~/types/common";

const MEMBER_BANKS_PATH = '/member/bank'
const MEMBER_BANK_TYPES_PATH = '/member/bank/type'
const SIGN_UP_PATH = '/auth/register'
const CHANGE_PASSWORD_PATH = '/member/password/modify'

export const signUpApi = (lang: LANG, body: TSignUpRequest): Promise<ISignUpResponse> => {
  return $api(SIGN_UP_PATH, {
    method: 'POST',
    body: body,
    query: { lang }
  })
}

export const fetchMemberBanksApi = (query: TMemberBanksRequest): Promise<IMemberBanksResponse> => {
  return $api(MEMBER_BANKS_PATH, {
    method: 'GET',
    query
  })
}

export const fetchMemberBankTypesApi = (query: TMemberBankTypesRequest): Promise<IMemberBankTypesResponse> => {
  return $api(MEMBER_BANK_TYPES_PATH, {
    method: 'GET',
    query
  })
}

export const changePasswordApi = (query: TChangePasswordQuery, body: TChangePasswordBody): Promise<IChangePasswordResponse> => {
  return $api(CHANGE_PASSWORD_PATH, {
    method: 'POST',
    body,
    query
  })
}