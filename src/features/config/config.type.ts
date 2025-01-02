import type { LANG, TResponse } from "~/types/common"

export type TLang = {
  default: string,
  list: {
    vi: string
  }
}
export interface ILangResponse extends TResponse<TLang>{}

export type TSystemConfigRequest = {
  group: string;
  url: string;
  lang: LANG;
}
export type TSystemConfig = {
  service_phone: string;
  is_system_maintenance: string;
  system_maintenance_whitelist: string;
  service_phone2: string;
  site_domain: string;
  wap_qrcode: string;
  wap_app_link: string;
  site_logo: string;
  site_logo2: string;
  site_slogan: string;
  site_pc: string;
  site_mobile: string;
  is_scroll_adv_open: string;
  is_demo_play_open: string;
  is_open_register: string;
  bank_desc: string;
  site_wap_logo: string;
}
export interface ISystemConfigResponse extends TResponse<TSystemConfig> {}

export type TSiteConfigRequest = {
  group: string;
  url: string;
  lang: LANG;
}
export type TSiteConfig = {
  system_maintenance_message: string;
  site_title: string;
  site_keyword: string;
  site_name: string;
}
export interface ISiteConfigResponse extends TResponse<TSiteConfig> {}

export type TAbout = {
  id: number;
  title: string;
  weight: number;
  type: number;
  lang: LANG;
  type_text: string;
}
export type TAboutRequest = {
  lang: LANG;
}
export interface IAboutResponse extends TResponse<Array<TAbout>> {}

export type TNoticesRequest = {
  lang: LANG
}
export type TNotice = {
  title: string;
  content: string;
  url: string;
}
export interface INoticesResponse extends TResponse<Array<TNotice>> {}