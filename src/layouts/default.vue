<template>
  <div>
    <AppHeader :lang="lang" :langObject="langObject" :langList="langList" :categories="categories"
      :system-config="systemConfig" @change-lang="handleChangeLang" />
    <slot></slot>
    <AppFooter :about-list="about" />
  </div>

  <DialogSignUp />
  <DialogSignIn />
  <DialogChangePassword />
</template>
<script setup lang="ts">
  import { useAuthStore } from '~/store/auth';
  import { useCardStore } from '~/store/card';
  import { useCasinoStore } from '~/store/casino';
  import { useConfigStore } from '~/store/config';
  import { useFishingStore } from '~/store/fishing';
  import { useHotStore } from '~/store/hot';
  import { useLotteryStore } from '~/store/lottery';
  import { useSlotStore } from '~/store/slot';
  import { useSportStore } from '~/store/sport';
  import { useTxxdStore } from '~/store/txxd';
  import { LANG } from '~/types/common';

  const {
    // State
    lang,
    langObject,
    systemConfig,
    hotCategories,
    homeHots,
    homeTxxds,
    sportCategories,
    casinoCategories,
    slotCategories,
    fishingCategories,
    cardCategories,
    about,

    // Computed
    langList,
  } = useInitialData()
  const configStore = useConfigStore()
  const authStore = useAuthStore()
  const casinoStore = useCasinoStore()
  const fishingStore = useFishingStore()
  const slotStore = useSlotStore()
  const lotteryStore = useLotteryStore()
  const sportStore = useSportStore()
  const cardStore = useCardStore()
  const hotStore = useHotStore()
  const txxdStore = useTxxdStore()

  const { isAuthenticated } = storeToRefs(authStore)

  await configStore.fetchLang()

  if (isAuthenticated.value) {
    authStore.getMeInfo();
  }
  configStore.fetchSystemConfig({
    group: 'system',
    url: 't79.bet',
    lang: configStore.lang
  })
  configStore.fetchSiteConfig({
    group: 'site',
    url: 't79.bet',
    lang: configStore.lang
  })

  hotStore.fetchHotCategories({ lang: configStore.lang, gameType: 98, page: 1, limit: 18 });
  hotStore.fetchHomeHots({ lang: configStore.lang, gameType: 98 });
  txxdStore.fetchTxxdCategories({ lang: configStore.lang, gameType: 50, page: 1, limit: 18 });
  txxdStore.fetchHomeTxxds({ lang: configStore.lang, gameType: 50 });
  sportStore.fetchSportCategories({ lang: configStore.lang, gameType: 3, page: 1, limit: 18 });
  casinoStore.fetchCasinoCategories({ lang: configStore.lang, gameType: 2, page: 1, limit: 18 });
  slotStore.fetchSlotCategories({ lang: configStore.lang, gameType: 1, page: 1, limit: 18 });
  cardStore.fetchCardCategories({ lang: configStore.lang, gameType: 6, page: 1, limit: 18 });
  fishingStore.fetchFishingCategories({ lang: configStore.lang, gameType: 8, keyword: '', page: 1, limit: 18 });
  // lotteryStore.fetchGameLotteries({ lang: configStore.lang, gameType: 99, page: 1, limit: 18 });

  configStore.fetchAbout({ lang: configStore.lang })
  configStore.fetchNotices({ lang: configStore.lang })

  const categories = computed(() => ([
    { title: 'Hot', href: '/hot', gameType: 98, data: homeHots.value?.slice(0, 5) },
    { title: 'Thể Thao', href: '/sport', gameType: 5, data: sportCategories.value?.slice(0, 5) },
    { title: 'Casino', href: '/casino', gameType: 1, data: casinoCategories.value?.slice(0, 5) },
    { title: 'Nổ Hũ', href: '/slot', gameType: 3, data: slotCategories.value?.slice(0, 5) },
    { title: 'Game Bài', href: '/card', gameType: 6, data: cardCategories.value?.slice(0, 5) },
    { title: 'Bắn Cá', href: '/fishing', gameType: 2, data: fishingCategories.value?.slice(0, 5) },
    { title: 'Phổ Biến', href: '/txxd', gameType: 50, data: homeTxxds.value?.slice(0, 5) },
    // { title: 'Xổ Số', href: '/lottery', gameType: 4, data: lotteries.value?.slice(0, 4) },
  ]))

  // Method
  const handleChangeLang = (lang: LANG) => {
    configStore.changeLang(lang)
  }

  useHead({
    title: configStore.siteConfig.site_title,
  })
</script>