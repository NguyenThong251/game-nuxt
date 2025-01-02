import type { LANG, TResponse } from "~/types/common";

export type TBanner = {
  title: string;
  url: string;
  groups: string;
  dimensions: string;
  weight: number;
  jump_link: string;
  is_new_window: number;
}

export interface IHomeBannersResponse extends TResponse<Array<TBanner>> {}

export type THomeBannersRequest = {
  group: string;
  lang: LANG;
}

export type TGamesRequest = {
  lang: LANG;
}

export type TGameOverview = {
  title: string;
  game_type: number;
  mobile_pic: string;
  tags: string;
  params: string;
  api_name: string;
  weight: number;
  game_type_text: string;
  game_type_cn_text: string;
}

export type TGameGroupByCategory = {
  title: string;
  icon_before: string;
  icon_after: string;
  child: Array<TGameOverview>
}

export interface IGamesResponse extends TResponse<Array<TGameGroupByCategory>> {
  web: Array<{ name: string; weight: string }>;
}

export type TUpcommingGame = {
  id: number,
  title: string;
  subtitle: string;
  web_pic: string;
  web_logo: string;
  mobile_pic: string;
  logo_url: string;
  api_name: string;
  class_name: string;
  game_type: number;
  params: string;
  is_open: number;
  weight: number;
  client_type: number;
  tags: string;
  remark: string;
  lang_json: string;
  lang: LANG;
  created_at: string;
  updated_at: string;
  icon_url: string;
}
