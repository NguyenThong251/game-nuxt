import { fetchAboutApi, fetchLangApi, fetchNoticesApi, fetchSiteConfigApi, fetchSystemConfigApi } from "~/features/config/config.service";
import type { TAbout, TAboutRequest, TNotice, TNoticesRequest, TSiteConfig, TSiteConfigRequest, TSystemConfig, TSystemConfigRequest } from "~/features/config/config.type";
import { LANG } from "~/types/common";

const defaultSystemConfig = () => ({
  service_phone: "",
  is_system_maintenance: "",
  system_maintenance_whitelist: "",
  service_phone2: "",
  site_domain: "",
  wap_qrcode: "",
  wap_app_link: "",
  site_logo: "",
  site_logo2: "",
  site_slogan: "",
  site_pc: "",
  site_mobile: "",
  is_scroll_adv_open: "",
  is_demo_play_open: "",
  is_open_register: "",
  bank_desc: "",
  site_wap_logo: "",
})
const defaultSiteConfig = () => ({
  system_maintenance_message: '',
  site_title: '',
  site_keyword: '',
  site_name: '',
})

type State = {
  lang: LANG;
  langObject: { [key: string]: string },
  systemConfig: TSystemConfig,
  siteConfig: TSiteConfig,
  about: Array<TAbout>,
  notices: Array<TNotice>,
}

export const useConfigStore = defineStore('config', () => {
  // State
  const state = reactive<State>({
    lang: LANG.VI,
    langObject: {},
    systemConfig: defaultSystemConfig(),
    siteConfig: defaultSiteConfig(),
    about: [],
    notices: [],
  })

  // Computed
  const langList = computed(() => Object.keys(state?.langObject)?.map(key => ({
      lang: key as LANG, title: state?.langObject[key]
    })) || []
  ) 

  // Method
  const fetchLang = async () => {
    try {
      const { data }: any = await useAsyncData('lang', 
        () => fetchLangApi()
      )
      state.lang = data?.value?.data?.default || 'vi'
      state.langObject = data?.value?.data?.list || {}
    } catch (error) {
      console.log('Error: ', error)
    }
  }
  const fetchSystemConfig = async (params: TSystemConfigRequest) => {
    try {
      const { data } = await useAsyncData('system-config', 
        () => fetchSystemConfigApi(params)
      )
      loadSystemConfig(data?.value?.data || defaultSystemConfig())
    } catch (error) {
      console.log(error)
    }
  }
  const fetchSiteConfig = async (params: TSiteConfigRequest) => {
    try {
      const { data } = await useAsyncData('site-config', 
        () => fetchSiteConfigApi(params)
      )
      loadSiteConfig(data?.value?.data || defaultSiteConfig())
    } catch (error) {
      console.log(error)
    }
  }
  const fetchAbout = async (params: TAboutRequest) => {
    try {
      const { data } = await useAsyncData('about', 
        () => fetchAboutApi(params)
      )
      loadAbout(data?.value?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
  const fetchNotices = async (params: TNoticesRequest) => {
    try {
      const { data } = await useAsyncData('notices', () => {
        return fetchNoticesApi(params)
      })
      loadNotices(data?.value?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
  const changeLang = (lang: LANG) => {
    state.lang = lang
  }
  const loadSystemConfig = (data: TSystemConfig) => {
    state.systemConfig = data
  }
  const loadSiteConfig = (data: TSiteConfig) => {
    state.siteConfig = data
  }
  const loadAbout = (data: Array<TAbout>) => {
    state.about = data
  }
  const loadNotices = (notices: Array<TNotice>) => {
    state.notices = notices || []
  }

  return {
    // State
    ...toRefs(state),

    // Computed
    langList,

    // Method
    changeLang,
    fetchLang,
    fetchSystemConfig,
    fetchSiteConfig,
    fetchAbout,
    fetchNotices,
  }
})