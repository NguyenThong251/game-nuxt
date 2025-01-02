import type { LANG } from "./common";

export type TCategoryGame = {
  id: string;
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

export type TGame = {
  id: string;
  api_name: string;
  name: string;
  en_name: string;
  game_type: number;
  game_code: string;
  img_path: string;
  img_url: string;
  client_type: string;
  platform: string;
  param_remark: string;
  is_open: string;
  weight: string;
  tags: string;
  created_at: string;
  updated_at: string;
  full_image_url: string;
  api: {
    api_id: string;
    api_name: string;
    api_title: string
  }
}